import React from 'react';
import { Card } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import QuantityAddRemove from '../../common/QuantityAddRemove';

const MyBasketCard = ({
	img,
	title,
	subcategoryName,
	extraAdded,
	customizable = true,
	onClickRemove,
	index,
}) => {
	return (
		<>
			<Card className='border-0 custom-card p-2' style={{ borderRadius: '10px' }}>
				<div className='d-flex'>
					<div className='col-3'>
						<img src={img} alt='' />
					</div>
					<div className='col-6'>
						<div>
							<div className={`title d-flex justify-content-start`}>
								<span
									className='card-title-normal '
									style={{ fontSize: '12px', fontWeight: 'bold' }}>
									{title}
								</span>
							</div>
							<div className={`mt-1 d-flex justify-content-start`}>
								<span
									className='card-title-normal '
									style={{ fontSize: '12px', fontWeight: 'normal' }}>
									{subcategoryName}
								</span>
							</div>
							{extraAdded && (
								<div className={`d-flex justify-content-start`}>
									<span
										className='card-subtitle-normal'
										style={{ fontSize: '12px' }}>
										Added extra
									</span>
								</div>
							)}

							<div className={`d-flex justify-content-start`}>
								{customizable && (
									<span
										className='fw-bold me-4'
										style={{
											fontSize: '12px',
											color: '#5565AD',
										}}>
										Customizable
									</span>
								)}
							</div>
						</div>
					</div>
					<div className='col-3 d-flex flex-column'>
						<div className='d-flex justify-content-end'>
							<FaIcons.FaTrash
								onClick={() => onClickRemove(index)}
								style={{ color: '#AE9C67' }}
							/>
						</div>
						<div className='mt-auto d-flex justify-content-end'>
							<QuantityAddRemove value={0} />
						</div>
					</div>
				</div>
			</Card>
		</>
	);
};

export default MyBasketCard;
