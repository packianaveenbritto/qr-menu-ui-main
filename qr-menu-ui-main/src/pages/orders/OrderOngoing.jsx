import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../assets/myBasket/mybasket-card-image.png';
import { Link } from 'react-router-dom';
import MyOrderCard from '../../components/cards/myOrders/MyOrderCard';
import EmptyBasketPage from '../basket/EmptyBasketPage';

const OrderOngoing = () => {
	const orderData = [
		{
			image: img,
			title: 'My Menu',
			subcategoryName: 'Subcategory name',
			status: 'Ready',
			qty: 2,
			dateTime: '10 July 2022 at 12.00 pm',
		},
		{
			image: img,
			title: 'My Menu',
			subcategoryName: 'Subcategory name',
			status: 'Pending',
			qty: 1,
			dateTime: '10 July 2022 at 12.00 pm',
		},
		{
			image: img,
			title: 'My Menu',
			subcategoryName: 'Subcategory name',
			status: 'Pending',
			qty: 1,
			dateTime: '10 July 2022 at 12.00 pm',
		},
	];

	return (
		<Container fluid>
			{orderData.length > 0 ? (
				<>
					<Row>
						{orderData.map((data) => {
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
				</>
			) : (
				<EmptyBasketPage />
			)}
		</Container>
	);
};

export default OrderOngoing;
