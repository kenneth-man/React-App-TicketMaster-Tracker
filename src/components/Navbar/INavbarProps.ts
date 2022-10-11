import { MouseEventHandler } from 'react';
import { Auth } from 'firebase/auth';
import { INavbarRoutesDataProps } from '../../utils/interfaces';

export interface INavbarProps {
    navbarData: INavbarRoutesDataProps[];
    auth: Auth;
	isModalShown: boolean;
	toggleIsModalShown: MouseEventHandler<HTMLButtonElement>;
}
