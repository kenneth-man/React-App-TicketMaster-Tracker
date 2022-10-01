/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import { Row, CommonLink } from '..';
import { INavbarRoutesDataProps } from '../../utils/interfaces';
import { INavbarProps } from './INavbarProps';

const Navbar = ({ navbarData, auth }: INavbarProps): JSX.Element => (
	<Row>
		{
			navbarData.map((curr: INavbarRoutesDataProps) => (
				<div />
			))
		}
	</Row>
);

export default Navbar;
