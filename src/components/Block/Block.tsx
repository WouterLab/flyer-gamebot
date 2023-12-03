import GrassImage from "#assets/grass.png";
import { Image, Wrapper } from "./styled";
import { useState, useEffect, useRef } from "react";

export function Block({ startOffset = -300 }: { startOffset?: number }) {
  const [blockPositionY, setBlockPositionY] = useState(startOffset);
  const BlockRef = useRef<HTMLDivElement>(null);

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

  return (
    <Wrapper ref={BlockRef} style={{ top: blockPositionY }}>
      <Image src={GrassImage} />
      <Image src={GrassImage} />
    </Wrapper>
  );
}
