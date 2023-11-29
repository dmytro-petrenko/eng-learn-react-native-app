import React from 'react';
import { TimerBlock, TimerIndication } from './Timer.styled';
import { useAppSelector } from '../../redux/hooks';
import { useNow } from '../../hooks/useNow';

const Timer = (): JSX.Element => {
  const { startTime, wordStackInReview } = useAppSelector(
    (state) => state.appManageSlice
  );
  const countDownState = wordStackInReview.countDown * 60 * 1000;

  const now = useNow(1000, startTime);

  let timer = Math.floor(now - (startTime ?? now));
  let countDown = (countDownState - timer) / 1000;
  let minutes = Math.floor(countDown / 60);
  let seconds = Math.floor(countDown - minutes * 60);

  return (
    <TimerBlock>
      <TimerIndication>
        {countDown <= 0
          ? '00:00'
          : `${minutes < 10 ? '0' + minutes.toString() : minutes}:${
              seconds < 10 ? '0' + seconds.toString() : seconds
            }`}
      </TimerIndication>
    </TimerBlock>
  );
};
export default Timer;
