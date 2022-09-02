import React from 'react';
import { Card } from 'react-bootstrap';
import QuantityAddRemove from '../common/QuantityAddRemove';

const ExploreMenuCardOne = ({
	img,
	icon,
	title,
	subtitle,
	customizable,
	veg,
	priceChange,
	off,
	price,
	index,
	onClickAdd,
	selected,
}) => {
	return (
		<>
			<Card className='border-0 custom-card'>
				<div>
					<div className='appetizers-card-img-continer'>
						<img className='main-img' src={img} alt='' />
						<img width={14} className='hart-img' src={icon} alt='' />
					</div>
				</div>
				<div className='p-2'>
					<div>
						<div className={`title d-flex justify-content-start`}>
							<span className='card-title' style={{ fontSize: '12px' }}>
								{title}
							</span>
						</div>

						<div className={`sub-title d-flex justify-content-start`}>
							<span className='card-subtitle' style={{ fontSize: '12px' }}>
								{subtitle}
							</span>
						</div>

						<div className={`sub-title d-flex justify-content-start`}>
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
							{}
							<span
								className='fw-bold'
								style={{
									fontSize: '12px',
									color: veg ? '#07AD87' : '#AD5E6B',
								}}>
								{veg ? 'Veg' : 'Non Veg'}
							</span>
						</div>
					</div>

					<div className={`footer-text d-flex align-items-end`}>
						<div className='d-flex'>
							<div
								style={{
									fontSize: '11px',
									textDecoration: priceChange ? 'line-through' : '',
								}}>
								{price} &nbsp;&nbsp;
							</div>

							<div
								style={{
									fontSize: '11px',
								}}>
								{priceChange} {off && '|'}
							</div>
							{off && (
								<>
									<div
										className='ms-1'
										style={{
											fontSize: '11px',
											color: '#FF2E2E',
										}}>
										{off}
									</div>
								</>
							)}
						</div>
						<div className='ms-auto d-flex align-items-end'>
							{selected ? (
								<button className='card-footer-button'>
									<QuantityAddRemove value={0} />
								</button>
							) : (
								<button
									onClick={onClickAdd}
									key={index}
									className='card-footer-button-fill'
									style={{ fontSize: '10px' }}>
									ADD TO CART
								</button>
							)}
						</div>
					</div>
				</div>
			</Card>
		</>
	);
};

export default ExploreMenuCardOne;
