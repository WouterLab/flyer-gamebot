import { Wrapper, Image } from "./styled";
import PlayerScene1 from "#assets/horse_1.png";
import PlayerScene2 from "#assets/horse_2.png";
import PlayerScene3 from "#assets/horse_3.png";
import { useEffect, useState } from "react";

const playerImages = [PlayerScene1, PlayerScene2, PlayerScene3];

export function Player() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  useEffect(() => {
    const animation = setInterval(() => {
      if (currentSceneIndex === 2) setCurrentSceneIndex(0);
      else setCurrentSceneIndex(currentSceneIndex + 1);
    }, 150);

    return () => clearInterval(animation);
  }, [currentSceneIndex]);

  return (
    <Wrapper>
      <Image src={playerImages[currentSceneIndex]} />
    </Wrapper>
  );
}
