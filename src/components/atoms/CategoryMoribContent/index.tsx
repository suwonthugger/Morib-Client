import React from 'react';

interface UrlInfo {
	url: string;
	domain: string;
	favicon: string;
}

interface CategoryMoribContentProps {
	urlInfo: UrlInfo;
	variant?: 'basic' | 'smallLeft' | 'smallRight';
	children?: React.ReactNode;
}

const CategoryMoribContent = ({ urlInfo, variant, children }: CategoryMoribContentProps) => {
	const sizeVariant = {
		basic: {
			width: 'w-[72.8rem]',
			pageWidth: 'w-[22.8rem]',
			urlWidth: 'w-[39.2rem]',
			gap: 'gap-[2rem]',
		},
		smallLeft: {
			width: 'w-[61.4rem]',
			pageWidth: 'w-[18.8rem]',
			urlWidth: 'w-[28.8rem]',
			gap: 'gap-[1.2rem]',
		},
		smallRight: { width: 'w-[53.9rem]', pageWidth: 'w-[18.1rem]', urlWidth: 'w-[21.1rem]', gap: 'gap-[2rem]' },
	};

	const tbodyUrlStyle =
		'detail-reg-14 h-[2.1rem] truncate rounded-[2rem] bg-gray-bg-04 px-[1rem] py-[0.1rem] text-white';

	return (
		<div className={`h-[4.6rem] border-b-[0.1rem] border-gray-bg-04 px-[0.8rem] ${sizeVariant[variant].width}`}>
			<div className={`mr-[0.2rem] flex h-[4.6rem] items-center py-[1.2rem] ${sizeVariant[variant].gap}`}>
				<div className={`my-[0.1rem] flex h-[2.2rem] items-center`}>
					<img src={urlInfo.favicon} alt="favicon" className="my-[0.1rem] mr-[1.2rem] h-[2rem] w-[2rem]" />
					<div className={`body-reg-16 my-[0.05rem] text-white ${sizeVariant[variant].pageWidth}`}>
						{urlInfo.domain}
					</div>
				</div>
				<div className={`${tbodyUrlStyle} ${sizeVariant[variant].urlWidth}`}>{urlInfo.url}</div>
				{children}
			</div>
		</div>
	);
};

export default CategoryMoribContent;