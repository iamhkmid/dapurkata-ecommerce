import styled, { css } from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: fit-content;
  user-select: none;
  cursor: pointer;
`;

export const TextLabel = styled.span`
  padding-left: 0.5rem;
  color: ${({ theme }) => theme.input.label};
  font-size: 0.9rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  color: ${({ theme }) => theme.button.primary.color};
  > svg {
    stroke-width: 2;
    height: 0.7rem;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
type TStyledCheckbox = {
  checked: boolean;
};
export const StyledCheckbox = styled.div<TStyledCheckbox>`
  display: flex;
  align-items: center;
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid ${({ theme }) => theme.input.border};
  ${(props) =>
    props.checked
      ? css`
          background: ${({ theme }) => theme.button.primary.background};
          border: 1px solid transparent;
        `
      : css`
          background: ${({ theme }) => theme.input.background};
        `};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.input.focus.border};
  }

  ${IconWrapper} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
