import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GetStartedScreen = ({ onLogin, onSignup }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={{ uri: 'https://img.freepik.com/free-photo/front-view-cyber-monday-composition_23-2149055978.jpg?t=st=1720960209~exp=1720963809~hmac=132f2fe4c5ebaf3190bf351d39b59a95ffed8398095c3f6e6610071342ec7ba9&w=1060' }}
            >
                <Text style={styles.title}>Welcome to Speedy Cart</Text>
                <TouchableOpacity style={styles.button} onPress={onLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onSignup}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
        color: '#333', // Darker text color
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5, // Rounded corners
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default GetStartedScreen;
