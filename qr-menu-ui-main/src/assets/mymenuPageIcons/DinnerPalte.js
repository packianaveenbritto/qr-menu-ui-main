import React from 'react';

const DinnerPalte = ({ fill = 'url(#pattern)' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xlink='http://www.w3.org/1999/xlink'
			width='61'
			height='36'
			viewBox='0 0 61 36'>
			<defs>
				<pattern id='pattern' width='1' height='1' viewBox='-21.181 0 103.361 61'>
					<image
						preserveAspectRatio='xMidYMid slice'
						width='61'
						height='61'
						href='data:image/png;base64,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'
					/>
				</pattern>
			</defs>
			<g id='dinner' stroke='#9f9f9f' stroke-width='1' fill='url(#pattern)'>
				<rect width='61' height='36' stroke='none' />
				<rect x='0.5' y='0.5' width='60' height='35' fill='none' />
			</g>
		</svg>
	);
};

export default DinnerPalte;
