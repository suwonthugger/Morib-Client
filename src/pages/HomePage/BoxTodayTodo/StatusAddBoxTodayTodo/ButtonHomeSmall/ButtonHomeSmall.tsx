import { ButtonHTMLAttributes } from 'react';

const ButtonHomeSmall = ({ children, disabled = false, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
	const defaultStyle =
		'subhead-bold-20 flex items-center justify-center rounded-[0.8rem] px-[3.6rem] py-[2rem] flex-shrink-0 ';
	const buttonStyle = disabled
		? 'bg-gray-bg-06 text-gray-04 '
		: 'bg-gray-bg-05 text-white hover:bg-gray-bg-04 active:bg-gray-bg-05 ';

	return (
		<button className={defaultStyle + buttonStyle} disabled={disabled} {...props}>
			{children}
		</button>
	);
};

export default ButtonHomeSmall;
