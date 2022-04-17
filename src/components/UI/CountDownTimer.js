import useCountDown from './hooks/useCountDown'

const CountDownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = targetDate.split(':')
  // useCountDown(targetDate)

  const displayFormat = (value) => { 
    return (value.length < 2) ? '0' + value : value 
  } 

  if (days + hours + minutes + seconds <= 0) {
    return '00:00:00'
  } else {
    return (
        <div className='show-counter'>{displayFormat(hours)}:{displayFormat(minutes)}:{displayFormat(seconds)}</div>
    )
  }
}

export default CountDownTimer