import React from 'react';
import * as AiIcons from 'react-icons/ai';
import chat from '../../assets/aside/chat.svg';
import heart from '../../assets/aside/heart.svg';
import info from '../../assets/aside/info.svg';
import menu from '../../assets/aside/menu.svg';
import parcel from '../../assets/aside/parcel.svg';
import settings from '../../assets/aside/settings.svg';
import web from '../../assets/aside/web.svg';

export const sidebarData = [
	{
		title: 'Orders History',
		path: '/orders-history',
		icon: parcel,
		className: 'nav-text',
	},
	{
		title: 'My Favorites',
		path: '/my-favorites',
		icon: heart,
		className: 'nav-text',
	},
	{
		title: (
			<>
				Language <AiIcons.AiOutlineDown className='ms-3' color='black' size={12} />
			</>
		),
		path: '',
		icon: web,
		className: 'nav-text',
	},
	{
		title: 'Application Info',
		path: '/application-info',
		icon: info,
		className: 'nav-text',
	},
	{
		title: 'Support',
		path: '/support',
		icon: chat,
		className: 'nav-text',
	},
	{
		title: 'Settings',
		path: '/settings',
		icon: settings,
		className: 'nav-text',
	},
	{
		title: 'Explore Menu',
		path: '/expore-menu',
		icon: menu,
		className: 'nav-text',
	},
];
