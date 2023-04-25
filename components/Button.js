import { primary } from "@/lib/colors";
import React from "react";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: white;
      color: #000;
    `}

  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 2px solid #fff;
    `}

  ${(props) =>
    props.black &&
    !props.outline &&
    css`
      background-color: #000;
      color: #fff;
    `}

  ${(props) =>
    props.black &&
    props.outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 2px solid #000;
    `}

${(props) =>
    props.primary &&
    !props.outline &&
    css`
      border: 2px solid ${primary};
      background-color: ${primary};
      color: #fff;
    `}
${(props) =>
    props.primary &&
    props.outline &&
    css`
      border: 2px solid ${primary};
      background-color: transparent;
      color: ${primary};
    `}

${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
`;

const StyledBtn = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledBtn {...rest}>{children}</StyledBtn>;
}
