import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import AddToDoModal from "./components/AddToDoModal";

const COLORS = ["blue", "red", "brown", "pink"];
export default function App() {
  // 001
  // const [color, setColor] = useState("black");
  // const handleButtonPress = () => {
  //   const selectedColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  //   setColor(selectedColor);
  // };
  const [listOfTodos, setListOfTodos] = useState<
    { id: string; todo: string }[]
  >([]);

  const [openModal, setOpenModal] = useState(false);

  const handleAddToDo = (inputText: string) => {
    if (inputText) {
      setListOfTodos([
        ...listOfTodos,
        { id: `${inputText}-${Math.random()}`, todo: inputText },
      ]);
    }
  };

  const removeToDo = (id: string) => {
    setListOfTodos(listOfTodos.filter((ele) => ele.id !== id));
  };

  return (
    <View style={styles.container}>
      <Button
        title="Open Modal to add todos"
        onPress={() => setOpenModal(true)}
      />
      {openModal && (
        <AddToDoModal
          handleAddToDo={handleAddToDo}
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />
      )}
      <View style={styles.todosContainer}>
        <FlatList
          data={listOfTodos}
          renderItem={({ item }) => {
            return (
              <Pressable
                android_ripple={{ color: "red" }}
                onPress={() => removeToDo(item.id)}
              >
                <View style={styles.todoItem}>
                  <Text style={styles.todoItemText}>{item.todo}</Text>
                </View>
              </Pressable>
            );
          }}
          keyExtractor={(item, _index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
      {/* 
         // 001çç
      <Text style={{ ...styles.text, color }}>
        Open up App.tsx to start working on your app!
      </Text>
      <View style={styles.btnContainer}>
        <Button
          title="Change text color"
          color="black"
          onPress={handleButtonPress}
        />
      </View> 
      
      */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 64,
    marginTop: 0,
    alignItems: "center",
  },
  // text: {
  //   color: "green",
  //   fontSize: 32,
  //   marginBottom: 16,
  // },

  btnContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 8,
  },
  todosContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 16,
    width: "100%",
  },
  todoItem: {
    flex: 1,
    marginRight: 8,
    backgroundColor: "#b0e0e6",
    padding: 8,
    marginBottom: 24,
    borderRadius: 8,
  },
  todoItemText: {
    color: "white",
  },
});
