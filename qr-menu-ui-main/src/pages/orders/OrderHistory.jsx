import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../assets/myBasket/mybasket-card-image.png';
import { Link } from 'react-router-dom';
import MyOrderCard from '../../components/cards/myOrders/MyOrderCard';

const OrderHistory = () => {
	const historyData = [
		{
			image: img,
			title: 'My Menu',
			subcategoryName: 'Subcategory name',
			status: 'Picked',
			qty: 2,
			dateTime: '10 July 2022 at 12.00 pm',
		},
		{
			image: img,
			title: 'My Menu',
			subcategoryName: 'Subcategory name',
			status: 'Picked',
			qty: 2,
			dateTime: '10 July 2022 at 12.00 pm',
		},
		{
			image: img,
			title: 'My Menu',
			subcategoryName: 'Subcategory name',
			status: 'Picked',
			qty: 2,
			dateTime: '10 July 2022 at 12.00 pm',
		},
		{
			image: img,
			title: 'My Menu',
			subcategoryName: 'Subcategory name',
			status: 'Picked',
			qty: 2,
			dateTime: '10 July 2022 at 12.00 pm',
		},
	];

	return (
		<Container fluid>
			<Row>
				<Col className='mt-1 me-2 d-flex d-flex justify-content-end col-12'>
					<div>
						<Link className='label-button' to=''>
							<span>Clear All</span>
						</Link>
					</div>
				</Col>
			</Row>
			<Row>
				{historyData.map((data) => {
					return (
						<Col className='mt-2 col-12'>
							<MyOrderCard
								img={data.image}
								title={data.title}
								subcategoryName={data.subcategoryName}
								status={data.status}
								qty={data.qty}
								dateTime={data.dateTime}
							/>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default OrderHistory;
