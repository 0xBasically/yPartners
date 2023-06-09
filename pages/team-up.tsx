import IconLinkOut from '@yearn-finance/web-lib/icons/IconLinkOut';

import type {ReactElement} from 'react';


function	TeamUpPage(): ReactElement {
	return (
		<div className={'w-full bg-neutral-200 p-6'}> 	
			<div className={'max-w-screen-md p-2'}>
			
				<h1 className={'pb-6 text-3xl'} >{'Let’s Team Up!'}</h1>
				
				<div className={'space-y-6 text-neutral-600'}>
					<p>
						{'Have you ever found yourself thinking “Wow! Yearn’s yield generating vaults are a work of DeFi art. I WISH I could integrate them into what we’re building.” Well friend, you’ve come to the right place.'}
					</p>
					<p>
						{'Yearn’s Partnership Program lets developers easily integrate yield-generation into their products and earn up to 50% profit share from their contributed TVL. As the kids say… “LFG!”.'}
					</p>
					<p>
						{'Our partnership program has been battle tested by a wide range of partners since it launched in early 2021. If you’d like to team up, we’d love to hear from you! Simply reach out using the Yearn Partners form below.'}
					</p>

					<a
						href={'https://yearnfinance.typeform.com/to/uP7xOJUN'}
						target={'_blank'}
						rel={'noreferrer'}
						className={'flex max-w-[13rem] items-center justify-center bg-neutral-900 p-2 text-base font-medium text-white'}>
						{'Fill the form'}
						<IconLinkOut className={'ml-3 h-4 w-4 text-white transition-colors md:h-4 md:w-4'} />
					</a>
					
				</div>
			</div>
		</div>
	);
}

export default TeamUpPage;
