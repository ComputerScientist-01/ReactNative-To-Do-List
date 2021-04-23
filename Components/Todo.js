import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const Todo = (props) => {
	return (
		<View style={[{ margin: 9 }, styles.item]}>
			<Text>{props.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderColor: "grey",
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: "whitesmoke",
		marginBottom: 9,
		padding: 8,
	},
});

export default Todo;
