import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 1059px) {
    display: block;
  }

  display: none;

  svg {
    fill: #38bdf8; /* Default fill color */
    transition: fill 0.3s ease; /* Smooth transition */
    cursor: pointer;
  }

  &:hover svg,
  &:active svg,
  &:focus svg {
    fill: #fff; /* Change fill color to white on hover */
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 1059px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: start;
  color: #fff;
  font-family: "Motiva Sans Light";
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #c7d2fe;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;
  text-shadow: 2px 2px 4px rgba(243, 114, 182, 0.3);

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #38bdf8;
  cursor: pointer;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
  }
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(125, 211, 252);
    text-shadow: 2px 2px 4px rgb(125, 211, 252, 0.5);
  }
`;
