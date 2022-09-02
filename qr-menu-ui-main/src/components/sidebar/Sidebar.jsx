import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarData';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiChevronLeft } from 'react-icons/bi';
import Languages from './Languages';
import { Tune } from '@mui/icons-material';
import userImage from '../../assets/common/user-image.png';

const Sidebar = ({ showMenu, closeMenu, onClickLanguage }) => {
	return (
		<>
			<Offcanvas className='nav-menu' show={showMenu}>
				<div className='nav-menu-header'>
					<div className='header-content'>
						<div>
							<img className='profile-pic' src={userImage} alt='' />
						</div>
						<div className='ms-3 p-1 d-flex flex-column'>
							<span className='profile-name'>Steve Smith</span>
							<div className=''>
								<FaIcons.FaRegFlag />
								<span className='ms-2 profile-contact-no'>771234567</span>
							</div>
							<span className='profile-email'>steve@gmail.com</span>
						</div>
					</div>
					<Link to='#' className='nav-menu-close'>
						<BiChevronLeft color='black' onClick={closeMenu} size={26} />
					</Link>
				</div>
				<div className='h-seperator' />
				<div className='nav-menu-body d-flex flex-column'>
					{sidebarData.map((item, index) => {
						return (
							<div className={item.className}>
								<Link
									to={item.path}
									onClick={() => {
										onClickLanguage(item.path);
									}}>
									<img src={item.icon} alt='' />
									<span>{item.title}</span>
								</Link>
							</div>
						);
					})}
				</div>
				<div className='h-seperator' />
				<div className='nav-footer d-flex flex-column'>
					<Link to='/feedback'>
						<span>Feedback</span>
					</Link>

					<Link to='/term-and-condition'>
						<span>Term & Condition</span>
					</Link>
				</div>
			</Offcanvas>
		</>
	);
};

export default Sidebar;
