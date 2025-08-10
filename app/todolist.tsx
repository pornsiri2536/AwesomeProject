import { getData, storeData } from "@/utils/storage";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";

export default function TodoList() {
  const [todos, setTodos] = useState<any[]>([]);

  const onLoad = async () => {
    let data = await getData("todos");
    if (data) {
      setTodos(data);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    storeData("todos", todos);
  }, [todos]);

  const onCreate = () => {
    let new_data = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      title: "",
      completed: false,
    };
    setTodos([...todos, new_data]);
  };

  const onUpdate = (new_title: string, id: string) => {
    let t = [...todos];
    let index = t.findIndex((item) => item.id == id);
    if (index !== -1) {
      t[index].title = new_title;
      setTodos(t);
    }
  };

  const onCheck = (id: string) => {
    let t = [...todos];
    let index = t.findIndex((item) => item.id == id);
    if (index !== -1) {
      t[index].completed = !t[index].completed;
      setTodos(t);
    }
  };

  const onDelete = (id: string) => {
    let t = todos.filter((item) => item.id !== id);
    setTodos(t);
  };

  const TodoItem = ({ item }: any) => {
    const [text, setText] = useState(item.title);

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
        }}
      >
        {/* ปุ่ม Check */}
        <TouchableOpacity onPress={() => onCheck(item.id)}>
          <FontAwesome
            name={item.completed ? "check-square" : "square-o"}
            size={24}
            color={item.completed ? "green" : "gray"}
          />
        </TouchableOpacity>

        {/* กล่องแก้ไขข้อความ */}
        <TextInput
          style={{
            flex: 1,
            marginHorizontal: 10,
            textDecorationLine: item.completed ? "line-through" : "none",
            color: item.completed ? "gray" : "black",
          }}
          value={text}
          onChangeText={setText}
          onEndEditing={() => onUpdate(text, item.id)}
          placeholder="พิมพ์รายการ..."
        />

        {/* ปุ่มลบ */}
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <FontAwesome name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 15 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItem item={item} />}
      />
      {/* ปุ่มเพิ่มรายการ */}
      <TouchableOpacity
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25,
          position: "absolute",
          right: 10,
          bottom: 10,
        }}
        onPress={onCreate}
      >
        <FontAwesome name="plus" size={26} />
      </TouchableOpacity>
    </View>
  );
}
