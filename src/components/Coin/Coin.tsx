import { Image, Centered, Right, Left, Container, Wrapper } from "./styled";
import CoinImage from "#assets/boycoin.png";
import { Position } from "#types/game";
import { useRef } from "react";

type CoinProps = {
  position: Position;
  speed: number;
  timeToCollapse: number;
  playerPosition: Position;
};

export function Coin({
  // timeToCollapse,
  // playerPosition,
  position,
  speed,
}: CoinProps) {
  const CoinRef = useRef<HTMLDivElement>(null);

  const getCoinPositionStyles = () => {
    if (position === 0) return Left;
    if (position === 2) return Right;
    return Centered;
  };

  const animationDuration = `${speed}ms`;

  CoinRef.current?.getBoundingClientRect();

  // useEffect(() => {
  //   const spawnTime = Date.now();
  // }, []);

  return (
    <Wrapper className={getCoinPositionStyles()} ref={CoinRef}>
      <Container style={{ animationDuration: animationDuration }}>
        <Image src={CoinImage} />
      </Container>
    </Wrapper>
  );
}
