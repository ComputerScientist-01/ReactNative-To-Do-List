import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const Todo = (props) => {
	return (
		<View>
			<Text>{props.name}</Text>
		</View>
	);
};

export default Todo;
