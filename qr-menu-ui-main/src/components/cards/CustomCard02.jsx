import React from 'react';
import Card from 'react-bootstrap/Card';

const CustomCard02 = ({ title, width, height, backImg, titlePossition, titleSize }) => {
	return (
		<>
			<Card
				style={{
					minWidth: `${width}`,
					height: height,
				}}
				className='custom-card p-2 m-1'>
				<div
					className='title '
					style={{
						fontSize: titleSize,
					}}>
					<span>{title}</span>
				</div>
				<img height={50} src={backImg} alt='' />
			</Card>
		</>
	);
};

export default CustomCard02;
