import React from 'react';
import * as AiIcons from 'react-icons/ai';
import dinner from '../../assets/mymenuPageIcons/dinner.svg';
import Slider from '../slider/Slider';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
import { Col } from 'react-bootstrap';
import { exMenuData } from '../../pages/exporeMenu/data';
import { useLocation, useNavigate } from 'react-router-dom';


const headerBotemData = [
	{ title: 'My Menu', img: dinner },
	{ title: 'Grill Restaurant', img: dinner },
	{ title: 'Squareup Menu', img: dinner },
	{ title: 'Menu Name', img: dinner },
	{ title: 'Menu Name', img: dinner },
];

const imageTileWidth = 70;

export const ExploreMenuHeader = ({
	onClickBack,
	onClickTile,
	onClickMenu,
	activetilename = 'Appetizers',
}) => {
	const [activeTile, setActiveTile] = React.useState('Appetizers');
	const [searchBarEnable, setSearchBarEnable] = React.useState(false);
	const handleChange = (value) => {
		console.log(value);
	};

	React.useEffect(() => {
		setActiveTile(activetilename);
	}, [activetilename]);

	return (
		<div
			className='headerbar'
			onClick={(e) => {
				setSearchBarEnable(false);
			}}>
			<div className='d-flex w-100 header-top align-items-center'>
				<AiIcons.AiOutlineArrowLeft
					className='ms-4'
					color={'black'}
					size={23}
					onClick={onClickBack}
				/>
				{searchBarEnable ? (
					<TextField
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
						}}
						hiddenLabel
						placeholder='search'
						fullWidth
						id='outlined-1'
						sx={{
							'& legend': { display: 'none' },
							'& fieldset': { top: 9, borderRadius: '6px', height: '30px' },
							'& input': {
								textAlign: 'start',
								height: '30px',
								fontSize: '12px',
							},
						}}
						size='small'
						className='ms-2 me-3'
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<AiIcons.AiOutlineSearch color={'black'} size={18} />
								</InputAdornment>
							),
						}}
					/>
				) : (
					<>
						<div className='header-title-two ms-3'>Explore Menu</div>
						<AiIcons.AiOutlineSearch
							className='ms-auto me-3'
							color={'black'}
							size={24}
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								setSearchBarEnable(true);
							}}
						/>
					</>
				)}
			</div>

			<div className='d-flex w-100 justify-content-center'>
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

			<div className='d-flex mt-1'>
				<div
					onClick={onClickMenu}
					className='d-flex flex-column justify-content-center align-items-center col-2'
					style={{
						color: 'white',
						fontSize: '8pt',
						height: '34px',
						border: '1px solid #ae9c67',
						borderRadius: '0 0 0 10px',
					}}>
					<AiIcons.AiOutlineProfile color='#9F9F9F' />
					<div
						style={{
							color: '#9F9F9F',
							fontSize: '8pt',
						}}>
						Menu
					</div>
				</div>
				<div className='col-10 pe-1'>
					<Slider>
						{exMenuData.map((data, index) => {
							return (
								<Col
									onClick={() => {
										setActiveTile(data.name);
										onClickTile(data.name);
									}}
									key={index}
									id={data.name}
									style={{
										height: '34px',
										fontSize: '12px',
										fontWeight: 'bold',
										color: '#9F9F9F',
									}}
									className={`col-4 d-flex justify-content-center align-items-center ${
										activeTile === data.name && 'active'
									}`}>
									{data.name}
								</Col>
							);
						})}
					</Slider>
				</div>
			</div>
		</div>
	);
};
