import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Container } from "../components/Shared";
import { Colors } from "../components/Colors";

const WelcomeContainer = styled(Container)`
  background-color: ${Colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image`
width:100%,
height:100%,
resize-mode:stretch
`;

const BottomSection = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
`;

// Image
import background from "./../assets/bgs/background_v1.png";

const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection></BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
