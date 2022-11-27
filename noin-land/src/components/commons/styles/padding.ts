import styled from "styled-components";

export const StyledPadding = styled.div<{ height: number; width: number }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
