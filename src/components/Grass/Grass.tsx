import { Block } from "#components/Block/Block";
import { useEffect, useRef, useState } from "react";

export function Grass() {
  const [blockArray, setBlockArray] = useState([
    {
      type: "block",
      id: 0,
    },
  ]);
  const nextBlockId = useRef(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlockArray((prevBlockArray) => {
        const newBlock = {
          type: "block",
          id: nextBlockId.current,
        };

        nextBlockId.current += 1;

        if (prevBlockArray.length >= 11) {
          return [...prevBlockArray.slice(-10), newBlock];
        }

        return [...prevBlockArray, newBlock];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {blockArray.map((block) => (
        <Block key={block.id}></Block>
      ))}
      <Block startOffset={0} />
      <Block startOffset={300} />
      <Block startOffset={600} />
      <Block startOffset={900} />
      <Block startOffset={1200} />
    </>
  );
}
