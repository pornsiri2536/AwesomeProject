import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MyComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Price Section */}
        <View style={styles.priceSection}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>$399.99</Text>
          <Text style={styles.priceSub}>AVG/Night</Text>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 8,
  },
  priceSection: {
    flexDirection: 'column',
  },
  priceLabel: {
    fontSize: 12,
    color: '#444',
  },
  priceValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E76F51',
  },
  priceSub: {
    fontSize: 12,
    color: '#444',
  },
  button: {
    backgroundColor: '#E76F51',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
