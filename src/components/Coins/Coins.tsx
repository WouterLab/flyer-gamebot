import { Coin } from "#components/Coin/Coin";
import {
  memo,
  useEffect,
  useRef,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { Wrapper } from "./styled";
import { CoinType, Position } from "#types/game";

export const Coins = memo(function Coins({
  playerPosition,
  setCoinCounter,
}: {
  playerPosition: Position;
  setCoinCounter: Dispatch<SetStateAction<number>>;
}) {
  const [coinsArray, setCoinsArray] = useState<CoinType[]>([]);
  const [spawnTime, setSpawnTime] = useState(4000);
  const nextCoinId = useRef(1);
  const currentSpeed = useRef(8000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoinsArray((prevCoinsArray) => {
        const newCoin: CoinType = {
          type: "coin",
          id: nextCoinId.current,
          position: Math.round(Math.random() * 2),
          speed: currentSpeed.current,
        };

        nextCoinId.current += 1;

        setSpawnTime(currentSpeed.current / 2);

        if (currentSpeed.current > 1000) currentSpeed.current -= 100;

        if (prevCoinsArray.length >= 20) {
          return [...prevCoinsArray.slice(-6), newCoin];
        }

        return [...prevCoinsArray, newCoin];
      });
    }, spawnTime);

    return () => clearInterval(interval);
  }, [spawnTime]);

  return (
    <Wrapper>
      {coinsArray.map((coin) => (
        <Coin
          key={coin.id}
          position={coin.position}
          speed={coin.speed}
          playerPosition={playerPosition}
          setCoinCounter={setCoinCounter}
        />
      ))}
    </Wrapper>
  );
});
