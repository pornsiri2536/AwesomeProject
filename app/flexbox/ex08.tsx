import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Ex08() {
  return (
    <View style={styles.container}>
      {/* กล่องซ้าย - ชิดซ้าย */}
      <View style={[styles.box, styles.leftBox, { backgroundColor: '#50E3C2' }]} />

      {/* กล่องกลาง - อยู่ตรงกลาง */}
      <View style={[styles.box, { backgroundColor: '#4A90E2' }]} />

      {/* กล่องขวา - ชิดขวา */}
      <View style={[styles.box, styles.rightBox, { backgroundColor: '#9013FE' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // ตรงกลางแนวตั้ง
    alignItems: 'center',     // ให้กล่องกลางอยู่กึ่งกลางแนวนอน
  },
  box: {
    width: 100,
    height: 100,
  },
  leftBox: {
    position: 'absolute',
    left: 0,
  },
  rightBox: {
    position: 'absolute',
    right: 0,
  },
});
