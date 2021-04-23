import React, { useState } from "react";
import {
	Text,
	View,
	Button,
	StyleSheet,
	ScrollView,
	TextInput,
} from "react-native";

import Todo from "./Todo";

const TodoList = () => {
	const [title, setTitle] = useState("TodoList");
	return (
		<View style={{ width: "80%", marginBottom: 60 }}>
			<Text style={[styles.align, styles.font]}>{title}</Text>
			<ScrollView>
				<Todo name={"learn react"} />
				<Todo name={"learn react native"} />
			</ScrollView>
			<View>
				<TextInput style={[styles.input]} />
				<Button
					title="change state !"
					onPress={() => setTitle("add item")}
					color="black"
				/>
			</View>
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
	input: {
		borderRadius: 6,
		borderWidth: 1,
		marginBottom: 8,
		padding: 6,
	},
});

export default TodoList;
