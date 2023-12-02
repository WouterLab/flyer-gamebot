import { Player } from "#components/Player";
import { useSwipeable } from "react-swipeable";
import { Wrapper, Centered, Left, Right, PlayerWrapper } from "./styled";
import { useState } from "react";
import { PlayerPosition } from "#types/game";

export function Game() {
  const [playerPosition, setPlayerPosition] = useState<PlayerPosition>(1);

  const config = {
    trackMouse: true,
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (playerPosition === 0) return;
      setPlayerPosition(playerPosition - 1);
    },
    onSwipedRight: () => {
      if (playerPosition === 2) return;
      setPlayerPosition(playerPosition + 1);
    },
    ...config,
  });

  const getPlayerPositionStyles = () => {
    if (playerPosition === 0) return Left;
    if (playerPosition === 2) return Right;
    return Centered;
  };

  return (
    <Wrapper {...handlers}>
      <PlayerWrapper className={getPlayerPositionStyles()}>
        <Player />
      </PlayerWrapper>
    </Wrapper>
  );
}
