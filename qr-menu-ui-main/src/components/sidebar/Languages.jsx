import React from 'react';
import {
	List,
	Divider,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemText,
	Drawer,
	Box,
} from '@mui/material';
import { Container, Offcanvas } from 'react-bootstrap';

const Languages = ({ show, onClose }) => {
	const list = () => (
		<Box sx={{ width: 'auto', height: '30vh', overflowY: 'auto' }} role='presentation'>
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
	return (
		<>
			<Offcanvas
				className='bottom-popup-low-mid-screen'
				placement='bottom'
				onHide={onClose}
				show={show}
				h>
				<Offcanvas.Header className='pb-0' closeButton>
					<div className='d-flex flex-column'>
						<div style={{ fontSize: '16px', fontWeight: '600' }}>Language</div>
						<p style={{ fontSize: '12px' }}>Select Your Language</p>
					</div>
				</Offcanvas.Header>
				<Container fluid>{list()}</Container>
			</Offcanvas>
		</>
	);
};

export default Languages;
