import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { totalAmount } from "./recordsData";

const TotalDisplay = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Balance:{" "}
        <Text style={[styles.text, { color: totalAmount < 0 ? "#FF6B6B" : "#4CAF50" }]}>
          ${totalAmount.toFixed(2)}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#3E364A",
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 64,
    color: "#FFFFFF",
    fontFamily: "VT323, serif",
  },
});

export default TotalDisplay;
