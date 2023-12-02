import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: all 0.2s;
`;

export const Container = styled.div`
  width: 50px;
  height: 50px;
  object-fit: cover;
  animation: drop 6s ease-in;
  position: absolute;
  top: -500px;

  @keyframes drop {
    0% {
      top: -100px;
    }

    100% {
      top: 100vh;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
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
