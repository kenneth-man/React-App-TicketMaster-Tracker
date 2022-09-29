import { PageContainer } from '../../componentContainers';
import { IProfileProps } from './IProfileProps';
import { CommonButton } from '../../components';

const Profile = ({ logOut }: IProfileProps): JSX.Element => (
	<PageContainer>
		<CommonButton
			type="button"
			onClick={(logOut)}
		>
			Log out
		</CommonButton>
	</PageContainer>
);

export default Profile;
