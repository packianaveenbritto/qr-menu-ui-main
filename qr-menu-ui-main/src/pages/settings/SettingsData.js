import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as IoIcons from 'react-icons/io5';
import * as Io4Icons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as TbIcons from 'react-icons/tb';

export const AccountFeatures = [
	{
		title: 'My Favorites',
		path: '/explore-menu',
		icon: <GrIcons.GrFavorite />,
		className: 'nav-text mt-0',
	},
	{
		title: 'My Addresses',
		path: '/address-view',
		icon: <IoIcons.IoLocationOutline />,
		className: 'nav-text mt-2',
	},
	{
		title: 'My Orders History',
		path: '/orders-history',
		icon: <MdIcons.MdOutlineShoppingBag />,
		className: 'nav-text mt-2',
	},
	{
		title: 'My Saved Cards',
		path: '/saved-cards',
		icon: <AiIcons.AiOutlineCreditCard />,
		className: 'nav-text mt-2',
	},
];

export const AccountSettings = [
	{
		title: 'Notifications',
		path: '/notification-settings',
		icon: <Io4Icons.IoMdNotificationsOutline />,
		className: 'nav-text mt-0 ',
	},
	{
		title: (
			<>
				<span className='ms-0 me-2'>Languages</span>
				<AiIcons.AiOutlineDown />{' '}
			</>
		),
		path: '',
		icon: <TbIcons.TbWorld />,
		className: 'nav-text mt-2',
	},
	{
		title: 'Support',
		path: '/support',
		icon: <IoIcons.IoChatbubbleEllipsesOutline />,
		className: 'nav-text mt-2',
	},
	{
		title: 'Profile info',
		path: '/profile-info',
		icon: <AiIcons.AiOutlineInfoCircle />,
		className: 'nav-text mt-2',
	},
];