import { MouseEventHandler } from 'react';
import { Auth } from 'firebase/auth';
import { INavbarRoutesDataProps } from '../../utils/interfaces';

export interface INavbarProps {
    navbarData: INavbarRoutesDataProps[];
    auth: Auth;
	toggleIsModalShown: MouseEventHandler<HTMLButtonElement>;
}
