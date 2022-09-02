import React from 'react';

const CardWithImage = ({
	title,
	
	width,
	height,
	imgage,
	titlePossition,
	titleSize,
}) => {
	return (
		<div
			style={{
				width: `${width}`,
				height: `${height}`,
			}}
			className='CardWithImage'>
			<div className={`title d-flex justify-content-${titlePossition}`}>
				<span style={{ fontSize: titleSize }}>{title}</span>
			</div>

			<div>
				<img src={imgage} alt="" />
			</div>
		</div>
	);
};

export default CardWithImage;
