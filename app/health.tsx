import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// 🔧 เพิ่มการ import component
import Bmi from "../components/week5/Bmi";         // ปรับ path ให้ตรงกับโครงสร้างจริง
import Heartbeat from "../components/week5/Heartbeat";

export default function Health() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lightblue",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Bmi />
      <Heartbeat />
    </View>
  );
}
