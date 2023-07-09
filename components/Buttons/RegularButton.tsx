//import liraries
import React, { FunctionComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Colors } from "../Colors";
import RegularText from "../Texts/RegularText";
import { styled } from "styled-components/native";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${Colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

//types
interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyle?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

// create a component
const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RegularText textStyles={props.textStyle}>{props.children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
