import React from "react";
import { View, Text } from "react-native";
import {useSwapi} from "react-swapi";
import Swipeable from "./Swipeable";

export default function Spaceships({ navigation }) {
  const {data, error, isValidating,} = useSwapi("spaceships");

  if (error) return <Text>Failed to load data</Text>;
  if (!data) return <Text>No data...</Text>;
  if (isValidating) return <Text>Loading...</Text>;

  function Input(props) {
    return (
      <View style={styles.textInputContainer}>
        <ScrollView style={styles.scroll}>
        <Text style={styles.textInputLabel}>{props.label}</Text>
        <TextInput style={styles.textInput} {...props} />
        </ScrollView>
      </View>
      
    );
  }
  
  Input.propTypes = {
    label: PropTypes.string,
  };
  
  function CollectTextInput() {
    const [changedText, setChangedText] = useState("");
    const [submittedText, setSubmittedText] = useState("");
  
    return (
      <Animated.View entering={SlideInLeft} exiting={SlideOutRight}>
      <TouchableOpacity onPress={() => onPress(id)} style={styles.todoItem}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
    );
  }
  
}