/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
	createContext, useState, useEffect, ChangeEvent
} from 'react';
import {
	signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile
} from 'firebase/auth';
import {
	collection, doc, query, addDoc, getDoc, getDocs, onSnapshot, updateDoc, deleteDoc,
	orderBy, limit, DocumentReference, DocumentData, QuerySnapshot, DocumentSnapshot, Query,
	Unsubscribe
} from 'firebase/firestore';
import {
	NavigateFunction, useNavigate, useLocation, Location
} from 'react-router-dom';
import { IContextProps } from './IContextProps';
import { IErrorProps } from '../utils/interfaces';
import { validEmailRegexData } from '../constants/validEmailRegexData';
import { placeholderProfileImageData } from '../constants/placeholderProfileImageData';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Context: React.Context<any> = createContext(null);

const ContextProvider = ({
	children,
	auth,
	db,
	isUserLoggedIn
}: IContextProps) => {
	const [navbarDisplayName, setNavbarDisplayName]: [string, Function] = useState<string>('');
	const [error, setError]: [IErrorProps | undefined, Function] = useState<IErrorProps | undefined>(undefined);
	const [loading, setLoading]: [boolean, Function] = useState<boolean>(true);
	const [isModalShown, setIsModalShown]: [boolean, Function] = useState<boolean>(false);
	const provider: GoogleAuthProvider = new GoogleAuthProvider();
	const navigate: NavigateFunction = useNavigate();
	const location: Location = useLocation();
	const users: string = 'users';

	// check if valid email
	const checkValidEmail = (inputEmail: string): boolean => !!inputEmail.match(validEmailRegexData);

	// check if valid password
	const checkValidPassword = (
		inputPassword: string,
		inputPasswordConfirm: string
	) => !!(inputPassword.length > 8 && inputPassword === inputPasswordConfirm);

	// setState the input element value
	const handleOnChange = (
		event: ChangeEvent<HTMLInputElement>,
		setState: Function
	): void => {
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

	// login with google account
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

	// logout of account then navigate to '/' path
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
		dataObject: {
			[property: string]: string | string[];
		}
	): Promise<string | undefined> => {
		try {
			const documentReference: DocumentReference = await addDoc(
				collection(db, collectionName),
				dataObject
			);

			return documentReference.id;
		} catch (error) {
			setError(error);
		}
	};

	// READ ONCE
	const readDocument = async (
		collectionName: string,
		documentId: string
	): Promise<DocumentData | undefined> => {
		try {
			const document: DocumentSnapshot<DocumentData> = await getDoc(
				doc(db, collectionName, documentId)
			);

			return document.data();
		} catch (error) {
			setError(error);
		}
	};

	// READ ALL DOCUMENTS ONCE
	const readAllDocuments = async (
		collectionName: string,
		orderedBy: string = '',
		limitedBy: number = 0
	): Promise<DocumentData[] | undefined> => {
		try {
			let allDocuments: QuerySnapshot<DocumentData>;
			const returnArray: DocumentData[] = [];

			orderedBy
				? (
					limitedBy
						? allDocuments = await getDocs(
							query(
								collection(db, collectionName),
								orderBy(orderedBy),
								limit(limitedBy)
							)
						)
						: allDocuments = await getDocs(
							query(
								collection(db, collectionName),
								orderBy(orderedBy)
							)
						)
				)
				: (
					limitedBy
						? allDocuments = await getDocs(
							query(
								collection(db, collectionName),
								limit(limitedBy)
							)
						)
						: allDocuments = await getDocs(
							query(
								collection(db, collectionName)
							)
						)
				);

			allDocuments.forEach((document: DocumentData) => returnArray.push({
				...document.data(),
				id: document.id
			}));

			return returnArray;
		} catch (error) {
			setError(error);
		}
	};

	// READ COLLECTION ONCE WITHOUT KNOWING DOC ID
	const readDocumentWoId = async (
		collectionName: string
	): Promise<DocumentData[] | undefined> => {
		try {
			const response: DocumentData[] | undefined = await readAllDocuments(collectionName);

			if (response) {
				// return the currently signed in user's object in an array
				if (collectionName === users) {
					return response.filter((curr: DocumentData) => curr.uid === auth.currentUser.uid);
				}

				return response;
			}
		} catch (error) {
			setError(error);
		}
	};

	// READ ALL ONSNAPSHOT
	const readAllDocumentsOnSnapshot = (
		collectionName: string,
		orderedBy: string
	): void => {
		try {
			// query method used for specifying which documents you want to retrieve from a collection
			const messagesQuery: Query<DocumentData> = query(
				collection(db, collectionName),
				orderBy(orderedBy),
				limit(1000)
			);

			// onSnapshot doesn't return promise and means you're attaching a permanent listener that
			// listens for realtime updates; 'getDocs' returns a promise and gets data once
			onSnapshot(messagesQuery, (snapshot: QuerySnapshot<DocumentData>) => {
				const returnArray: DocumentData[] = [];

				snapshot.forEach((document: DocumentData) => returnArray.push({
					...document.data(),
					id: document.id
				}));

				return returnArray;
			});
		} catch (error) {
			setError(error);
		}
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
			const existingDocumentData: DocumentData | undefined = await readDocument(collectionName, documentId);

			if (existingDocumentData) {
				await updateDoc(
					doc(db, collectionName, documentId),
					{
						[key]: overwriteField
							? value
							: [
								...existingDocumentData[key],
								value
							]
					}
				);
			}
		} catch (error) {
			setError(error);
		}
	};

	// DELETE
	const deleteDocument = async (
		collectionName: string,
		documentId: string
	): Promise<void> => {
		try {
			await deleteDoc(
				doc(db, collectionName, documentId)
			);
		} catch (error) {
			setError(error);
		}
	};

	// check if a user already exists in the 'users' collection in firestore
	const checkUserExists = async (uid: string): Promise<boolean | undefined> => {
		try {
			const allUsers: DocumentData[] | undefined = await readAllDocuments(users);

			let userAlreadyExists: boolean = false;

			if (allUsers) {
				userAlreadyExists = !!allUsers.find((curr: DocumentData) => curr.uid === uid);
			}

			return userAlreadyExists;
		} catch (error) {
			setError(error);
		}
	};

	// 'onAuthStateChanged()' observer to add a user object to the 'users' collection whenever a user is signed in,
	// only if it's their first time registering via email/signing in via google;
	useEffect(() => {
		const unsubscribe: Unsubscribe = onAuthStateChanged(
			auth,
			async (user: any) => {
				if (user) {
					const {
						uid,
						displayName,
						email,
						photoURL
					}: {
						[property: string]: string;
					} = auth.currentUser;

					const doesUserAlreadyExist: boolean | undefined = await checkUserExists(uid);

					if (!doesUserAlreadyExist) {
						// if registered via email, give the user a 'diplayName' and 'photoURL';
						// these properties come with google accounts
						if (!displayName && !photoURL) {
							const newDisplayName: string = email.split('@')[0];

							await updateProfile(
								auth.currentUser,
								{
									displayName: newDisplayName,
									photoURL: placeholderProfileImageData
								}
							);

							setNavbarDisplayName(newDisplayName);
						} else {
							setNavbarDisplayName(displayName);
						}

						// add new user's document data with default values
						const docRefId: string | undefined = await createDocument(
							users,
							{
								uid,
								displayName: auth.currentUser.displayName,
								email,
								photoURL: auth.currentUser.photoURL,
								description: '',
								commentsIds: [],
								savedIds: [],
								remindMeIds: []
							}
						);

						if (docRefId) {
							// adding document id to newly created document;
							// if key doesn't exist, 'updateDoc' creates one
							await updateDocument(users, docRefId, 'id', docRefId, true);
						}
					}
				}

				setLoading(false);
			}
		);

		return () => unsubscribe();
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
// - turn off dependancy cycle checking eslint and removed eslint comments
// - Mobile modal for Navbar
// - Home page react spring

// ... Responsiveness for every page
