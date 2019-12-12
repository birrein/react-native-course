import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  return <View>
    <Text>Square Screen</Text>
    <ColorCounter color="Rojo" />
    <ColorCounter color="Verde" />
    <ColorCounter color="Azul" />
  </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;