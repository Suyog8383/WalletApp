//import liraries
import React, { Component, FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container } from "../components/Shared";
import { styled } from "styled-components/native";
import { Colors } from "../components/Colors";
import { StatusBar } from "expo-status-bar";

const HomeContainer = styled(Container)`
  background-color: ${Colors.greylight};
  width: 100%;
  flex: 1;
`;
// create a component
const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar style="dark" />
    </HomeContainer>
  );
};

export default Home;
