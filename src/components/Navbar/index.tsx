/* eslint-disable import/no-cycle */
import { Row } from '..';
import { INavbarRoutesDataProps } from '../../utils/interfaces';
import { INavbarProps } from './INavbarProps';

const Navbar = ({ navbarData }: INavbarProps): JSX.Element => (
	<Row>
		{
			navbarData.map((curr: INavbarRoutesDataProps) => (
				<
			))
		}
	</Row>
);

export default Navbar;
