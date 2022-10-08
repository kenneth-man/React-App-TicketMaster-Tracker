/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */

// firebase sdk
// 1) create project on firebase.com, add the sign in methods you require
// 2) enable firestore api and create firstore database on google cloud platform
// 3) update database rules (permissions) https://stackoverflow.com/questions/46590155/firestore-permission-denied-missing-or-insufficient-permissions
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

import { useState } from 'react';
import {
	BrowserRouter, Routes, Route
} from 'react-router-dom';
import ContextProvider from './context';
import { ModalContainer, NavbarContainer } from './componentContainers';
import { routesData } from './constants/routesData';
import { IRoutesDataProps } from './utils/interfaces';

const {
	REACT_APP_FIREBASE_API_KEY,
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	REACT_APP_FIREBASE_APP_ID
}: NodeJS.ProcessEnv = process.env;

const firebaseApp: FirebaseApp = initializeApp({
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: 'ticketmaster-tracker.firebaseapp.com',
	projectId: 'ticketmaster-tracker',
	storageBucket: 'ticketmaster-tracker.appspot.com',
	messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: REACT_APP_FIREBASE_APP_ID
});

const auth: Auth = getAuth(firebaseApp);
const db: Firestore = getFirestore(firebaseApp);

const App = () => {
	const [isUserLoggedIn, setIsUserLoggedIn]: [boolean, Function] = useState<boolean>(false);
	const [isModalShown, setIsModalShown]: [boolean, Function] = useState<boolean>(false);

	// onAuthStateChanged parses a 'user' object in the callback function if signed in, otherwise 'user' is null;
	// 'auth.currentUser' is the same as 'user'
	onAuthStateChanged(auth, (user: any) => (setIsUserLoggedIn(!!user)));

	return (
		<div className="flex flex-col h-full overflow-y-scroll overflow-x-hidden">
			<BrowserRouter>
				<ContextProvider
					auth={auth}
					db={db}
					isModalShown={isModalShown}
					setIsModalShown={setIsModalShown}
					isUserLoggedIn={isUserLoggedIn}
				>
					<NavbarContainer />

					{/* rendering here instead of writing '{isModalShown && <Modal />}';
					so i can transition the modal being displayed/hidden */}
					<ModalContainer />

					<Routes>
						{
							routesData.map((curr: IRoutesDataProps) => {
								const {
									path, Container, Component, ContainerAlt
								}: IRoutesDataProps = curr;

								return (
									<Route
										key={path}
										path={path}
										element={
											path === '/' || path === '/Register'
												? (
													isUserLoggedIn
														? (
															<Container
																Component={Component}
															/>
														) : (
															ContainerAlt && <ContainerAlt />
														)
												) : (
													Component
														? (
															<Container
																Component={Component}
															/>
														) : (
															<Container />
														)
												)
										}
									/>
								);
							})
						}
					</Routes>
				</ContextProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
