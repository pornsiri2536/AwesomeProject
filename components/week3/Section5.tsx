import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyIcon from "./MyIcon";
const iconData = [
  { name: 'wifi', label: 'wifi' },
  { name: 'coffee', label: 'coffee' },
  { name: 'bath', label: 'bath' },
  { name: 'car', label: 'car' },
  { name: 'paw', label: 'paw' },
];

const MyIconRow = () => {
  return (
    <View style={styles.container}>
      {iconData.map((item, index) => (
        <View key={index} style={styles.iconItem}>
          <MyIcon name={item.name} size={24} color="#4b9aaa" />
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  iconItem: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});

export default MyIconRow;

