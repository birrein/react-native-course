import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const ColorCounter = ({ color }) => {
  return <View>
    <Text>{color}</Text>
    <Button title={`Aumentar ${color}`} />
    <Button title={"Disminuir " + color} />
  </View>
};

const styles = StyleSheet.create({});

export default ColorCounter;