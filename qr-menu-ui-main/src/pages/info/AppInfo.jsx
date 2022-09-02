import React from 'react';
import { CommonHeader } from '../../components/headerbars/CommonHeader';
import { Card, Col, Container, Row } from 'react-bootstrap';

const AppInfo = () => {
	return (
		<>
			<CommonHeader headingName={'My Menu Info'} />
			<Container>
				<Row>
					<Col className='col-12'>
						<Card
							className='border-0 custom-card p-2 mt-2'
							style={{ borderRadius: '10px' }}>
							<div style={{ fontSize: '12px', color: '#242323' }}>Start Screen</div>
							<div style={{ fontSize: '12px', color: '#9F9F9F', fontWeight: '600' }}>
								Our menu is 100% customizable which allows the restaurant to
								showcase their menu in their own colors and images. Moreover, it's
								also possible to run a video as a background on the start screen.
							</div>
						</Card>
					</Col>

					<Col className='col-12'>
						<Card
							className='border-0 custom-card p-2 mt-2'
							style={{ borderRadius: '10px' }}>
							<div style={{ fontSize: '12px', color: '#242323' }}>
								Multiple Columns
							</div>
							<div style={{ fontSize: '12px', color: '#9F9F9F', fontWeight: '600' }}>
								Based on your menu and the number of menu items in each section you
								have the flexibility of defining different number of columns for
								different sections!
							</div>
						</Card>
					</Col>

					<Col className='col-12'>
						<Card
							className='border-0 custom-card p-2 mt-2'
							style={{ borderRadius: '10px' }}>
							<div style={{ fontSize: '12px', color: '#242323' }}>
								Multiple Languages
							</div>
							<div style={{ fontSize: '12px', color: '#9F9F9F', fontWeight: '600' }}>
								Lost in communication? Never again! My Menu supports over 140+
								languages. Perfect for restaurants that get frequented by tourists
								who do not speak the local language!
							</div>
						</Card>
					</Col>

					<Col className='col-12'>
						<Card
							className='border-0 custom-card p-2 mt-2'
							style={{ borderRadius: '10px' }}>
							<div style={{ fontSize: '12px', color: '#242323' }}>Guest Feedback</div>
							<div style={{ fontSize: '12px', color: '#9F9F9F', fontWeight: '600' }}>
								My Menu allows you to capture guest feedback easily on the app. If
								the feedback is negative or under a certain average score, an email
								or SMS notification is sent to the Manager so that the problem can
								be dealt with real-time increasing guest satisfaction!
							</div>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AppInfo;
