import { Image, Wrapper, Container, Left, Right, Centered } from "./styled";
import PlayerScene1 from "#assets/horse_1.png";
import PlayerScene2 from "#assets/horse_2.png";
import PlayerScene3 from "#assets/horse_3.png";
import { useEffect, useState } from "react";
import { Position } from "#types/game";

const playerImages = [PlayerScene1, PlayerScene2, PlayerScene3];

export function Player({ position }: { position: Position }) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  useEffect(() => {
    const animation = setInterval(() => {
      if (currentSceneIndex === 2) setCurrentSceneIndex(0);
      else setCurrentSceneIndex(currentSceneIndex + 1);
    }, 150);

    return () => clearInterval(animation);
  }, [currentSceneIndex]);

  const getPlayerPositionStyles = () => {
    if (position === 0) return Left;
    if (position === 2) return Right;
    return Centered;
  };

  return (
    <Wrapper className={getPlayerPositionStyles()} onSelect={() => false}>
      <Container onSelect={() => false}>
        <Image src={playerImages[currentSceneIndex]} onSelect={() => false} />
      </Container>
    </Wrapper>
  );
}
