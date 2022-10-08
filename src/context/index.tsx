/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
	createContext, useState, useEffect, ChangeEvent
} from 'react';
import {
	signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile
} from 'firebase/auth';
import {
	collection, doc, query, addDoc, getDoc, getDocs, onSnapshot, updateDoc, deleteDoc, orderBy, limit
} from 'firebase/firestore';
import {
	NavigateFunction, useNavigate, useLocation, Location
} from 'react-router-dom';
import { IContextProps } from './IContextProps';
import { IErrorProps } from '../utils/interfaces';
import { validEmailRegexData } from '../constants/validEmailRegexData';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Context: React.Context<any> = createContext(null);

const ContextProvider = ({
	children,
	auth,
	db,
	isModalShown,
	setIsModalShown,
	isUserLoggedIn
}: IContextProps) => {
	const [navbarDisplayName, setNavbarDisplayName]: [string, Function] = useState<string>('');
	const [error, setError]: [IErrorProps | undefined, Function] = useState<IErrorProps | undefined>(undefined);
	const [loading, setLoading]: [boolean, Function] = useState<boolean>(false);
	const provider: GoogleAuthProvider = new GoogleAuthProvider();
	const navigate: NavigateFunction = useNavigate();
	const location: Location = useLocation();

	// check if valid email
	const checkValidEmail = (inputEmail: string): boolean => !!inputEmail.match(validEmailRegexData);

	// check if valid password
	const checkValidPassword = (
		inputPassword: string,
		inputPasswordConfirm: string
	) => !!(inputPassword.length > 8 && inputPassword === inputPasswordConfirm);

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>, setState: Function): void => {
		setState(event.target.value);
	};

	// clear all input element states to empty string
	const clearInputs = (inputSetStatesArray: Function[]): void => {
		inputSetStatesArray.forEach((curr: Function) => curr(''));
	};

	// scroll to top of specified DOM element
	const scrollToTop = (): void => {
		const appElement: HTMLElement | null = document.querySelector('.App');
		const pageElement: HTMLElement | null = document.querySelector('.Page');

		// prevent .Page from being overlapped by .Navbar;
		// offset position from top by 100px (bc .Navbar is 100px height);
		// scrollIntoView() doesn't provide offset positioning
		if (appElement && pageElement) {
			appElement.scrollTo({
				top: pageElement.offsetTop - 100,
				behavior: 'smooth'
			});
		}
	};

	// scroll to bottom of specified DOM element
	const scrollToBottom = (): void => {
		const appElement: HTMLElement | null = document.querySelector('.App');

		if (appElement) {
			appElement.scrollTo({
				top: appElement.scrollHeight,
				behavior: 'smooth'
			});
		}
	};

	// login account with google account
	const loginWithGoogle = async (): Promise<void> => {
		if (!auth.currentUser) {
			try {
				await signInWithPopup(auth, provider);
				scrollToTop();
			} catch (error) {
				setError(error);
			}
		}
	};

	// log out of account
	const logOut = async (): Promise<void> => {
		if (auth.currentUser) {
			try {
				await signOut(auth);
				scrollToTop();
				navigate('/');
			} catch (error) {
				setError(error);
			}
		}
	};

	// CREATE
	const createDocument = async (
		collectionName: string,
		dataObj: any
	): Promise<void> => {
		try {
			await addDoc(collection(db, collectionName), dataObj);
		} catch (error) {
			setError(error);
		}
	};

	// READ ALL DOCUMENTS ONCE
	const readAllDocuments = async (
		collectionName: string,
		orderedBy: string = '',
		limitedBy: number = 0
	): Promise<any> => {
		try {
			let allDocuments: any;
			const returnArray: any = [];

			// eslint-disable-next-line no-nested-ternary
			orderedBy
				? (
					limitedBy
						? allDocuments = await getDocs(query(collection(db, collectionName), orderBy(orderedBy), limit(limitedBy)))
						: allDocuments = await getDocs(query(collection(db, collectionName), orderBy(orderedBy)))
				)
				: (
					limitedBy
						? allDocuments = await getDocs(query(collection(db, collectionName), limit(limitedBy)))
						: allDocuments = await getDocs(query(collection(db, collectionName)))
				);

			allDocuments.forEach((doc: any) => returnArray.push({
				...doc.data(),
				id: doc.id
			}));

			return returnArray;
		} catch (error) {
			setError(error);
		}
	};

	// READ
	const readDocument = async (
		collectionName: string,
		documentId: string
	): Promise<any> => {
		try {
			const document: any = await getDoc(doc(db, collectionName, documentId));

			return document.data();
		} catch (error) {
			setError(error);
		}
	};

	// READ WITHOUT KNOWING DOC ID
	const readDocumentWoId = async (
		collectionName: string
	): Promise<any> => {
		try {
			const response: any = await readAllDocuments(collectionName);
			// return the currently signed in user's object in an array
			if (collectionName === 'users') return response.filter((curr: any) => curr.uid === auth.currentUser.uid);

			return response;
		} catch (error) {
			setError(error);
		}
	};

	// READ ALL ONSNAPSHOT
	const readAllDocumentsOnSnapshot = (
		collectionName: string,
		orderedBy: string
	): any => {
		// query method used for specifying which documents you want to retrieve from a collection
		const messagesQuery: any = query(collection(db, collectionName), orderBy(orderedBy), limit(1000));

		// onSnapshot doesn't return promise and means you're attaching a permanent listener that listens for realtime updates; 'getDocs' returns promise and gets data once
		onSnapshot(messagesQuery, (snapshot: any) => {
			const returnArray: any = [];

			snapshot.forEach((doc: any) => returnArray.push({
				...doc.data(),
				id: doc.id
			}));

			return returnArray;
		});
	};

	// UPDATE
	const updateDocument = async (
		collectionName: string,
		documentId: string,
		key: string,
		value: any,
		overwriteField: boolean = true
	): Promise<void> => {
		try {
			const field: any = {};
			const existingDocumentData: any = await readDocument(collectionName, documentId);

			overwriteField
				? field[key] = value
				: field[key] = [...existingDocumentData[key], value];

			await updateDoc(doc(db, collectionName, documentId), field);
		} catch (error) {
			setError(error);
		}
	};

	// DELETE
	const deleteDocument = async (collectionName: string, documentId: string): Promise<void> => {
		try {
			await deleteDoc(doc(db, collectionName, documentId));
		} catch (error) {
			setError(error);
		}
	};

	// check if a user already exists in the 'users' collection in firestore
	const checkUserExists = async (email: string): Promise<any> => {
		try {
			const allUsers: any = await readAllDocuments('users');
			const userAlreadyExists: any = allUsers ? allUsers.find((curr: any) => curr.email === email) : false;

			return userAlreadyExists;
		} catch (error) {
			setError(error);
		}
	};

	// 'onAuthStateChanged()' observer to add a user obj to 'users' collection whenever a user is signed in, only if it's their first time registering via email/signing in via google
	// using a useEffect single run because only want call the 'onAuthStateChanged()' one time on component render, otherwise it will run multiple times;
	// https://stackoverflow.com/questions/60090298/firebase-auth-onauthstatechanged-function-is-called-multiple-times-even-afte
	useEffect(() => {
		onAuthStateChanged(
			auth,
			async (user: any) => {
				if (user) {
					const {
						uid,
						displayName,
						email,
						photoURL
					}: any = auth.currentUser;

					const doesUserAlreadyExist: any = await checkUserExists(email);

					if (!doesUserAlreadyExist) {
						// if registered via email, give the user a 'diplayName' and 'photoURL'; these properties come with google accounts
						if (!displayName && !photoURL) {
							const newDisplayName: string = email.split('@')[0];
							// doesn't cause state change of 'auth' object so doesn't rerender components that use 'auth';
							// therefore, have to set 'navbarDisplayName' manually and 'createDocument' with 'auth.currentUser.displayName', '...photoURL'
							await updateProfile(auth.currentUser, {
								displayName: newDisplayName,
								photoURL: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
							});

							setNavbarDisplayName(newDisplayName);
						} else {
							setNavbarDisplayName(displayName);
						}

						// add new user's document data containing default values where needed (desc,title...)
						const docRefId: any = await createDocument('users', {
							uid,
							displayName: auth.currentUser.displayName,
							email,
							photoURL: auth.currentUser.photoURL,
							description: '',
							commentsIds: [],
							savedIds: [],
							remindMeIds: []
						});

						// adding document id to newly created document; if key doesn't exist, 'updateDoc' creates one
						await updateDocument('users', docRefId, 'id', docRefId, true);
					}
				}

				setLoading(false);
			}
		);
	}, []);

	useEffect(() => {
		if (error) {
			clearInputs(error.inputSetStates);
			setLoading(false);
		}
	}, [error]);

	return (
		<Context.Provider
			value={{
				auth,
				db,
				isModalShown,
				setIsModalShown,
				navbarDisplayName,
				setNavbarDisplayName,
				error,
				setError,
				loading,
				setLoading,
				location,
				isUserLoggedIn,
				clearInputs,
				scrollToTop,
				scrollToBottom,
				loginWithGoogle,
				logOut,
				createDocument,
				readAllDocuments,
				readDocument,
				readDocumentWoId,
				readAllDocumentsOnSnapshot,
				updateDocument,
				deleteDocument,
				handleOnChange,
				checkValidEmail,
				checkValidPassword,
				navigate
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;

// TODO:
// - test Login and Register works (register doesn't navigate to home after registering, Login is slow - because not in euw region???)
// - show loading on render and refresh instead of empty login/register page
// - Navbar (if logged in, render home and profile button in navbar, otherwise don't render them)

// - turn off dependancy cycle checking eslint and removed eslint comments
// - Mobile modal for Navbar
// - Home page react spring

// ... Responsiveness for every page
