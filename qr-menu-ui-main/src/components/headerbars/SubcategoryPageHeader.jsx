import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import img from '../../assets/subcategory/fried-chicken.png';
import hart from '../../assets/exploreMenu/heart.svg';
import Slider from '../slider/Slider';
import { Col } from 'react-bootstrap';
import { height } from '@mui/system';

export const SubcategoryPageHeader = ({
	onClickTile,
	onClickBack,
	customizable = true,
	veg = false,
}) => {
	const headerBotemData = [
		{ title: 'Size' },
		{ title: 'Extra Crunch' },
		{ title: 'Extra Cheese' },
		{ title: 'Extra Side' },
	];
	const [activeTile, setActiveTile] = React.useState(0);
	return (
		<div className='subcategory-page-header'>
			<div
				className='w-100 image pt-3'
				style={{
					backgroundImage: `url(${img})`,
				}}>
				<div className='p-1 back-button ms-2'>
					<AiIcons.AiOutlineArrowLeft color={'black'} size={20} onClick={onClickBack} />
				</div>
				<div className='p-1 hart-icon ms-auto me-2'>
					<img width={18} src={hart} alt='' />
				</div>
			</div>

			<div className='p-3'>
				<div className='mt-2 title'>Subcategory</div>
				<div className='mt-2 subtitle'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</div>
				<div className='mt-2 d-flex justify-content-start align-items-center'>
					<BiIcons.BiTime size={12} color='black' />
					<div className='ms-2' style={{ fontSize: '11px', color: '#242323' }}>
						Est 10 - 15 mins
					</div>

					<AiIcons.AiTwotoneHeart className='ms-4' size={12} color='red' />
					<div className='ms-2' style={{ fontSize: '11px', color: '#242323' }}>
						25
					</div>
				</div>
				<div>
					<div className={`mt-2 sub-title d-flex justify-content-start`}>
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
				<div className='mt-2'>
					<div style={{ fontSize: '14px', color: '#242323', fontWeight: 'bold' }}>
						Add Extras
					</div>
					<Slider>
						{headerBotemData.map((data, index) => {
							return (
								<Col
									onClick={() => {
										setActiveTile(index);
										onClickTile(data.title);
									}}
									key={index}
									style={{
										height: '34px',
										fontSize: '12px',
										fontWeight: 'bold',
										color: '#9F9F9F',
									}}
									className={`col-4 d-flex justify-content-center align-items-center ${
										activeTile === index && 'active'
									}`}>
									{data.title}
								</Col>
							);
						})}
					</Slider>
				</div>
			</div>
		</div>
	);
};
