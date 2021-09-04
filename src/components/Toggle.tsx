import { useContext } from "react";
import styled from "styled-components";
import { AppThemeContext } from "../theme";

interface WrapperProps {
  width: string;
  height: string;
}

const ToggleWrapper = styled.div<WrapperProps>`
  input[type="checkbox"] {
    width: 0;
    height: 0;
    visibility: hidden;
  }
  label {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: block;
    background-color: ${({ theme }) => theme.primary.backgroundColor};
    border-radius: 0.9rem;
    position: relative;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 0 0 0.2rem ${({ theme }) => theme.primary.color};
  }

  label::after {
    content: "";
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    position: absolute;
    border-radius: 50%;
    top: -0.1rem;
    left: 0.1rem;
    transition: 0.5s;
    border: ${({ theme }) => theme.primary.color} solid 2px;
    box-sizing: border-box;
  }

  input:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  input:checked + label {
    background-color: ${({ theme }) => theme.primary.color};
  }

  label:active:after {
    width: 1rem;
  }
`;

export const Toggle = () => {
  const { theme, toggleTheme } = useContext(AppThemeContext);
  return (
    <ToggleWrapper width="3rem" height="1.8rem">
      <input
        type="checkbox"
        name="switch"
        id="switch"
        onClick={toggleTheme}
        defaultChecked={theme === "dark"}
      />
      <label htmlFor="switch"></label>
    </ToggleWrapper>
  );
};
