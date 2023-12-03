import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: all 0.2s;
  pointer-events: none;
`;

export const Container = styled.div`
  width: 50px;
  height: 50px;
  object-fit: cover;
  position: absolute;
  pointer-events: none;
  transition: opacity 0.5s;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
`;

export const Left = css`
  transform: translateX(-40%);
`;

export const Right = css`
  transform: translateX(+40%);
`;

export const Centered = css`
  transform: translateX(0);
`;

export const Hidden = css`
  opacity: 0;
`;
