export interface pointProps {
  x: number;
  y: number;
  z: number;
  visibility?: number;
}

function distance(pointA: pointProps, pointB: pointProps) {
  return Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y);
}

export function isFist(array: pointProps[]) {
  if (!array || array.length < 21) return false;

  const fingerStart = [array[5], array[9], array[13], array[17]];
  const fingerEnd = [array[8], array[12], array[16], array[20]];
  const ringMCP = array[13];
  const thumbCMC = array[1];
  const thumbTip = array[4];
  const wrist = array[0];

  if (distance(thumbTip, ringMCP) > distance(thumbCMC, ringMCP)) return false;

  for (let i = 0; i < fingerStart.length; i++) {
    if (distance(fingerEnd[i], wrist) > distance(fingerStart[i], wrist)) {
      return false;
    }
  }

  return true;
}
