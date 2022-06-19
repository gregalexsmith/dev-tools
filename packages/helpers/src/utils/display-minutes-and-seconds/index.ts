function leftPad(str: string | number, length: number, pad: string) {
  return (new Array(length + 1).join(pad) + str).slice(-length);
}

export const displayMinutesAndSeconds = (secondsInput = 0) => {
  const minutes = Math.floor(secondsInput / 60);
  const seconds = Math.floor(secondsInput - minutes * 60);

  return leftPad(minutes, 2, '0') + ':' + leftPad(seconds, 2, '0');
};
