/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */

// firebase sdk
// 1) create project on firebase.com, add the sign in methods you require
// 2) enable firestore api and create firstore database on google cloud platform
// 3) update database rules (permissions) https://stackoverflow.com/questions/46590155/firestore-permission-denied-missing-or-insufficient-permissions
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContextProvider from './context';
import { Modal, Navbar } from './components';
import { routesData } from './constants/routesData';
import { IRoutesDataProps } from './utils/interfaces';

const firebaseApp: any = initializeApp({
	apiKey: 'AIzaSyCyF0kEjeH7uT9SmB_l9KtOa04zQLmJFdE',
	authDomain: 'adzuna-job-tracker.firebaseapp.com',
	projectId: 'adzuna-job-tracker',
	storageBucket: 'adzuna-job-tracker.appspot.com',
	messagingSenderId: '1095496417984',
	appId: '1:1095496417984:web:f1ce921ad9498185672325'
});

const auth: any = getAuth(firebaseApp);
const db: any = getFirestore(firebaseApp);

const App = () => {
	const [isUserSignedIn, setIsUserSignedIn]: [boolean, Function] = useState<boolean>(false);
	const [isModalShown, setIsModalShown]: [boolean, Function] = useState<boolean>(false);

	 // onAuthStateChanged parses a 'user' object in the callback function if signed in, otherwise 'user' is null;
	 // 'auth.currentUser' is the same as 'user'
	 onAuthStateChanged(auth, (user: any) => (user ? setIsUserSignedIn(true) : setIsUserSignedIn(false)));

	return (
		<div className="App">
			<BrowserRouter>
				<ContextProvider
					auth={auth}
					db={db}
					isModalShown={isModalShown}
					setIsModalShown={setIsModalShown}
				>
					{isUserSignedIn && <Navbar />}

					{/* rendering here instead of writing '{isModalShown && <Modal />}';
					so i can transition the modal being displayed/hidden */}
					<Modal />

					<Routes>
						{
							routesData.map((curr: IRoutesDataProps) => {
								const { path, Component }: IRoutesDataProps = curr;

								return (
									<Route
										key={path}
										path={path}
										element={<Component />}
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
