import React from "react";
import { View, Text } from "react-native";
import {useSwapi} from "react-swapi";

export default function Planets() {
  const {data, error, isValidating,} = useSwapi("planets");

  if (error) return <Text>Failed to load data</Text>;
  if (!data) return <Text>No data...</Text>;
  if (isValidating) return <Text>Loading...</Text>;

  return (
    <List
      data={mapItems(data)}
      asc={asc}
      onFilter={(text) => {
        setFilter(text);
      }}
      onSort={() => {
        setAsc(!asc);
      }}
    />
  );
}