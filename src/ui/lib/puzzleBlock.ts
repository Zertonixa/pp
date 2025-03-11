// Прямоугольники
const largeRect = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];
const bigRect = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
const mediumRect = [
  [1, 1, 1],
  [1, 1, 1],
];
const smallRect = [
  [1, 1],
  [1, 1],
];
const tinyRect = [[1], [1]];

// Полоски

const largeLine = [[1, 1, 1, 1, 1]];
const bigLine = [[1, 1, 1, 1]];
const mediumLine = [[1, 1, 1]];
const smallLine = [[1, 1]];
const tinyLine = [[1]];

// Прочие формы

const tri = [
  [0, 1, 0],
  [1, 1, 1],
];

const leftLight = [
  [1, 0],
  [1, 1],
  [0, 1],
];
const rightLight = [
  [0, 1],
  [1, 1],
  [1, 0],
];
const rotRightLight = [
  [0, 1, 1],
  [1, 1, 0],
];
const rotLeftLight = [
  [1, 1, 0],
  [0, 1, 1],
];

const smallCornerLeft = [
  [1, 0],
  [1, 0],
  [1, 1],
];
const smallCornerRight = [
  [0, 1],
  [0, 1],
  [1, 1],
];
const smallCornerTop = [
  [1, 1],
  [1, 0],
  [1, 0],
];
const smallCornerBottom = [
  [1, 1],
  [0, 1],
  [0, 1],
];

const smallLyingCornerLeft = [
  [1, 1, 1],
  [1, 0, 0],
];
const smallLyingCornerRight = [
  [1, 1, 1],
  [0, 0, 1],
];
const smallLyingCornerTop = [
  [1, 0, 0],
  [1, 1, 1],
];
const smallLyingCornerBottom = [
  [0, 0, 1],
  [1, 1, 1],
];

const cornerLeft = [
  [1, 0],
  [1, 0],
  [1, 0],
  [1, 1],
];
const cornerRight = [
  [0, 1],
  [0, 1],
  [0, 1],
  [1, 1],
];
const cornerTop = [
  [1, 1],
  [1, 0],
  [1, 0],
  [1, 0],
];
const cornerBottom = [
  [1, 1],
  [0, 1],
  [0, 1],
  [0, 1],
];

const lyingCornerLeft = [
  [1, 1, 1, 1],
  [1, 0, 0, 0],
];
const lyingCornerRight = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
];
const lyingCornerTop = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
];
const lyingCornerBottom = [
  [0, 0, 0, 1],
  [1, 1, 1, 1],
];

export const blocks = [
  largeRect,
  bigRect,
  mediumRect,
  smallRect,
  tinyRect,
  largeLine,
  bigLine,
  mediumLine,
  smallLine,
  tinyLine,
  tri,
  leftLight,
  rightLight,
  rotLeftLight,
  rotRightLight,
  smallCornerBottom,
  smallCornerLeft,
  smallCornerRight,
  smallCornerTop,
  smallLyingCornerBottom,
  smallLyingCornerLeft,
  smallLyingCornerRight,
  smallLyingCornerTop,
  cornerBottom,
  cornerLeft,
  cornerRight,
  cornerTop,
  lyingCornerBottom,
  lyingCornerLeft,
  lyingCornerRight,
  lyingCornerTop,
];
