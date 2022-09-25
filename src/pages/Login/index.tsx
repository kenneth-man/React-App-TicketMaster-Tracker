/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { ILoginProps } from './ILoginProps';
import { Page, CommonInput, Column } from '../../components';
import ticketMasterBackground from '../../res/images/ticketmaster-background.jpeg';
import ticketMasterLogo from '../../res/images/ticketmaster-logo.png';

const Login = ({
	loginEmail,
	loginPassword,
	setLoginEmail,
	setLoginPassword,
	handleOnChange,
	isLoading
}: ILoginProps): JSX.Element => (
	<Page
		justifyContent="justify-start"
		backgroundImage={ticketMasterBackground}
		extraClasses="space-y-8"
	>
		<img
			src={ticketMasterLogo}
			alt="ticket master logo"
			className="w-96"
		/>
		<Column
			fullWidth
			extraClasses="space-y-8 px-40"
		>
			<h1>TicketMaster Tracker</h1>
			<p>
				Ticketmaster is the world&apos;s largest ticket distribution company in the United States,
				completely dominating its market niche. The company distributes tickets for more than 10,000
				clients whose events range from professional wrestling matches and rock concerts to Broadway
				shows and operas.
			</p>
		</Column>
		<form
			className="flex flex-col space-y-8"
		>
			<Column
				extraClasses="space-y-2"
			>
				<label
					htmlFor="loginEmail"
				>
					Login Email
				</label>
				<CommonInput
					state={loginEmail}
					setState={setLoginEmail}
					onChange={handleOnChange}
					type="text"
					placeHolder="Input your email address..."
					disabled={isLoading}
					name="loginEmail"
				/>
			</Column>
			<Column
				extraClasses="space-y-2"
			>
				<label
					htmlFor="loginPassword"
				>
						Login Password
				</label>
				<CommonInput
					state={loginPassword}
					setState={setLoginPassword}
					onChange={handleOnChange}
					type="password"
					placeHolder="Input your password..."
					disabled={isLoading}
					name="loginPassword"
				/>
			</Column>
		</form>
	</Page>
);

export default Login;
