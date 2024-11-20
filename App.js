import './gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Planets from "./Planets";
import Films from "./Films";
import Spaceships from "./Spaceships";
import React, {useEffect} from "react";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function App() {

useEffect(() => {
  getData();
},[]);
  
  const getData = () => {
    const URL = "https://swapi.tech/api/";

    fetch(URL).then(res =>{
      return res.json // convert to readable format
    }).then(data=> {
      console.log(data);
    })
  }
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Planets" component={Planets} />
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Spaceships" component={Spaceships} />
        </Tab.Navigator>
      )}

      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Planets" component={Planets} />
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Spaceships" component={Spaceships} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}