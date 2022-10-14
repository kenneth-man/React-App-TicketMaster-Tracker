import { PageContainer } from '../../componentContainers';
import homeBackgroundPlaceholder from '../../res/images/ticketmaster-background.jpeg';

const Home = (): JSX.Element => (
	<PageContainer
		backgroundImage={homeBackgroundPlaceholder}
	>
		<h1 className="text-white font-thin">Home Placeholder</h1>
	</PageContainer>
);

export default Home;
