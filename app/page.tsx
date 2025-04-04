// AppInfo.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const AppInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍔 b-order 사용자용 앱</Text>
      <Text style={styles.subtitle}>비콘 기반 자동 주문 시스템</Text>
    </View>
  );
};

export default AppInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
});
