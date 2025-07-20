import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewBox = () => {
  return (
    <View style={styles.container}>
      
      {/* วงกลมคะแนน */}
      <View style={styles.scoreCircle}>
        <Text style={styles.scoreText}>9.5</Text>
      </View>

      {/* ข้อความด้านขวา */}
      <View style={styles.textContainer}>
        <Text style={styles.excellentText}>Excellent</Text>
        <Text style={styles.reviewText}>See 801 reviews</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  scoreCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    marginLeft: 10,
  },
  excellentText: {
    fontSize: 16,
    fontWeight: '600',
  },
  reviewText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ReviewBox;
