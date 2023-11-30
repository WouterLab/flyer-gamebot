import { Game } from "#components/Game";
import { useEffect } from "react";

const telegram = Telegram.WebApp;

export function App() {
  useEffect(() => {
    telegram.ready();
  }, []);

  return <Game />;
}
