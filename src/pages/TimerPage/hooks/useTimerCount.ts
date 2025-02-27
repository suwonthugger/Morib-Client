import { useEffect, useRef, useState } from 'react';

interface UseTimerCountProps {
	isPlaying: boolean;
	previousTime: number;
}

interface UseTimerCountReturn {
	timer: number;
	increasedTime: number;
	resetIncreasedTime: () => void;
}

export const useTimerCount = ({ isPlaying, previousTime }: UseTimerCountProps): UseTimerCountReturn => {
	const [increasedTime, setIncreasedTime] = useState(0);
	const timerIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

	useEffect(() => {
		setIncreasedTime(0);
	}, [previousTime]);

	useEffect(() => {
		if (isPlaying) {
			if (timerIntervalId.current === null) {
				timerIntervalId.current = setInterval(() => {
					setIncreasedTime((prevTime) => prevTime + 1);
				}, 1000);
			}
		} else {
			if (timerIntervalId.current !== null) {
				clearInterval(timerIntervalId.current);
				timerIntervalId.current = null;
				setIncreasedTime(0);
			}
		}

		return () => {
			if (timerIntervalId.current !== null) {
				clearInterval(timerIntervalId.current);
				timerIntervalId.current = null;
			}
		};
	}, [isPlaying]);

	const resetIncreasedTime = () => {
		setIncreasedTime(0);
	};

	const timer = previousTime + increasedTime;

	return { timer, increasedTime, resetIncreasedTime };
};
