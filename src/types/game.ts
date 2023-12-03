export enum Position {
  PositionLeft = 0,
  PositionCenter = 1,
  PositionRight = 2,
}

export type CoinType = {
  type: string;
  id: number;
  position: Position;
  speed: number;
};
