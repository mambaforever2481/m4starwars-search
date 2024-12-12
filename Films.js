import React, {useState} from "react";
import { View, Text, TextInput } from "react-native";
import Animated, {SlideInLeft, SlideOutRight} from "react-native-reanimated";
import {useSwapi} from "react-swapi";
import Swipeable from "./Swipeable";


export default function Films({ navigation }) {
  
  const {data, error, isValidating,} = useSwapi("films");

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