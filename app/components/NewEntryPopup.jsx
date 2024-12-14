import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from "react-native";

const NewEntryPopup = ({ isOpen, onClose, addRecord }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleAddRecord = () => {
    if (!title || !amount || !category || !description) {
      alert("All fields are required!");
      return;
    }

    if (isNaN(amount)) {
      alert("Amount must be a valid number!");
      return;
    }

    addRecord({
      title,
      amount: parseFloat(amount),
      category,
      description,
    });

    setTitle("");
    setAmount("");
    setCategory("");
    setDescription("");
    onClose();
  };

  return (
    <Modal visible={isOpen} transparent={true} animationType="fade">
      <View style={styles.popupOverlay}>
        <View style={styles.popupContent}>
          <Text style={styles.header}>New Entry</Text>
          <View style={styles.formSection}>
            <Text style={styles.label}>Title:</Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              style={styles.inputField}
            />
            <Text style={styles.label}>Amount:</Text>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              style={styles.inputField}
            />
            <Text style={styles.label}>Category:</Text>
            <TextInput
              value={category}
              onChangeText={setCategory}
              style={styles.inputField}
            />
            <Text style={styles.label}>Description:</Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              style={styles.textareaField}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={handleAddRecord}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popupOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContent: {
    backgroundColor: "#3E364A",
    padding: 20,
    borderWidth: 5,
    borderColor: "#9083A5",
    borderRadius: 15,
    textAlign: "center",
    fontFamily: "VT323, serif",
    width: 500,
    maxWidth: "90%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Use shadow properties if on iOS
  },
  header: {
    marginBottom: 20,
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  formSection: {
    marginTop: 20,
  },
  label: {
    marginBottom: 10,
    color: "#fff",
    fontSize: 16,
  },
  inputField: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#9083A5",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 16,
    fontFamily: "VT323, serif",
  },
  textareaField: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#9083A5",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 16,
    fontFamily: "VT323, serif",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButton: {
    backgroundColor: "#AFE593",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#9083A5",
    flex: 1,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#FFC0CB",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#9083A5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFDED",
    fontFamily: "VT323, serif",
  },
});

export default NewEntryPopup;
