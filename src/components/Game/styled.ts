import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Wrapper = styled.div`
  padding: 0 40px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  justify-content: center;
`;

export const Centered = css`
  transform: translateX(0);
`;

export const Left = css`
  transform: translateX(-40%);
`;

export const Right = css`
  transform: translateX(+40%);
`;

export const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: all 0.2s;
`;
