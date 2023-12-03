import { Wrapper } from "./styled";

export function Counter({ count }: { count: number }) {
  return <Wrapper>{count}</Wrapper>;
}
