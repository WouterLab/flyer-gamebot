import { Player } from "#components/Player";
import { useSwipeable } from "react-swipeable";
import { Wrapper } from "./styled";
import { memo, useState } from "react";
import { Position } from "#types/game";
import { Coins } from "#components/Coins";
import { Counter } from "#components/Counter";
import { Grass } from "#components/Grass";

export const Game = memo(function Game() {
  const [playerPosition, setPlayerPosition] = useState<Position>(1);
  const [coinCounter, setCoinCounter] = useState(0);

  const config = {
    trackMouse: true,
  };

  const handleSwipeLeft = () => {
    if (playerPosition === 0) return;
    setPlayerPosition(playerPosition - 1);
  };

  const handleSwipeRight = () => {
    if (playerPosition === 2) return;
    setPlayerPosition(playerPosition + 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    ...config,
  });

  return (
    <Wrapper {...handlers}>
      <Grass />
      <Counter count={coinCounter} />
      <Coins playerPosition={playerPosition} setCoinCounter={setCoinCounter} />
      <Player position={playerPosition} />
    </Wrapper>
  );
});
