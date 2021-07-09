import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const ImageDetail2 = ({imageSource, title}) => {

    return (
        <View>
            <Image style={styles.image} source={require("../../assets/moft.png")}></Image>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
});

export default ImageDetail2;