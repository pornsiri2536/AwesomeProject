import { Link, router } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen. Chavalit</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/flexbox/ex01")}>
        <Text style={styles.buttonText}>ไปหน้า ex01</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/flexbox/ex02")}>
        <Text style={styles.buttonText}>ไปหน้า ex02</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/flexbox/ex03")}>
        <Text style={styles.buttonText}>ไปหน้า ex03</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/flexbox/ex04")}>
        <Text style={styles.buttonText}>ไปหน้า ex04</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/flexbox/ex05")}>
        <Text style={styles.buttonText}>ไปหน้า ex05</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/flexbox/ex06")}>
        <Text style={styles.buttonText}>ไปหน้า ex06</Text>
      </TouchableOpacity>

      <Link href="/flexbox/ex07" style={styles.link}>
        <Text style={styles.linkText}>ไปหน้า ex07</Text>
      </Link>

      <Link href="/flexbox/ex08" style={styles.link}>
        <Text style={styles.linkText}>ไปหน้า ex08</Text>
      </Link>

      <Link href="/flexbox/ex09" style={styles.link}>
        <Text style={styles.linkText}>ไปหน้า ex09</Text>
      </Link>

      <Link href="/flexbox/ex10" style={styles.link}>
        <Text style={styles.linkText}>ไปหน้า ex10</Text>
      </Link>

      <Link href="/flexbox/ex11" style={styles.link}>
        <Text style={styles.linkText}>ไปหน้า ex11</Text>
      </Link>

      <Link href="/flexbox/ex12" style={styles.link}>
        <Text style={styles.linkText}>ไปหน้า ex12</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 24,
    padding: 12,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    marginTop: 24,
    padding: 12,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },
  linkText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
