import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import FlexboxMenu from "@/components/FlexboxMenu";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text>Edit app/index.tsx to edit this screen.</Text>

        <Text>Flexbox Menu</Text>
        <FlexboxMenu />

        <Link href="/test-components" style={styles.link}>
          <Text style={styles.linkText}>Test Components</Text>
        </Link>
        <Link href="/test-greeting" style={styles.link}>
          <Text style={styles.linkText}>Test Greeting</Text>
        </Link>
        <Link href="/travel" style={styles.link}>
          <Text style={styles.linkText}>Travel</Text>
        </Link>
        <Link href="/resort" style={styles.link}>
          <Text style={styles.linkText}>Resort</Text>
        </Link>
        <Link href="/health" style={styles.link}>
          <Text style={styles.linkText}>Health</Text>
        </Link>
        <Link href="/home" style={styles.link}>
          <Text style={styles.linkText}>Home</Text>
        </Link>
        <Link href="/chart" style={styles.link}>
          <Text style={styles.linkText}>Chart</Text>
        </Link>
        <Link href="/your-health" style={styles.link}>
          <Text style={styles.linkText}>Your Health</Text>
        </Link>
        <Link href="/todolist" style={styles.link}>
          <Text style={styles.linkText}>Todo List</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    alignItems: "center",
  },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    minWidth: 200,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

