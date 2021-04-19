import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const TodoList = () => {
	const [title, setTitle] = useState("TodoList");
	return (
		<View>
			<Text>{title}</Text>
			<Button
				title=" change me !"
				onPress={() => setTitle("TodoList has been changed")}
			/>
		</View>
	);
};

export default TodoList;
