import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return <View>
    <Button title="Agregar color" onPress={() => {
      setColors([...colors, randomRgb()]);
    }} />
    <FlatList keyExtractor={item => item} data={colors} renderItem={({ item }) => {
      return <View style={{ width: 360, height: 100, backgroundColor: item }}></View>
    }} />
  </View>
};

const randomRgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;