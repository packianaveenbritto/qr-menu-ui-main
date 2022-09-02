import React from 'react';
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/myBasket/mybasket-card-image.png';
import MyBasketCard from '../../components/cards/myBasket/MyBasketCard';
import ReviewCartButton from '../../components/common/ReviewCartButton';
import { CommonHeader } from '../../components/headerbars/CommonHeader';
import EmptyBasketPage from './EmptyBasketPage';

const data = [
	{
		image: img,
		title: 'My Menu',
		subcategoryName: 'Subcategory name',
		extraAdded: true,
		customizable: true,
	},
	{
		image: img,
		title: 'My Menu',
		subcategoryName: 'Subcategory name',
		extraAdded: true,
		customizable: true,
	},
];

const MyBasket = () => {
	const [removeItemPopup, setRemoveItemPopup] = React.useState({ show: false, itemIndex: null });

	const [cartData, setCartData] = React.useState(data);

	const navigate = useNavigate();

	return (
		<>
			<CommonHeader headingName={'My Basket'} />
			<Container>
				{cartData.length > 0 ? (
					<>
						<Row>
							{cartData.map((data, index) => {
								return (
									<Col className='mt-2 col-12'>
										<MyBasketCard
											img={data.image}
											title={data.title}
											subcategoryName={data.subcategoryName}
											extraAdded={data.extraAdded}
											customizable={data.customizable}
											index={index}
											onClickRemove={(index) => {
												setRemoveItemPopup({
													show: true,
													itemIndex: index,
												});
											}}
										/>
									</Col>
								);
							})}
						</Row>
						<Row>
							<Col className='d-flex justify-content-center'>
								<ReviewCartButton onClick={() => navigate('/order-review')} count={cartData.length} amount={'AED 0.00'} />
							</Col>
						</Row>
					</>
				) : (
					<EmptyBasketPage />
				)}

				<Offcanvas className='bottom-popup' placement='bottom' show={removeItemPopup.show}>
					<div className='d-flex justify-content-center'>
						<img
							className='mt-4'
							style={{ height: '84px', width: '111px', borderRadius: '10px' }}
							src={
								removeItemPopup.itemIndex != null
									? cartData[removeItemPopup.itemIndex].image
									: ''
							}
							alt=''
						/>
					</div>
					<div className='mt-5 d-flex'>
						<div className='col-6 d-flex justify-content-center'>
							<button
								className='item-remove-no-button'
								onClick={() => {
									setRemoveItemPopup({ show: false });
								}}>
								NO
							</button>
						</div>
						<div className='col-6 d-flex justify-content-center'>
							<button
								className='item-remove-remove-button'
								onClick={() => {
									setCartData([]);
									setRemoveItemPopup({ show: false });
								}}>
								YES, REMOVE
							</button>
						</div>
					</div>
				</Offcanvas>
			</Container>
		</>
	);
};

export default MyBasket;
