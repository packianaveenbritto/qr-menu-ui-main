import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import bagImg from '../../assets/myBasket/shopping-bag-large.png';

const EmptyBasketPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<Row>
				<Col className='d-flex flex-column justify-content-center align-items-center'>
					<img style={{ marginTop: '30%' }} src={bagImg} alt='' />
					<span
						className='mt-5'
						style={{ fontSize: '14px', fontWeight: '600', color: '#242323' }}>
						Your Bag is Empty
					</span>
					<span
						className='mt-3'
						style={{ fontSize: '12px', fontWeight: 'normal', color: '#242323' }}>
						Please add some items from the menu
					</span>
				</Col>
			</Row>
			<Row>
				<Col className='d-flex justify-content-center'>
					<button
						onClick={() => {
							navigate('/');
						}}
						className='add-to-cart-button-full'>
						ADD FOOD ITEM
					</button>
				</Col>
			</Row>
		</>
	);
};

export default EmptyBasketPage;
