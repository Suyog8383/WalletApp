import { FunctionComponent } from "react";
import styled from "styled-components/native";

//colors
import { Colors } from "../Colors";

const StyledText = styled.Text`
  font-size: 37px;
  color: ${Colors.white};
  text-align: left;
  font-family: lato-Bold;
`;

import { TextProps } from "./types";

const BigText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};
export default BigText;
