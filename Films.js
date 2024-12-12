import React, {useState} from "react";
import { View, Text, TextInput } from "react-native";
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
      <View style={styles.container}>
        <Input label="Basic Text Input:" />
        <Input label="Password Input:" secureTextEntry />
        <Input label="Return Key:" returnKeyType="search" />
        <Input label="Placeholder Text:" placeholder="Search" />
        <Input
          label="Input Events:"
          onChangeText={(e) => {
            setChangedText(e);
          }}
          onSubmitEditing={(e) => {
            setSubmittedText(e.nativeEvent.text);
          }}
          onFocus={() => {
            setChangedText("");
            setSubmittedText("");
          }}
        />
        <Text>Changed: {changedText}</Text>
        <Text>Submitted: {submittedText}</Text>
      </View>
    );
  }
  
}