import { FunctionComponent } from "react";
import styled from "styled-components/native";

//colors
import { Colors } from "../Colors";

//components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import Profile from "../Header/Profile";
import { ScreenWidth } from "../Shared";

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0;
`;

//types
import { SendMoneyProps } from "./type";
import { Alert } from "react-native";

const SendMoneyItems: FunctionComponent<SendMoneyProps> = (props) => {
  return (
    <SendMoneyItemContainer
      underlayColor={Colors.secondary}
      style={{ backgroundColor: props.background }}
      onPress={() => {
        alert("Send Money");
      }}
    >
      <>
        <Profile img={props.img} imgConatinerStyle={{ marginBottom: 10 }} />
        <SmallText
          textStyles={{ textAlign: "left", color: Colors.white, fontSize: 12 }}
        >
          {props.name}
        </SmallText>
        <RegularText
          textStyles={{ color: Colors.white, textAlign: "left", fontSize: 13 }}
        >
          {props.amount}
        </RegularText>
      </>
    </SendMoneyItemContainer>
  );
};
export default SendMoneyItems;
