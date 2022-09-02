import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { CommonHeader } from '../../components/headerbars/CommonHeader';
import phoneImg from '../../assets/support/phone-call.png';
import forkImg from '../../assets/support/fork.png';
import userImage from '../../assets/common/user-image.png';
import ic_send from '../../assets/support/ic_send.svg';
import produce from 'immer';

const initData = [
	{
		type: 'receiver',
		msg: 'Hi Steve smith',
	},
	{
		type: 'sender',
		msg: 'Hi',
	},
	{
		type: 'receiver',
		msg: 'What can I do for you ?',
	},
];

const Support = () => {
	const [msgData, setMsgData] = React.useState(initData);

	const [msg, setMsg] = React.useState({ type: '', msg: '' });

	return (
		<>
			<CommonHeader headingName={'Support'} />
			<Container fluid>
				<Row>
					<Col className='col-12'>
						<div
							style={{ borderBottom: '1px solid #AE9C67' }}
							className='d-flex m-3 pb-2 d-flex align-items-center'>
							<div style={{ fontSize: '10px', fontWeight: '600', color: '#9F9F9F' }}>
								You can message or call us
							</div>
							<div className='ms-auto'>
								<img src={phoneImg} alt='' />
							</div>
						</div>
					</Col>
					<Col className='col-12'>
						{msgData.map((data) => {
							if (data.type === 'receiver') {
								return (
									<div className='d-flex m-3 pb-2 d-flex align-items-center justify-content-start'>
										<div
											className='d-flex align-items-center justify-content-center'
											style={{
												borderRadius: '50%',
												width: '35px',
												height: '35px',
												backgroundColor: '#AE9C67',
											}}>
											<img src={forkImg} alt='' />
										</div>
										<div className='chat-receve-msg ms-2'>{data.msg}</div>
									</div>
								);
							} else {
								return (
									<div className='d-flex m-3 pb-2 d-flex align-items-center justify-content-end'>
										<div className='chat-send-msg'>{data.msg}</div>
										<div className='ms-2'>
											<img width={35} height={35} src={userImage} alt='' />
										</div>
									</div>
								);
							}
						})}
					</Col>
				</Row>
				<Row className=''>
					<Col className='col-12 d-flex justify-content-center'>
						<div className='chat-typing-section d-flex'>
							<input
								value={msg.msg}
								onChange={(e) => {
									setMsg({ type: 'sender', msg: e.target.value });
								}}
								className='form-control chat-text-field'
								type='text'
							/>
							<button
								onClick={() => {
									const newValue = produce(msgData, (draft) => {
										draft.push(msg);
									});
									setMsgData(newValue);
									setMsg({msg: '' });
								}}
								className='chat-send-button d-flex'>
								<img className='me-2' src={ic_send} alt='' /> SEND
							</button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Support;
