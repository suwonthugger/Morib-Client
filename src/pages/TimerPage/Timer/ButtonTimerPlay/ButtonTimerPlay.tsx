import PauseIcon from '@/shared/assets/svgs/defaultpause.svg?react';
import PlayIcon from '@/shared/assets/svgs/defaultplay.svg?react';
import HoverPauseIcon from '@/shared/assets/svgs/hoverpause.svg?react';
import HoverPlayIcon from '@/shared/assets/svgs/hoverplay.svg?react';

interface ButtonTimerPlayProps {
	onClick: () => void;
	isPlaying: boolean;
}

const ButtonTimerPlay = ({ onClick, isPlaying }: ButtonTimerPlayProps) => {
	const IconComponent = isPlaying ? PauseIcon : PlayIcon;
	const HoverIconComponent = isPlaying ? HoverPauseIcon : HoverPlayIcon;

	return (
		<button onClick={onClick} className="group relative">
			<IconComponent className="block group-hover:hidden" />
			<HoverIconComponent className="hidden group-hover:block" />
		</button>
	);
};

export default ButtonTimerPlay;
