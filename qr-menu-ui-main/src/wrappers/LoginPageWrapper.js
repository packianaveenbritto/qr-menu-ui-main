import React from 'react';
import { LoginPageHeader } from '../components/headerbars/LoginPageHeader';

const LoginPageWrapper = ({ children, header }) => {
	const [show, setShow] = React.useState(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<LoginPageHeader onClick={handleShow} headingName={header} />
			{children}
		</>
	);
};

export default LoginPageWrapper;
