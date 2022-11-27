import styled from "styled-components";

export const StyledPadding = styled.div<{ height?: number; width?: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
