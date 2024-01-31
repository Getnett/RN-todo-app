import { FC, useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface AddToDoModalProps {
  handleAddToDo: (text: string) => void;
  openModal: boolean;
  closeModal: VoidFunction;
}
const AddToDoModal: FC<AddToDoModalProps> = ({
  handleAddToDo,
  openModal,
  closeModal,
}) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  const addToDo = () => {
    if (inputText) {
      handleAddToDo(inputText);
      setInputText("");
      closeModal();
    }
  };
  return (
    <Modal visible={openModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Type here"
          value={inputText}
          onChangeText={handleInputChange}
        />
        <View style={styles.btnAddContainer}>
          <View style={styles.btnWrapper}>
            <Button title="Add" onPress={addToDo} />
          </View>
          <View>
            <Button title="cancel" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddToDoModal;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#311b6b",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    padding: 16,
    width: "100%",
    color: "#120034",
    borderRadius: 6,
  },
  btnAddContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  btnWrapper: {
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
