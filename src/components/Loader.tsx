import styled, { keyframes } from "styled-components";
import { Container } from "./Container";
// const color = "#764ABC";
const size = "3.5em";
const lineWidth = ".3em";

const dualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  &:after {
    content: " ";
    display: block;
    width: ${size};
    height: ${size};
    margin: 8px;
    border-radius: 50%;
    border: ${lineWidth} solid ${({ theme }) => theme.primary.color};
    border-color: ${({ theme }) => theme.primary.color} transparent
      ${({ theme }) => theme.primary.color} transparent;

    animation: ${dualRing} 1.2s linear infinite;
  }
`;

export const AppLoader = () => (
  <Container>
    <Loader />
  </Container>
);
