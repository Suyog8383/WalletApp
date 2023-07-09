//import liraries
import React, { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";
import { Colors } from "../Colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { styled } from "styled-components/native";

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyle?: StyleProp<TextStyle>;
  subTextStyle?: StyleProp<TextStyle>;
}

// create a component
const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          {
            color: Colors.secondary,
            fontSize: 22,
          },
          props.mainTextStyle,
        ]}
      >
        {props.mainText}
      </RegularText>
      <SmallText textStyles={[{ color: Colors.greydark }, props.subTextStyle]}>
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default Greeting;
