import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CombinedComponent() {
  return (
    <View style={styles.screen}>
      {/* กล่องโรงแรม */}
      <View style={styles.hotelCard}>
        <Text style={styles.title}>Hilton San Francisco</Text>
        <View style={styles.stars}>
          {Array.from({ length: 5 }).map((_, index) => (
            <FontAwesome key={index} name="star" size={20} color="gold" />
          ))}
        </View>
        <Text style={styles.description}>
          Facilities provided may range from a modest quality{'\n'}
          mattress in a small room to large suites
        </Text>
      </View>
        </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hotelCard: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  overlapContainer: {
    backgroundColor: '#777',
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  box1: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  box2: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    zIndex: 2,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
