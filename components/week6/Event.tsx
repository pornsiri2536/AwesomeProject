import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const events = [
  {
    id: "1",
    title: "Truckfighters: Performing",
    uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg",
    month: "DEC",
    date: "30",
    datetime: "Thu, DEC 30, 09.00 am",
    place: "London",
  },
  {
    id: "2",
    title: "Paris Motor Show",
    uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg",
    month: "DEC",
    date: "31",
    datetime: "Thu, DEC 31, 09.00 am",
    place: "Paris",
  },
];

export default function Event(props: any) {
  return (
    <View style={[props.style, { backgroundColor: "#fcfbe3", padding: 16 }]}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
        Up Coming Events
      </Text>
      <Text style={{ fontSize: 12, color: "grey", marginBottom: 16 }}>
        What's the Worst That Could Happend
      </Text>

      <FlatList
        data={events}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginRight: 16 }}>
            {/* รูปภาพ */}
            <Image
              source={{ uri: item.uri }}
              style={{
                width: 200,
                height: 120,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            {/* กล่องรายละเอียด */}
            <View
              style={{
                flexDirection: "row",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderWidth: 1,
                borderColor: "#ccc",
                backgroundColor: "#fff",
              }}
            >
              {/* วันที่/เดือน */}
              <View style={{ padding: 10, alignItems: "center" }}>
                <Text style={{ fontSize: 12, color: "red" }}>{item.month}</Text>
                <Text style={{ fontSize: 18, color: "red" }}>{item.date}</Text>
              </View>
              {/* ข้อความ */}
              <View style={{ padding: 10, flex: 1 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    marginBottom: 4,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 12, color: "#888" }}>
                  {item.datetime}
                </Text>
                <Text style={{ fontSize: 12, color: "#888" }}>{item.place}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
