// each component file named 'index.tsx'; default file exported from directory
// therefore no need to put extra '/' and declard file name
import Banner from './Banner';
import Center from './Center';
import Channel from './Channel';
import ClearButton from './ClearButton';
import Column from './Column';
import Comment from './Comment';
import CommonButton from './CommonButton';
import CommonInput from './CommonInput';
import CommonLink from './CommonLink';
import Error from './Error';
import LazyLoadImage from './LazyLoadImage';
import Loading from './Loading';
import Modal from './Modal';
import Navbar from './Navbar';
import Page from './Page';
import Pagination from './Pagination';
import Result from './Result';
import ResultList from './ResultList';
import Row from './Row';
import SearchBar from './SearchBar';

// barrel default imports to named exports; es6 object single-name syntax
// therefore can named export components from the '/components' directory instead of multiple import lines
export {
	Banner,
	Center,
	Channel,
	ClearButton,
	Column,
	Comment,
	CommonButton,
	CommonInput,
	CommonLink,
	Error,
	LazyLoadImage,
	Loading,
	Modal,
	Navbar,
	Page,
	Pagination,
	Result,
	ResultList,
	Row,
	SearchBar
};
