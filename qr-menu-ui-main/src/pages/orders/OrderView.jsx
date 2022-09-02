import React from 'react';
import { CommonHeader } from '../../components/headerbars/CommonHeader';
import { Card, Col, Container, Row } from 'react-bootstrap';

const OrderView = () => {
	return (
		<>
			<CommonHeader headingName={'Order Details'} />
			<Container>
				<Row>
					<Col className='col-12'>
						<Card
							className='border-0 custom-card p-2 mt-2'
							style={{ borderRadius: '10px' }}>
							<div style={{ fontSize: '12px', color: '#9F9F9F', fontWeight: '600' }}>
								Order number
							</div>
							<div style={{ fontSize: '12px', color: '#242323' }}>#001</div>

							<div
								className='mt-2'
								style={{ fontSize: '12px', color: '#9F9F9F', fontWeight: '600' }}>
								Table number
							</div>
							<div style={{ fontSize: '12px', color: '#242323' }}>01</div>

							<div
								className='mt-2'
								style={{ fontSize: '12px', color: '#9F9F9F', fontWeight: '600' }}>
								Ordered on
							</div>
							<div style={{ fontSize: '12px', color: '#242323' }}>
								27 July 2022 00 : 00 : 00 AM
							</div>

							<div
								className='mt-2'
								style={{ fontSize: '12px', color: '#9F9F9F', fontWeight: '600' }}>
								Payment Method
							</div>
							<div style={{ fontSize: '12px', color: '#242323' }}>Cash</div>

							<div
								className='mt-2'
								style={{ fontSize: '12px', color: '#9F9F9F', fontWeight: '600' }}>
								Satatus
							</div>
							<div style={{ fontSize: '12px', color: '#242323' }}>Pending</div>
						</Card>
					</Col>

					<Col className='col-12'>
						<Card
							className='border-0 custom-card p-2 mt-3'
							style={{ borderRadius: '10px' }}>
							<div
								style={{ fontSize: '14px', color: '#242323', fontWeight: '600' }}
								className='d-flex justify-content-center'>
								Your Order
							</div>
							<div
								style={{ borderBottom: '1px solid #9F9F9F' }}
								className='d-flex pb-2'>
								<div className='col-6 mt-2 d-flex flex-column align-items-start'>
									<div
										style={{
											fontSize: '12px',
											color: '#242323',
										}}>
										x 1 Subcategory
									</div>
									<div
										className='mt-2'
										style={{
											fontSize: '12px',
											color: '#242323',
										}}>
										x 1 Subcategory
									</div>
								</div>

								<div className='col-6 mt-2 d-flex flex-column align-items-end'>
									<div
										style={{
											fontSize: '12px',
											color: '#242323',
										}}>
										AED 0.00
									</div>
									<div
										className='mt-2'
										style={{
											fontSize: '12px',
											color: '#242323',
										}}>
										AED 0.00
									</div>
								</div>
							</div>

							<div className='d-flex pb-2'>
								<div className='col-6 mt-2 d-flex flex-column align-items-start'>
									<div
										style={{
											fontSize: '12px',
											color: '#242323',
											fontWeight: '600',
										}}>
										TOTAL
									</div>
								</div>

								<div className='col-6 mt-2 d-flex flex-column align-items-end'>
									<div
										style={{
											fontSize: '12px',
											color: '#242323',
											fontWeight: '600',
										}}>
										AED 0.00
									</div>
								</div>
							</div>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default OrderView;
