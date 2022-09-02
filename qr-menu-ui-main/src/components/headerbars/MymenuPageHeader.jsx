import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import dinner from '../../assets/mymenuPageIcons/dinner.svg';
import Slider from '../slider/Slider';

const headerBotemData = [
	{ title: 'My Menu', img: dinner },
	{ title: 'Grill Restaurant', img: dinner },
	{ title: 'Squareup Menu', img: dinner },
	{ title: 'Menu Name', img: dinner },
	{ title: 'Menu Name', img: dinner },
];

const imageTileWidth = 70;

export const MymenuPageHeader = (props) => {
	const [activeTile, setActiveTile] = React.useState(0);

	return (
		<div className='headerbar subcategory-page-header'>
			<div className='d-flex w-100 header-top '>
				<Link to='#' className='menu-bars'>
					<FaIcons.FaBars color='black' size={23} onClick={props.onClick} />
				</Link>
				<span className='header-title'>My Menu</span>
			</div>
			<div className='d-flex w-100 header-botem justify-content-center'>
				<Slider>
					{headerBotemData.map((data, index) => {
						return (
							<div
								style={{ width: `${imageTileWidth}px` }}
								className={`d-flex flex-column align-items-start image-tile`}>
								<div
									onClick={() => {
										setActiveTile(index);
									}}>
									<img
										className={activeTile === index && 'submenu-cliked'}
										width={imageTileWidth}
										src={data.img}
										alt=''
									/>
								</div>
								<span
									style={{
										fontSize: '10px',
										width: `${imageTileWidth}px`,
										color: activeTile === index ? '#232323' : '#9F9F9F',
									}}>
									{data.title}
								</span>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};
