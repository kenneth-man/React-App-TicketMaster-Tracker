import React, { createContext, useState } from 'react';
import { IContextProps } from './IContextProps';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Context: React.Context<any> = createContext(null);

const ContextProvider = ({ children }: IContextProps) => {
	const [loading, setLoading]: [boolean, Function] = useState<boolean>(false);

	return (
		<Context.Provider
			value={{
				loading,
				setLoading
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
