import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Card1 = ({ product }) => {
    const imgurl = product.images[0];
    return (
        <View style={[styles.container]}>
            <View style={styles.imgContainer}>
                <Image
                    source={{ uri: imgurl }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <Text style={styles.rating}>{product.rating}☆</Text>

                <TouchableOpacity onPress={() => { }} style={styles.btnContainer}>
                    <Text style={styles.btnText}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AFEEEE',
        minHeight: 250,
        width: '90%',
        padding: 7,
        marginVertical: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    imgContainer: {
        width: 200,
        height: 200,
        overflow: "hidden",
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    title: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 5,
        marginTop: 10,
        color: "#333",
    },
    price: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FF6347", // Example: Change price text color
    },
    rating: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#8A2BE2", // Example: Change rating text color
    },
    btnContainer: {
        backgroundColor: "#FFA500",
        padding: 10,
        borderRadius: 20,
        width: 150,
        alignItems: "center",
    },
    btnText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Card1;
