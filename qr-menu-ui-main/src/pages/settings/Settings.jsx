import {
	Box,
	List,
	Divider,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemText,
	Drawer,
} from '@mui/material';
import React from 'react';
import Card from 'react-bootstrap/Card';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import CommonWrapper from '../../wrappers/CommonWrapper';
import { AccountFeatures, AccountSettings } from './SettingsData';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Offcanvas } from 'react-bootstrap';
import Logo from '../../assets/common/logo-colourd.png';
import SadIco from '../../assets/common/sad.svg';
import CheckIco from '../../assets/common/check.png';
import { TbMoodSad } from 'react-icons/tb';

const Settings = () => {
	const navigate = useNavigate();
	const [state, setState] = React.useState({
		bottom: false,
	});
	const toggleDrawer = (anchor, open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = () => (
		<Box
			sx={{ width: 'auto', height: '30vh', overflowY: 'auto' }}
			role='presentation'
			onClick={toggleDrawer('bottom', false)}
			onKeyDown={toggleDrawer('bottom', false)}>
			<List>
				{['English', 'Albanian', 'Bengali', 'Dutch', 'Mongolian'].map((text, index) => (
					<>
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
						<Divider sx={{ color: 'black', borderColor: 'black' }} />
					</>
				))}
			</List>
		</Box>
	);

	const [showLogout, setShowLogout] = React.useState(false);
	const [deleteAcc, setDeleteAcc] = React.useState(false);
	const [deletedSuccess, setDeletedSccess] = React.useState(false);
	return (
		<>
			<CommonWrapper header='Settings'>
				<div className='d-flex justify-content-center'>
					<Card className='mt-3 custom-card' style={{ width: '95%' }}>
						<Card.Body>
							<div>
								<IconButton
									aria-label='edit'
									className='card-edit-icon'
									onClick={() => navigate('/profile-info')}>
									<BiIcons.BiPencil size={15} />
								</IconButton>
							</div>
							<div className='header-content'>
								<div className='profile-pic'></div>
								<div className='ms-3 p-1 d-flex flex-column'>
									<span className='profile-name'>Steve Smith</span>
									<div className=''>
										<FaIcons.FaRegFlag />
										<span className='ms-2 profile-contact-no'>771234567</span>
									</div>
									<span className='profile-email'>steve@gmail.com</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className='d-flex justify-content-center'>
					<Card className='mt-3 custom-card' style={{ width: '95%' }}>
						<Card.Body>
							<div className='d-flex flex-column'>
								{AccountFeatures.map((item, index) => {
									return (
										<div className={item.className}>
											<Link to={item.path}>
												{item.icon}
												<span className='nav-font'>{item.title}</span>
											</Link>
										</div>
									);
								})}
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className='d-flex justify-content-center'>
					<Card className='mt-3 custom-card' style={{ width: '95%' }}>
						<Card.Body>
							<div className='d-flex flex-column'>
								{AccountSettings.map((item, index) => {
									return (
										<div className={item.className}>
											<Link
												to={item.path}
												onClick={
													item.path === ''
														? toggleDrawer('bottom', true)
														: ''
												}>
												{item.icon}
												<span className='nav-font'>{item.title}</span>
											</Link>
										</div>
									);
								})}
								<div className='nav-text mt-2'>
									<Link to='#' onClick={() => setDeleteAcc(true)}>
										<TbMoodSad />
										<span className='nav-font'>Delete Account</span>
									</Link>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className='d-flex justify-content-center'>
					<Card className='mt-3 custom-card' style={{ width: '95%' }}>
						<Card.Body>
							<div className='d-flex flex-column'>
								<div className='nav-text mt-0'>
									<Link to='#' onClick={() => setShowLogout(true)}>
										<AiIcons.AiOutlineLogout />
										<span className='nav-font'>Log Out</span>
									</Link>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<Offcanvas
					className='bottom-popup-low-mid-screen'
					placement='bottom'
					show={state['bottom']}
					onHide={toggleDrawer('bottom', false)}>
					<Offcanvas.Header className='pb-0' closeButton>
						<div className='d-flex flex-column'>
							<div style={{ fontSize: '16px', fontWeight: '600' }}>Language</div>
							<p style={{ fontSize: '12px' }}>Select Your Language</p>
						</div>
					</Offcanvas.Header>
					<Container fluid>{list()}</Container>
				</Offcanvas>
				<Offcanvas
					className='bottom-popup'
					placement='bottom'
					show={showLogout}
					nHide={() => setShowLogout(false)}>
					<div className='d-flex flex-column align-items-center justify-content-center'>
						<img
							className='mt-4 mb-2'
							style={{ width: '80px', borderRadius: '10px' }}
							src={Logo}
							alt=''
						/>
						<span>Are you sure you want logout from</span>
						<span>my menu cafe?</span>
					</div>
					<div className='mt-3 d-flex'>
						<div className='col-6 d-flex justify-content-center'>
							<button
								className='item-remove-no-button'
								onClick={() => setShowLogout(false)}>
								NO
							</button>
						</div>
						<div className='col-6 d-flex justify-content-center'>
							<button
								className='item-remove-remove-button'
								onClick={() => setShowLogout(true)}>
								YES
							</button>
						</div>
					</div>
				</Offcanvas>
				<Offcanvas
					className='bottom-popup'
					placement='bottom'
					show={deleteAcc}
					nHide={() => setDeleteAcc(false)}>
					<div className='d-flex flex-column align-items-center justify-content-center'>
						<img
							className='mt-4 mb-2'
							style={{ width: '80px', borderRadius: '10px' }}
							src={SadIco}
							alt=''
						/>
						<span>Do you want to delete your account?</span>
					</div>
					<div className='mt-3 d-flex'>
						<div className='col-6 d-flex justify-content-center'>
							<button
								className='item-remove-no-button'
								onClick={() => setDeleteAcc(false)}>
								NO
							</button>
						</div>
						<div className='col-6 d-flex justify-content-center'>
							<button
								className='item-remove-remove-button'
								onClick={() => setDeletedSccess(true)}>
								YES
							</button>
						</div>
					</div>
				</Offcanvas>
				<Offcanvas
					className='bottom-popup'
					placement='bottom'
					show={deletedSuccess}
					nHide={() => setDeletedSccess(false)}>
					<div className='d-flex flex-column align-items-center justify-content-center'>
						<img
							className='mt-4 mb-2'
							style={{ width: '80px', borderRadius: '10px' }}
							src={CheckIco}
							alt=''
						/>
						<span>Delete your account successfully</span>
					</div>
					<div className='mt-3 d-flex justify-content-center'>
						<div className='col-6 d-flex justify-content-center'>
							<button
								className='item-remove-remove-button'
								onClick={() => {
									setDeletedSccess(false);
									navigate('/');
								}}>
								YES
							</button>
						</div>
					</div>
				</Offcanvas>
			</CommonWrapper>
		</>
	);
};

export default Settings;
