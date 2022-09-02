import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CommonWrapper from '../../wrappers/CommonWrapper';
import Check from '../../assets/common/check.png'
import { useNavigate } from 'react-router';
const OrderPlaced = () => {
	const navigate = useNavigate();
	return (
		<CommonWrapper header='Order Review' closeButton={true}>
			<Container fluid style={{ height: 'calc(100vh - 60px)' }}>
				<div className='d-flex justify-content-center align-items-center h-75 flex-column'>
					<img className='mb-4' src={Check} alt='check' />
					<h2>Thanks, Steve !</h2>
					<h2>Your order has been sent</h2>
				</div>
				<div className='d-flex justify-content-center' style={{ fontSize: '12px' }}>
					If you want see order details click view order.
				</div>
				<div className='d-grid mt-5'>
					<Button
						className='add-to-cart-button-full'
						type='submit'
						size='lg'
						onClick={() => navigate('/order-details')}>
						VIEW ORDER
					</Button>
				</div>
			</Container>
		</CommonWrapper>
	);
};

export default OrderPlaced;
