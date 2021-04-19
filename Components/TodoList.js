import React, { useState } from "react";
import { Text, View, Button } from "react-native";

import Todo from "./Todo";

const TodoList = () => {
	const [title, setTitle] = useState("TodoList");
	return (
		<View>
			<Text>{title}</Text>
			<Todo name={"learn react"} />
			<Todo name={"learn react natie"} />
			<Button
				title="change state !"
				onPress={() => setTitle("state changed")}
				color="black"
			/>
		</View>
	);
};

export default TodoList;
