import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import Todo from "./Todo";

const TodoList = () => {
	const [title, setTitle] = useState("TodoList");
	return (
		<View style={{ width: "80%", marginBottom: 60 }}>
			<Text style={[styles.align, styles.font]}>{title}</Text>
			<Todo name={"learn react"} />
			<Todo name={"learn react native"} />
			<Button
				title="change state !"
				onPress={() => setTitle("state changed")}
				color="black"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	align: {
		alignSelf: "center",
	},
	font: {
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default TodoList;
