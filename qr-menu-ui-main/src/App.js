import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Mymenu from './pages/mymenu/Mymenu';
import GetWhatsapp from './pages/loginAndSignup/GetWhatsapp';
import CreateNewAccount from './pages/loginAndSignup/CreateNewAccount';
import VerifyWhatsApp from './pages/loginAndSignup/VerifyWhatsApp';
import ExploreMenu from './pages/exporeMenu/ExploreMenu';
import Settings from './pages/settings/Settings';
import Profile from './pages/profile/Profile';
import AddressView from './pages/profile/AddressView';
import SavedCard from './pages/card/SavedCard';
import AddCard from './pages/card/AddCard';
import NotificationSettings from './pages/settings/NotificationSettings';
import Subcategory from './pages/subcategory/Subcategory';
import MyBasket from './pages/basket/MyBasket';
import MyOrders from './pages/orders/MyOrders';
import OrderView from './pages/orders/OrderView';
import AppInfo from './pages/info/AppInfo';
import OrderReview from './pages/orders/OrderReview';
import Support from './pages/support/Support';
import Home from './pages/home/Home';
import OrderPlaced from './pages/orders/OrderPlaced';

function App() {
	return (
		<>
			<LocalizationProvider dateAdapter={AdapterMoment}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Mymenu />} />
					<Route path='/expore-menu' element={<ExploreMenu />} />
					<Route path='/my-favorites' element={<ExploreMenu />} />
					<Route path='/login-whatsapp' element={<GetWhatsapp />} />
					<Route path='/create-account' element={<CreateNewAccount />} />
					<Route path='/verify-account' element={<VerifyWhatsApp />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/profile-info' element={<Profile />} />
					<Route path='/address-view' element={<AddressView />} />
					<Route path='/saved-cards' element={<SavedCard />} />
					<Route path='/create-card' element={<AddCard />} />
					<Route path='/notification-settings' element={<NotificationSettings />} />
					<Route path='/subcategory' element={<Subcategory />} />
					<Route path='/my-basket' element={<MyBasket />} />
					<Route path='/orders-history' element={<MyOrders />} />
					<Route path='/order-details' element={<OrderView />} />
					<Route path='/application-info' element={<AppInfo />} />
					<Route path='/order-review' element={<OrderReview />} />
					<Route path='/support' element={<Support />} />
					<Route path='/order-placed' element={<OrderPlaced />} />
				</Routes>
			</LocalizationProvider>
		</>
	);
}

export default App;
