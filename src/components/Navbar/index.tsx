/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import { Row, CommonLink, CommonButton } from '..';
import { INavbarRoutesDataProps } from '../../utils/interfaces';
import { INavbarProps } from './INavbarProps';
import { commonLinkType, commonButtonType } from '../../utils/enums';
import ticketMasterLogo from '../../res/images/ticketmaster-logo.png';
import { ReactComponent as MenuIcon } from '../../res/icons/menu.svg';

const Navbar = ({
	navbarData, auth, isModalShown, toggleIsModalShown
}: INavbarProps): JSX.Element => (
	<Row
		justifyContent="justify-between"
		extraClasses="bg-black/75 pl-4 pr-6 min-h-16 h-16 border-b border-solid border-b-2 border-blue-400"
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
			extraClasses="hidden space-x-4 lg:flex xl:space-x-10"
		>
			{
				navbarData.map((curr: INavbarRoutesDataProps) => (
					<CommonLink
						key={curr.path}
						type={commonLinkType.NAVLINK}
						href={
							curr.path.includes('/Profile')
								? `${curr.path}/${auth.currentUser?.displayName}`
								: curr.path
						}
						extraClasses="lg:text-sm xl:text-base"
					>
						{curr.icon}
						{curr.text}
					</CommonLink>
				))
			}
		</Row>
		<CommonButton
			type="button"
			buttonType={commonButtonType.CLEAR}
			onClick={toggleIsModalShown}
			extraClasses="block lg:hidden fill-blue-400"
		>
			{!isModalShown && <MenuIcon />}
		</CommonButton>
	</Row>
);

export default Navbar;
