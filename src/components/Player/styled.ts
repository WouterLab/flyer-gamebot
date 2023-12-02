import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Container = styled.div`
  width: 160px;
  height: 200px;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
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
