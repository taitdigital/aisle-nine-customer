import useCountDown from './hooks/useCountDown'

const CountDownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate)

  if (days + hours + minutes + seconds <= 0) {
    return '00:00:00'
  } else {
    return (
        <div className='show-counter'>{hours}:{minutes}:{seconds}</div>
    )
  }
}

export default CountDownTimer