import React from 'react';
import { MyOrdersPageHeader } from '../../components/headerbars/MyOrdersPageHeader';
import OrderHistory from './OrderHistory';
import OrderOngoing from './OrderOngoing';

const MyOrders = () => {
	const [activeSection, setActiveSection] = React.useState('Ongoing');

	return (
		<>
			<MyOrdersPageHeader
				onClickTab={(name) => {
					setActiveSection(name);
				}}
			/>
			{activeSection === 'Ongoing' ? <OrderOngoing /> : <OrderHistory />}
		</>
	);
};

export default MyOrders;
