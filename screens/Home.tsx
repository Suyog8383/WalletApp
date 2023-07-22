//import liraries
import { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { styled } from "styled-components/native";

//custom components
import { Container } from "../components/Shared";
import { Colors } from "../components/Colors";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TranscationSection";

const HomeContainer = styled(Container)`
  background-color: ${Colors.greylight};
  width: 100%;
  flex: 1;
`;

//card logo
import logo1 from "./../assets/cards/visa_white.png";
import logo2 from "./../assets/cards/mc.png";

// create a component
const Home: FunctionComponent = () => {
  const CardData = [
    {
      id: 1,
      accountNo: "2845758774",
      balance: 20000.15,
      alias: "work debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo: "2845758774",
      balance: 12000.01,
      alias: "Personal Prepaid",
      logo: logo2,
    },
    {
      id: 3,
      accountNo: "2845758774",
      balance: 5600.83,
      alias: "School Prepaid",
      logo: logo1,
    },
  ];
  const transactionData = [
    {
      id: 1,
      amount: "-$86.00",
      date: "14 Sep 2023",
      title: "Taxi",
      subTitle: "Uber Car",
      art: {
        background: Colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$286.00",
      date: "14 Sep 2023",
      title: "Shopping",
      subTitle: "Ali express",
      art: {
        background: Colors.primary,
        icon: "cart",
      },
    },
    {
      id: 3,
      amount: "-$586.00",
      date: "14 Aug 2023",
      title: "Travel",
      subTitle: "Emirates",
      art: {
        background: Colors.accent,
        icon: "airplane",
      },
    },
  ];
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={CardData} />
      <TransactionSection data={transactionData} />
    </HomeContainer>
  );
};

export default Home;
