/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import { Row, CommonLink } from '..';
import { INavbarRoutesDataProps } from '../../utils/interfaces';
import { INavbarProps } from './INavbarProps';
import { commonLinkType } from '../../utils/enums';
import ticketMasterLogo from '../../res/images/ticketmaster-logo.png';

const Navbar = ({ navbarData, auth }: INavbarProps): JSX.Element => (
	<Row
		justifyContent="justify-between"
		extraClasses="bg-black/75 px-4 min-h-16 h-16"
	>
		<CommonLink
			type={commonLinkType.LINKCLEAR}
			href="/"
		>
			<img
				src={ticketMasterLogo}
				alt="ticket master logo"
				className="w-60 object-cover"
			/>
		</CommonLink>
		<Row
			extraClasses="space-x-10"
		>
			{
				navbarData.map((curr: INavbarRoutesDataProps) => (
					<CommonLink
						type={commonLinkType.NAVLINK}
						href={curr.path}
					>
						{curr.icon}
						<h3>{curr.text}</h3>
					</CommonLink>
				))
			}
		</Row>
	</Row>
);

export default Navbar;
