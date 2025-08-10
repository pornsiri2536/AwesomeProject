import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HotelDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hotel Description</Text>
      <Text style={styles.description}>
        218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});

export default HotelDescription;
