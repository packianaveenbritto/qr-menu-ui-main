import React from 'react';
import { Card } from 'react-bootstrap';


import QuantityAddRemove from '../../common/QuantityAddRemove';

const SubcategoryExtraCrunchCard = ({ data }) => {
	return (
		<>
			<Card className='border-0 custom-card' style={{ borderRadius: '10px' }}>
				{data.map((data, index) => {
					return (
						<>
							<div className='d-flex m-2'>
								<div className='col-2 d-flex justify-content-center align-items-center '>
									<QuantityAddRemove value={0} />
								</div>
								<div
									style={{
										fontSize: '12px',
										color: '#242323',
									}}
									className=' col-5 d-flex justify-content-end align-items-center'>
									{data.description}
								</div>
								<div className='col-5 d-flex justify-content-end align-items-center'>
									<span
										style={{
											color: '#242323',
											fontSize: '12px',
										}}>
										{data.price}
									</span>
								</div>
							</div>
						</>
					);
				})}
			</Card>
		</>
	);
};

export default SubcategoryExtraCrunchCard;
