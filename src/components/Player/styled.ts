import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Container = styled.div`
  width: 160px;
  height: 200px;
  object-fit: cover;
  pointer-events: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: all 0.2s;
`;
