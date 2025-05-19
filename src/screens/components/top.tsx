import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";


import logo from "../../assets/logo.png";

export default function top() {
    return <View style={styles.top}>
        <Image source={logo} style={styles.Image}/>
        <Text style={styles.welcome}>olá reynaldo</Text>
        <Text style={styles.caption}>encontre os melhores produtores</Text>
    </View>
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    Image: {
        width: 70,
        height: 30,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 16,
        lineHeight: 26,
    },
})