import styled, { keyframes } from "styled-components";
import { Counter } from "../../features/counter/Counter";
import logo from "../../logo.svg";

const CounterApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const CounterAppHeader = styled.header`
  height: 40vmin;
`;
const logoFloat = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;
const Logo = styled.img`
  height: 100%;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoFloat} infinite 3s ease-in-out;
  }
`;

const CounterView = () => {
  return (
    <CounterApp>
      <CounterAppHeader>
        <Logo src={logo} alt="logo" />
      </CounterAppHeader>
      <Counter />
    </CounterApp>
  );
};

export default CounterView;
