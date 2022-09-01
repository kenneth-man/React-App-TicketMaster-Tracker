/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

export interface IContextProps {
	children: ReactNode;
	auth: any;
	db: any;
	isModalShown: boolean;
	setIsModalShown: Function;
}
