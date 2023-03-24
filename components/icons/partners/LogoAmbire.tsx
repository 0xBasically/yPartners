import 	Image	from	'next/image';

import type {ReactElement, SVGProps} from 'react';

type TLogo = SVGProps<SVGSVGElement> & {isColored?: boolean};

function	LogoAmbire(props: TLogo): ReactElement {

	return props.isColored ? (
		<Image
			width={500}
			height={500}
			alt={'ambire logo'}
			src={'https://raw.githubusercontent.com/yearn/yearn-assets/d37bb4f2dd42f337e9ddf8dcbbb608cc0f2cdd5f/icons/protocols/ambire/logo.svg'}/>
	):(
		<Image
			width={32}
			height={47}
			alt={'ambire logo'}
			src={'https://raw.githubusercontent.com/yearn/yearn-assets/d37bb4f2dd42f337e9ddf8dcbbb608cc0f2cdd5f/icons/protocols/ambire/monochrome.svg'}/>
	);
}

export default LogoAmbire;
