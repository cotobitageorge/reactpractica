import React from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {NavigationActions as navigation} from "react-navigation";

const MenuScreen = ({navigation}) => {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchBtn} onPress={()=>navigation.navigate("Product")}>
                <Text style={styles.text}>Browse</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchBtn2} onPress={()=>navigation.navigate("Cart")}>
                <Text style={styles.text}>Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchBtn: {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#FF1493",
    },
    touchBtn2: {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#5cd6b4",
    },
    text: {
        color: "white"
    }
});

export default MenuScreen;