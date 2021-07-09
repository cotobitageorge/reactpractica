import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const ImageDetail = ({imageSource, title}) => {

    return (
        <View>
            <Image style={styles.image} source={require("../../assets/moft.png")}></Image>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    }
});

export default ImageDetail;