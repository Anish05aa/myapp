import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Card1 from "../card/card1";

export default function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => {
                // Select a random subset of products
                const shuffled = data.products.sort(() => 0.5 - Math.random());
                const selectedProducts = shuffled.slice(0, 10); // Get 10 random products
                setProducts(selectedProducts);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar hidden={false} />
            <ScrollView style={styles.scrollView} contentContainerStyle={{ alignItems: 'center' }}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <Card1 key={product.id} product={product} />
                    ))
                ) : (
                    <Text>Loading products...</Text>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    scrollView: {
        backgroundColor: 	'#C4DCE3',
        flex: 1,
        flexGrow: 1,
        width: '100%',
    },
});
