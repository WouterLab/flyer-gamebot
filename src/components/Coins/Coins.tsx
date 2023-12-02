import { Coin } from "#components/Coin/Coin";
import { memo, useEffect, useRef, useState } from "react";
import { Wrapper } from "./styled";
import { CoinType, Position } from "#types/game";

export const Coins = memo(function Coins({
  playerPosition,
}: {
  playerPosition: Position;
}) {
  const [coinsArray, setCoinsArray] = useState<CoinType[]>([]);
  const nextCoinId = useRef(1);
  const currentSpeed = useRef(8000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoinsArray((prevCoinsArray) => {
        const timeToCollapse = Math.round(
          (window.innerHeight - 200) /
            (window.innerHeight / currentSpeed.current),
        );

        const newCoin: CoinType = {
          type: "coin",
          id: nextCoinId.current,
          position: Math.round(Math.random() * 2),
          speed: currentSpeed.current,
          timeToCollapse: timeToCollapse,
        };

        nextCoinId.current += 1;

        if (currentSpeed.current > 700) currentSpeed.current -= 100;

        if (prevCoinsArray.length >= 6) {
          return [...prevCoinsArray.slice(-4), newCoin];
        }

        return [...prevCoinsArray, newCoin];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      {coinsArray.map((coin) => (
        <Coin
          key={coin.id}
          position={coin.position}
          speed={coin.speed}
          timeToCollapse={coin.timeToCollapse}
          playerPosition={playerPosition}
        />
      ))}
    </Wrapper>
  );
});
