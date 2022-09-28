// eslint-disable-next-line import/no-cycle
import { Row } from '..';
import loadingGif from '../../res/images/loading-dark.gif';

const Loading = (): JSX.Element => (
	<Row
		extraClasses="m-auto space-x-2 py-2 px-4 dialog"
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
