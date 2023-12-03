import GrassImageLight from "#assets/grass_light.png";
import GrassImageDark from "#assets/grass_dark.png";
import { Image, Wrapper } from "./styled";
import { useState, useEffect, useRef } from "react";

const telegram = Telegram.WebApp;

export function Block({ startOffset = -300 }: { startOffset?: number }) {
  const [blockPositionY, setBlockPositionY] = useState(startOffset);
  const BlockRef = useRef<HTMLDivElement>(null);

  console.log(telegram.colorScheme);

  useEffect(() => {
    const height = window.innerHeight;

    const interval = setInterval(() => {
      setBlockPositionY((prevPosition) => {
        if (prevPosition > height + 300) return prevPosition;
        return prevPosition + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return telegram.colorScheme === "light" ? (
    <Wrapper ref={BlockRef} style={{ top: blockPositionY }}>
      <Image src={GrassImageLight} />
      <Image src={GrassImageLight} />
    </Wrapper>
  ) : (
    <Wrapper ref={BlockRef} style={{ top: blockPositionY }}>
      <Image src={GrassImageDark} />
      <Image src={GrassImageDark} />
    </Wrapper>
  );
}
