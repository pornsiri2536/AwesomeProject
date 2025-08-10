import React from "react";
import { ScrollView, View } from "react-native";

import { default as Card, default as Hotel } from "@/components/week3/Card";
import Menu from "@/components/week3/Menu";
import Signup from "@/components/week3/Signup";

export default function Travel() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingTop: 50 }}>
        {/* <Text> Week 3 </Text> */}
        <Menu />
        <Card />
        <Hotel />
        <Signup />
      </View>
    </ScrollView>
  );
}