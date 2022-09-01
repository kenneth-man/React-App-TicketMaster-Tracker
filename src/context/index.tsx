import React, { createContext, useState } from 'react';
import { IContextProps } from './IContextProps';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Context: React.Context<any> = createContext(null);

const ContextProvider = ({
	children,
	auth,
	db,
	isModalShown,
	setIsModalShown
}: IContextProps) => {
	const [loading, setLoading]: [boolean, Function] = useState<boolean>(false);

	return (
		<Context.Provider
			value={{
				loading,
				setLoading,
				auth,
				db,
				isModalShown,
				setIsModalShown
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
