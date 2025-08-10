import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const mydata = [
  {
    id: '1',
    title: 'Trip to Paris',
    image:
      'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg',
  },
  {
    id: '2',
    title: 'Trip to Tokyo',
    image:
      'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg',
  },
  {
    id: '3',
    title: 'Trip to New York',
    image:
      'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg',
  },
];

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Tour</Text>
          <Text style={styles.subtitle}>Let find out what most interesting things</Text>

          {/* เพิ่ม FlatList ตามที่ร้องขอ */}
          <FlatList
            horizontal={true}
            data={mydata}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View style={{ marginRight: 10 }}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
            )}
            contentContainerStyle={styles.flatListContainer}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fffde7',
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  subtitle: {
    color: 'gray',
    marginTop: 4,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  flatListContainer: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  image: {
    width: 200,
    height: 130,
    borderRadius: 10,
  },
  itemTitle: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default App;
