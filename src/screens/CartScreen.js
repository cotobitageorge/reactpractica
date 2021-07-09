import React from "react";
import {Button, StyleSheet, View} from "react-native";
import ImageDetail2 from "../components/ImageDetail2";

const CartScreen = ({navigation}) => {


    return (
        <View style={styles.container2}>
            <View style={styles.image}>
                <ImageDetail2 />
            </View>

            <View style={styles.container}>
                <Button title="Empty Cart" color="#FF1493"/>
                <Button title="Order" color="#5cd6b4"/>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    container2: {
        flex: 1,
    },
    image: {
        flex: 1,
        alignItems: 'center'
    },
});

export default CartScreen;