import React from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("screen").width;

export default function TourFlatList(props:any) {
  const tours = [
    { id: "1", title: "Tour in London", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
    { id: "2", title: "Tour in Paris", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg" }
  ];

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 4 }}>Tour with FlatList</Text>
      <Text style={{ color: "grey", marginBottom: 10 }}>Let find out what most interesting things</Text>

      <FlatList
        horizontal={true}
        data={tours}
        renderItem={({ item, index }) => {
          console.log(item, index, item.uri);
          return (
            <View style={{ marginRight: 10, position: 'relative' }}>
              <Image
                style={{
                  width: screenWidth / 2 - 25,
                  height: 150,
                  borderRadius: 10,
                }}
                source={{ uri: item.uri }}
              />
              <View style={{
                position: 'absolute',
                bottom: 10,
                left: 10,
                backgroundColor: 'rgba(0,0,0,0.6)',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
              }}>
                <Text style={{ fontSize: 14, color: '#fff' }}>{item.title}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
