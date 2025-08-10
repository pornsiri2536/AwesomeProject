import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const reviews = [
  {
    id: '1',
    name: 'Grigoriy Kozhukhov',
    date: 'Jun 2018',
    rating: 4,
    title: 'Nice Place',
    comment: 'Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo',
    avatar: require('@/assets/week3/profile-3.jpg'), // ✅ ใช้ require() ถูกต้อง
  },
  {
    id: '2',
    name: 'Ea Tipene',
    date: 'Jun 2018',
    rating: 5,
    title: 'Great for families',
    comment: 'Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo',
    avatar: require('@/assets/week3/profile-4.jpg'), // ✅ เช่นเดียวกัน
  },
];

const RatingStars = ({ rating }:any) => (
  <View style={{ flexDirection: 'row' }}>
    {[...Array(5)].map((_, index) => (
      <Ionicons
        key={index}
        name={index < rating ? 'star' : 'star-outline'}
        size={16}
        color="#E76F51"
      />
    ))}
  </View>
);

export default function ReviewsScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#E76F51" />
        <Text style={styles.headerTitle}>Reviews</Text>
        <Text style={styles.replayText}>Replay</Text>
      </View>

      {/* Summary */}
      <View style={styles.summary}>
        <Text style={styles.score}>4.7</Text>
        <View style={{ marginLeft: 10 }}>
          <RatingStars rating={5} />
          <Text style={styles.totalRatings}>25 Ratings</Text>
        </View>
      </View>

      {/* Review List */}
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Image source={item.avatar} style={styles.avatar} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
                <RatingStars rating={item.rating} />
              </View>
            </View>
            <Text style={styles.reviewTitle}>{item.title}</Text>
            <Text style={styles.comment}>{item.comment}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  replayText: {
    color: '#E76F51',
    fontWeight: '500',
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  score: {
    fontSize: 48,
    color: '#E76F51',
    fontWeight: 'bold',
  },
  totalRatings: {
    marginTop: 5,
    fontSize: 12,
    color: '#888',
  },
  reviewCard: {
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  reviewTitle: {
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 2,
  },
  comment: {
    fontSize: 13,
    color: '#555',
  },
});
