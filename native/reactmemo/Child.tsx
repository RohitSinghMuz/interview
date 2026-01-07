import React, { memo } from "react";
import { Text } from "react-native";

interface ChildProps {
  cityname: string;
}

const Child: React.FC<ChildProps> = ({ cityname }) => {
  console.log(cityname, "getcityname");

  return <Text style={{ fontSize: 22 }}>{cityname}</Text>;
};

export default memo(Child);
