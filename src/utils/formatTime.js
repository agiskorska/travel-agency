export const formatTime = time => {
  if(typeof(time) != 'number' || time < 0) {
    return null;
  }

  const hour = parseInt(time / 3600);
  const minutes = parseInt((time - (hour * 3600))/60);
  const seconds = parseInt(time - (hour * 3600) - (minutes * 60));

  return zeroPaddingTime(hour, minutes, seconds).join(':');
};

const zeroPaddingTime = (...timeParts) => {
  timeParts.forEach(timePart => {
    if(timePart < 10){
      timeParts[timeParts.indexOf(timePart)] = '0' + timePart;
    }
  });

  return timeParts;
};
