import { styled } from "styled-components/native";
import { FunctionComponent } from "react";

//icons
import { Ionicons } from "@expo/vector-icons";

//custom components
import { Colors } from "../Colors";

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

//types
import { TransactionAviProps } from "./types";

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
  return (
    <StyledView>
      <Ionicons name={props.icon} size={25} color={props.background} />
    </StyledView>
  );
};

export default TransactionAvi;
