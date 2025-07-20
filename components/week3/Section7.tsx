import React from "react";
import { Image, Text, View } from "react-native";

export default function Card() {
  return (
    <View style={{ padding: 20 }}>
      {/* หัวข้อ Room Type */}
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Room Type</Text>
      </View>

      {/* บล็อกแสดงข้อมูลห้อง */}
      <View style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: 10, padding: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}>
        {/* รูปห้อง */}
        <Image
          source={require("@/assets/week3/room-1.jpg")} // เปลี่ยนชื่อไฟล์ตามที่มี
          style={{ width: 100, height: 100, borderRadius: 10 }}
        />

        {/* ข้อมูลห้อง */}
        <View style={{ paddingLeft: 10, justifyContent: "center", flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Standard Twin Room
          </Text>
          <Text style={{ fontSize: 16, color: "#FF4500", fontWeight: "bold" }}>
            $399.99
          </Text>
          <Text style={{ color: "#00BFFF" }}>
            Hurry Up! This is your last room!
          </Text>
        </View>
      </View>
    </View>
  );
}