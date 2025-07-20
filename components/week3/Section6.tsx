import React from "react";
import { Image, Text, View } from "react-native";

export default function Card() {
  return (
    <View style={{ padding: 20 }}>
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 / 2 }}
          source={require("@/assets/week3/map.jpg")}
        />
      </View>
    </View>
  );
}