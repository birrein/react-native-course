import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return <View>
    <Button title="+" onPress={() => {
      setCounter(counter + 1);
    }} />
    <Button title="-" onPress={() => {
      setCounter(counter - 1);
    }} />
    <Text>Valor: {counter}</Text>
  </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;