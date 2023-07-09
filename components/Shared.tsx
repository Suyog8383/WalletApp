import styled from "styled-components/native";
import { Colors } from "./Colors";
import { Dimensions } from "react-native";
export const Container = styled.View`
  flex: 1;
  align-item: center;
  background-color: ${Colors.white};
`;

export const ScreenHeight = Dimensions.get("screen").height;
export const ScreenWidth = Dimensions.get("screen").width;
