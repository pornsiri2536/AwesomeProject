import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface MyIconProps {
  name: string;
  size: number;
  color: string;
  title: string;
  onPress?: () => void;
}

export default function MyIcon(props: MyIconProps) {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ flex: 1, alignItems: "center" }}>
      <FontAwesome name={props.name as any} size={props.size} color={props.color} />
      <Text style={{ fontSize: 12, marginTop: 5 }}>{props.title}</Text>
    </TouchableOpacity>
  );
}
