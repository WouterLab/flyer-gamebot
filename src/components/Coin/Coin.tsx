import {
  Image,
  Centered,
  Right,
  Left,
  Container,
  Wrapper,
  Hidden,
} from "./styled";
import CoinImage from "#assets/boycoin.png";
import { Position } from "#types/game";
import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";

type CoinProps = {
  position: Position;
  playerPosition: Position;
  speed: number;
  setCoinCounter: Dispatch<SetStateAction<number>>;
};

export function Coin({
  position,
  speed,
  playerPosition,
  setCoinCounter,
}: CoinProps) {
  const [coinPositionY, setCoinPositionY] = useState(-100);
  const [isHidden, setIsHidden] = useState(false);
  const CoinRef = useRef<HTMLDivElement>(null);

  const getCoinPositionX = () => {
    if (position === 0) return Left;
    if (position === 2) return Right;
    return Centered;
  };

  const animationDuration = Math.round(speed / 800);

  const collectCoin = () => {
    setTimeout(() => {
      setIsHidden(true);
      setCoinCounter((prev) => prev + 1);
    }, 0);
  };

  useEffect(() => {
    const height = window.innerHeight;

    const interval = setInterval(() => {
      setCoinPositionY((prevPosition) => {
        if (prevPosition > height + 100) return prevPosition;
        return prevPosition + 1;
      });

      if (CoinRef.current?.offsetTop) {
        const isCollactable =
          height - CoinRef.current.offsetTop < 200 &&
          height - CoinRef.current.offsetTop > 100 &&
          position === playerPosition;

        if (isCollactable) {
          collectCoin();
          clearInterval(interval);
          return;
        }
      }
    }, animationDuration);

    return () => clearInterval(interval);
  }, [playerPosition]);

  return (
    <Wrapper className={getCoinPositionX()} onClick={(e) => e.preventDefault()}>
      <Container
        style={{ top: coinPositionY }}
        ref={CoinRef}
        className={isHidden ? Hidden : ""}
        onSelect={() => false}
      >
        <Image src={CoinImage} />
      </Container>
    </Wrapper>
  );
}
