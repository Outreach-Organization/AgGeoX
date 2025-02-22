import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "rgb(125 211 252)"};
  color: ${(p) => (p.color ? "#2E186A" : "#000000")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #38bdf8;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(125 211 252 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(56, 141, 248);
    background-color: rgb(56, 141, 248);
  }
`;
