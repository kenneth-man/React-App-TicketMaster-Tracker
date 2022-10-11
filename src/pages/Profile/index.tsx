import { PageContainer } from '../../componentContainers';
import { IProfileProps } from './IProfileProps';
import { CommonButton } from '../../components';
import { commonButtonType } from '../../utils/enums';

const Profile = ({ logOut }: IProfileProps): JSX.Element => (
	<PageContainer>
		<CommonButton
			type="button"
			buttonType={commonButtonType.STANDARD}
			onClick={(logOut)}
		>
			Log out
		</CommonButton>
	</PageContainer>
);

export default Profile;
