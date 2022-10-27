import	React, {ReactElement, SVGProps}		from	'react';

function	IconForProtocols(props: SVGProps<SVGSVGElement>): ReactElement {
	const defaultProps = {
		width: 32,
		height: 32
	};

	props = {...defaultProps, ...props};

	return (
		<svg
			viewBox={'0 0 32 32'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M25.1667 7.44449C23.8855 7.44449 23.3333 8.23252 23.3333 8.66671C23.3333 9.10089 23.8855 9.88893 25.1667 9.88893C26.4478 9.88893 27 9.10089 27 8.66671C27 8.23252 26.4478 7.44449 25.1667 7.44449ZM20.8889 8.66671C20.8889 6.40222 23.072 5.00004 25.1667 5.00004C27.2613 5.00004 29.4444 6.40222 29.4444 8.66671C29.4444 10.9312 27.2613 12.3334 25.1667 12.3334C23.072 12.3334 20.8889 10.9312 20.8889 8.66671Z'}
				fill={'currentcolor'}/>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M6.83333 7.44449C5.5522 7.44449 5 8.23252 5 8.66671C5 9.10089 5.5522 9.88893 6.83333 9.88893C8.11446 9.88893 8.66667 9.10089 8.66667 8.66671C8.66667 8.23252 8.11446 7.44449 6.83333 7.44449ZM2.55555 8.66671C2.55555 6.40222 4.73869 5.00004 6.83333 5.00004C8.92798 5.00004 11.1111 6.40222 11.1111 8.66671C11.1111 10.9312 8.92798 12.3334 6.83333 12.3334C4.73869 12.3334 2.55555 10.9312 2.55555 8.66671Z'}
				fill={'currentcolor'}/>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M16 3.77782C14.7189 3.77782 14.1667 4.56586 14.1667 5.00004C14.1667 5.43422 14.7189 6.22226 16 6.22226C17.2811 6.22226 17.8333 5.43422 17.8333 5.00004C17.8333 4.56586 17.2811 3.77782 16 3.77782ZM11.7222 5.00004C11.7222 2.73556 13.9054 1.33337 16 1.33337C18.0946 1.33337 20.2778 2.73556 20.2778 5.00004C20.2778 7.26452 18.0946 8.66671 16 8.66671C13.9054 8.66671 11.7222 7.26452 11.7222 5.00004Z'}
				fill={'currentcolor'}/>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M16 12.3334C14.7189 12.3334 14.1667 13.1214 14.1667 13.5556C14.1667 13.9898 14.7189 14.7778 16 14.7778C17.2811 14.7778 17.8333 13.9898 17.8333 13.5556C17.8333 13.1214 17.2811 12.3334 16 12.3334ZM11.7222 13.5556C11.7222 11.2911 13.9054 9.88893 16 9.88893C18.0946 9.88893 20.2778 11.2911 20.2778 13.5556C20.2778 15.8201 18.0946 17.2223 16 17.2223C13.9054 17.2223 11.7222 15.8201 11.7222 13.5556Z'}
				fill={'currentcolor'}/>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M2.55555 13.5556C3.23057 13.5556 3.77778 14.1028 3.77778 14.7778V23.6995L16 28.144L28.2222 23.6995V14.7778C28.2222 14.1028 28.7694 13.5556 29.4444 13.5556C30.1195 13.5556 30.6667 14.1028 30.6667 14.7778V24.5556C30.6667 25.0695 30.3451 25.5286 29.8621 25.7042L16.4177 30.5931C16.1479 30.6912 15.8521 30.6912 15.5823 30.5931L2.13787 25.7042C1.65486 25.5286 1.33333 25.0695 1.33333 24.5556V14.7778C1.33333 14.1028 1.88054 13.5556 2.55555 13.5556Z'}
				fill={'currentcolor'}/>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M16 19.6667C16.675 19.6667 17.2222 20.2139 17.2222 20.8889V29.4445C17.2222 30.1195 16.675 30.6667 16 30.6667C15.325 30.6667 14.7778 30.1195 14.7778 29.4445V20.8889C14.7778 20.2139 15.325 19.6667 16 19.6667Z'}
				fill={'currentcolor'}/>
		</svg>
	);
}

export default IconForProtocols;

