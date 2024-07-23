import React from 'react';
import Countdown from 'react-countdown';
import { TimerContainer, TimeBox, Label } from './CountdownTimer.styled';

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
      <TimerContainer>
        <TimeBox>
          {formatNumber(days)} <Label>Days</Label>
        </TimeBox>
        <TimeBox>
          {formatNumber(hours)} <Label>Hours</Label>
        </TimeBox>
        <TimeBox>
          {formatNumber(minutes)} <Label>Minutes</Label>
        </TimeBox>
        <TimeBox>
          {formatNumber(seconds)} <Label>Seconds</Label>
        </TimeBox>
      </TimerContainer>
    );
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
