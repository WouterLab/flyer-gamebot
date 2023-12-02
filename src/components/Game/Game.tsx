import { Player } from "#components/Player";
import { useSwipeable } from "react-swipeable";
import { Wrapper } from "./styled";
import { memo, useState } from "react";
import { Position } from "#types/game";
import { Coins } from "#components/Coins";

export const Game = memo(function Game() {
  const [playerPosition, setPlayerPosition] = useState<Position>(1);

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
      <Coins playerPosition={playerPosition} />
      <Player position={playerPosition} />
    </Wrapper>
  );
});
