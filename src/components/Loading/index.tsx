// eslint-disable-next-line import/no-cycle
import { Row } from '..';
import loadingGif from '../../res/images/loading-dark.gif';

const Loading = (): JSX.Element => (
	<Row
		extraClasses="space-x-2"
	>
		<h1 className="text-white">
			Loading...
		</h1>
		<img
			src={loadingGif}
			alt="loading gif"
		/>
	</Row>
);

export default Loading;
