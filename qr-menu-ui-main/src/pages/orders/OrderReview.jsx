import React from 'react';
import { useState } from 'react';
import { Button, Card, Container, Form, InputGroup, Offcanvas } from 'react-bootstrap';
import { BiTimeFive } from 'react-icons/bi';
import { ImLocation } from 'react-icons/im';
import { Checkbox, FormControlLabel } from '@mui/material';
import BankCardsNormal from '../../components/cards/BankCardsNormal';
import CommonWrapper from '../../wrappers/CommonWrapper';
import BitCoin from '../../assets/orderReview/bitcoin.svg';
import banknote from '../../assets/orderReview/banknote.svg';
import creditCard from '../../assets/orderReview/credit-card.svg';
import money from '../../assets/orderReview/money.svg';
import { useNavigate } from 'react-router-dom';

const OrderReview = () => {
	const [pickupTimePop, setPickupTimePop] = useState();
	const [cardPopup, setCardPopup] = useState();
	const [cryptoPopup, setCryptoPopup] = useState();
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
	const navigate = useNavigate();
	return (
		<CommonWrapper header='Order Review'>
			<Container fluid className='pb-3'>
				<div style={{ height: '95%', overflowY: 'auto' }}>
					<Card className='mt-3'>
						<Card.Body className='p-2'>
							<h6 style={{ fontSize: '12px', fontWeight: 'bold' }}>Pickup From</h6>
							<div className='header-content'>
								<div className='ms-3 p-1 d-flex flex-column w-100'>
									<div className='row'>
										<div className='col-2'>
											<ImLocation />
										</div>
										<div className='col-10'>My Menu Cafe</div>
									</div>
									<div className='row'>
										<div className='col-2'></div>
										<div className='col-10 address-card nav-font me-0'>
											Lorem ipsum dolor sit amet,
										</div>
									</div>
									<div className='row'>
										<div className='col-2'></div>
										<div className='col-10 address-card nav-font me-0'>
											Dubai
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className='mt-3'>
						<Card.Body className='p-2'>
							<h6 style={{ fontSize: '12px', fontWeight: 'bold' }}>Pickup Time</h6>
							<div className='d-flex flex-row align-items-center'>
								<BiTimeFive />
								<div style={{ fontSize: '12px' }}>&nbsp; ASAP</div>
								<div
									onClick={() => {
										setPickupTimePop(true);
									}}
									style={{ fontSize: '12px', fontWeight: '600' }}
									className='ms-auto text-primary-color'>
									CHANGE
								</div>
							</div>
						</Card.Body>
					</Card>
					<InputGroup className='mt-3'>
						<Form.Control
							placeholder='Apply Cupon'
							aria-label='Apply Cupon'
							aria-describedby='Apply Cupon'
						/>
						<Button className='btn-primary-color' id='Apply Cupon'>
							Button
						</Button>
					</InputGroup>
					<Card className='mt-3'>
						<Card.Body className='p-2'>
							<h6 style={{ fontSize: '12px', fontWeight: 'bold' }}>Payment Method</h6>
							<span style={{ fontSize: '12px' }}>Your exit plan option</span>
							<div className='row'>
								<div
									className='col-6'
									onClick={() => {
										setSelectedPaymentMethod('scard');
									}}>
									<BankCardsNormal
										className={`${
											selectedPaymentMethod === 'scard' ? 'selected' : ''
										}`}
									/>
								</div>
							</div>
							<span style={{ fontSize: '12px' }}>Or</span>
							<div className='row'>
								<div className='col-6'>
									<Card
										className={`${
											selectedPaymentMethod === 'cash' ? 'selected' : ''
										}`}
										onClick={() => {
											setSelectedPaymentMethod('cash');
										}}>
										<Card.Body className='p-2'>
											<div className='row align-items-center'>
												<div className='col-9'>
													<div style={{ fontSize: '10px' }}>Cash</div>
												</div>
												<div className='col-3 text-end ps-0'>
													<img
														src={money}
														alt=''
														className={`${
															selectedPaymentMethod === 'cash'
																? 'payment-method-cliked'
																: ''
														} `}
													/>
												</div>
											</div>
										</Card.Body>
									</Card>
								</div>
								<div className='col-6'>
									<Card
										color={`${
											selectedPaymentMethod === 'card' ? '#AE9C67' : ''
										}`}
										onClick={() => {
											setCardPopup(true);
											setSelectedPaymentMethod('card');
										}}>
										<Card.Body className='p-2'>
											<div className='row align-items-center'>
												<div className='col-9'>
													<div style={{ fontSize: '10px' }}>
														Credit / Debit card
													</div>
												</div>
												<div className='col-3 text-end ps-0'>
													<img
														src={creditCard}
														alt=''
														className={`${
															selectedPaymentMethod === 'card'
																? 'payment-method-cliked'
																: ''
														} `}
													/>
												</div>
											</div>
										</Card.Body>
									</Card>
								</div>
							</div>
							<div className='row mt-2'>
								<div className='col-6'>
									<Card
										className={`${
											selectedPaymentMethod === 'crypto' ? 'selected' : ''
										}`}
										onClick={() => {
											setCryptoPopup(true);
											setSelectedPaymentMethod('crypto');
										}}>
										<Card.Body className='p-2'>
											<div className='row align-items-center'>
												<div className='col-9'>
													<div style={{ fontSize: '10px' }}>
														Cryptocurrency
													</div>
												</div>
												<div className='col-3 text-center ps-0'>
													<img
														src={BitCoin}
														alt=''
														className={`${
															selectedPaymentMethod === 'crypto'
																? 'payment-method-cliked'
																: ''
														} `}
													/>
												</div>
											</div>
										</Card.Body>
									</Card>
								</div>
								<div className='col-6'>
									<Card
										className={`${
											selectedPaymentMethod === 'room' ? 'selected' : ''
										}`}
										onClick={() => {
											setSelectedPaymentMethod('room');
										}}>
										<Card.Body className='p-2'>
											<div className='row align-items-center'>
												<div className='col-9'>
													<div style={{ fontSize: '10px' }}>
														Room Charge
													</div>
												</div>
												<div className='col-3 text-center ps-0'>
													<img
														src={banknote}
														alt=''
														className={`${
															selectedPaymentMethod === 'room'
																? 'payment-method-cliked'
																: ''
														} `}
													/>
												</div>
											</div>
										</Card.Body>
									</Card>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className='mt-3'>
						<Card.Body className='p-2'>
							<h6 style={{ fontSize: '12px', fontWeight: 'bold' }}>Tips</h6>
							<div className='row'>
								<div className='col-2'>
									<button className='btn-unselected btn'>5%</button>
								</div>
								<div className='col-2'>
									<button className='btn-unselected btn'>10%</button>
								</div>
								<div className='col-2'>
									<button className='btn-unselected btn'>15%</button>
								</div>
								<div className='col-2'>
									<button className='btn-unselected btn'>20%</button>
								</div>
								<div className='col-2'>
									<button className='btn-unselected btn'>25%</button>
								</div>
								<div className='col-2'>
									<button className='btn-unselected btn'>30%</button>
								</div>
							</div>
							<div className='row mt-2'>
								<div className='col-4'>
									<Form.Control />
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className='mt-3 mb-5'>
						<Card.Body className='p-2'>
							<div class='d-flex justify-content-between mb-2'>
								<span style={{ fontSize: '12px' }}>Net Total</span>
								<span style={{ fontSize: '12px' }}>AED 0.00</span>
							</div>
							<div class='d-flex justify-content-between mb-2'>
								<span style={{ fontSize: '12px' }}>Municipality Tax</span>
								<span style={{ fontSize: '12px' }}>AED 0.00</span>
							</div>
							<div class='d-flex justify-content-between mb-2'>
								<span style={{ fontSize: '12px' }}>VAT 0%</span>
								<span style={{ fontSize: '12px' }}>AED 0.00</span>
							</div>
							<div class='d-flex justify-content-between mb-2'>
								<span style={{ fontSize: '12px' }}>Subtotal</span>
								<span style={{ fontSize: '12px' }}>AED 0.00</span>
							</div>
							<div class='d-flex justify-content-between mb-2'>
								<span style={{ fontSize: '12px' }}>Tips</span>
								<span style={{ fontSize: '12px' }}>AED 0.00</span>
							</div>
							<br />
							<div class='d-flex justify-content-between'>
								<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Total</span>
								<span style={{ fontSize: '12px', fontWeight: 'bold' }}>
									AED 0.00
								</span>
							</div>
						</Card.Body>
					</Card>
				</div>
			</Container>
			<Container fluid>
				<div className='d-grid mt-2'>
					<Button className='add-to-cart-button-full' type='submit' size='lg'>
						Place Order
					</Button>
				</div>
			</Container>
			<Offcanvas
				className='bottom-popup'
				placement='bottom'
				show={pickupTimePop}
				onHide={() => setPickupTimePop(false)}>
				<Offcanvas.Header closeButton>
					<div className='d-flex flex-column'>
						<div style={{ fontSize: '16px', fontWeight: '600' }}>Pickup Time</div>
						<span style={{ fontSize: '12px' }}>Scedule Your Pickup Order</span>
					</div>
				</Offcanvas.Header>
				<Container fluid>
					<div className='row justify-content-between'>
						<div className='col-4'>
							<button className='btn-selected btn mb-2'>Today</button>
							<button className='btn-unselected btn'>Tomorow</button>
						</div>
						<div className='col-6 pickup-time'>
							<button className='btn-selected btn mb-2'>ASAP</button>
							<button className='btn-unselected btn mb-2'>0.00AM - 0.00AM</button>
							<button className='btn-unselected btn mb-2'>0.00AM - 0.00AM</button>
							<button className='btn-unselected btn mb-2'>0.00AM - 0.00AM</button>
							<button className='btn-unselected btn mb-2'>0.00AM - 0.00AM</button>
							<button className='btn-unselected btn mb-2'>0.00AM - 0.00AM</button>
							<button className='btn-unselected btn mb-2'>0.00AM - 0.00AM</button>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<button className='btn-selected btn' style={{ height: '40px' }}>
								SAVE
							</button>
						</div>
					</div>
				</Container>
			</Offcanvas>
			<Container fluid>
				<div className='d-grid mt-2'>
					<Button
						onClick={() => navigate('/order-placed')}
						className='add-to-cart-button-full'
						type='submit'
						size='lg'>
						Place Order
					</Button>
				</div>
			</Container>
			<Offcanvas
				className='bottom-popup-mid-screen'
				placement='bottom'
				show={cardPopup}
				onHide={() => setCardPopup(false)}>
				<Offcanvas.Header closeButton>
					<div className='d-flex flex-column'>
						<div style={{ fontSize: '16px', fontWeight: '600' }}>
							Enter Your Card Details
						</div>
					</div>
				</Offcanvas.Header>
				<Container fluid>
					<Form>
						<Form.Group className='mb-2' controlId='cardName'>
							<Form.Label className='nav-font-small'>Name on card</Form.Label>
							<Form.Control type='text' />
						</Form.Group>
						<Form.Group className='mb-2' controlId='cardNumber'>
							<Form.Label className='nav-font-small'>Card Number</Form.Label>
							<Form.Control type='text' />
						</Form.Group>
						<div className='row'>
							<div className='col-6'>
								<Form.Label className='nav-font-small'>Expiration Date</Form.Label>
							</div>
							<div className='col-6'>
								<Form.Label className='nav-font-small'>Card Code (CCV)</Form.Label>
							</div>
						</div>
						<div className='row'>
							<div className='col-3 pe-0'>
								<Form.Group className='mb-3' controlId='expirationM'>
									<Form.Control
										className='text-center'
										type='text'
										placeholder='MM'
									/>
								</Form.Group>
							</div>
							<div className='col-3 pe-0'>
								<Form.Group className='mb-3' controlId='expirationD'>
									<Form.Control
										className='text-center'
										type='text'
										placeholder='DD'
									/>
								</Form.Group>
							</div>
							<div className='col-6'>
								<Form.Group className='mb-3' controlId='ccv'>
									<Form.Control type='text' />
								</Form.Group>
							</div>
						</div>
						<FormControlLabel
							value='save'
							control={
								<Checkbox
									sx={{
										'& .MuiSvgIcon-root': {
											fontSize: 16,
											borderRadius: 20,
											color: '#AE9C67',
										},
									}}
								/>
							}
							label={
								<span
									style={{
										color: '#242323',
										fontSize: '12px',
									}}>
									Save credit card information for the next time.
								</span>
							}
							labelPlacement='end'
						/>
					</Form>
					<div className='row'>
						<div className='col-12'>
							<button className='btn-selected btn' style={{ height: '40px' }}>
								SAVE
							</button>
						</div>
					</div>
				</Container>
			</Offcanvas>
			<Offcanvas
				className='bottom-popup-low-mid-screen'
				placement='bottom'
				show={cryptoPopup}
				onHide={() => setCryptoPopup(false)}>
				<Offcanvas.Header closeButton>
					<div className='d-flex flex-column'>
						<div style={{ fontSize: '16px', fontWeight: '600' }}>
							Enter Your Cryptocurrency Details
						</div>
					</div>
				</Offcanvas.Header>
				<Container fluid>
					<Form>
						<Form.Group className='mb-2' controlId='cardName'>
							<Form.Label className='nav-font-small'>
								Select Cryptocurrency
							</Form.Label>
							<Form.Control type='text' />
						</Form.Group>
						<Form.Group className='mb-2' controlId='cardNumber'>
							<Form.Label className='nav-font-small'>Wallet Address</Form.Label>
							<Form.Control type='text' />
						</Form.Group>
						<FormControlLabel
							value='save'
							control={
								<Checkbox
									sx={{
										'& .MuiSvgIcon-root': {
											fontSize: 16,
											borderRadius: 20,
											color: '#AE9C67',
										},
									}}
								/>
							}
							label={
								<span
									style={{
										color: '#242323',
										fontSize: '12px',
									}}>
									Save wallet address.
								</span>
							}
							labelPlacement='end'
						/>
					</Form>
					<div className='row'>
						<div className='col-12'>
							<button className='btn-selected btn' style={{ height: '40px' }}>
								SAVE
							</button>
						</div>
					</div>
				</Container>
			</Offcanvas>
		</CommonWrapper>
	);
};

export default OrderReview;
