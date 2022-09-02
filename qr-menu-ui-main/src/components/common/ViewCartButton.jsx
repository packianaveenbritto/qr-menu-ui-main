import React from 'react';
import ShoppingBag from '../../assets/myBasket/shopping-bag.png';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const ViewCartButton = ({ onClick, count, amount }) => {
	return (
		<>
			<button
				onClick={onClick}
				className='d-flex align-items-center review-orders-button-full'>
				<div className='col-6 d-flex justify-content-start'>
					<div>
						<img className='ms-1' src={ShoppingBag} alt='' />
					</div>
					<div className='ms-2'>
						<div className='d-flex justify-content-start'>{count} items in bag</div>
						<div className='d-flex justify-content-start mt-auto'>{amount}</div>
					</div>
				</div>
				<div className='col-6 d-flex justify-content-end align-items-center'>
					<div style={{ fontSize: '14px' }} className='me-2'>
						View Cart
					</div>
					<div className='me-1'>
						<AiOutlineDoubleRight size={16} />
					</div>
				</div>
			</button>
		</>
	);
};

export default ViewCartButton;
