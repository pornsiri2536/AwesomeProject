import React from 'react';
import { View } from 'react-native';

export default function ex06() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ backgroundColor: '#50E3C2', width: 100, height: 100 }} />
        <View style={{ backgroundColor: '#4A90E2', width: 100, height: 100 }} />
        <View style={{ backgroundColor: '#9013FE', width: 100, height: 100 }} />
      </View>
    </View>
  );
}