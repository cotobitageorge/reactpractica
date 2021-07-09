import React, {useState} from "react";
import {Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ImageDetail2 from "../components/ImageDetail2";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductScreen = ({navigation}) => {

    const aj = {
        nume: "Trabucuri AJ Fernandez Dias de Gloria",
        pret: 852
    };
    const bolivar = {
        nume: "Trabucuri Bolivar Libertador CDH",
        pret: 1136
    };
    const arturo = {
        nume: "Trabucuri Arturo Fuente Anejo No. 50",
        pret: 1985
    };
    const hibiki = {
        nume: "Whiskey Hibiki Suntory 17 YO GB",
        pret: 5270
    };
    const mcallan = {
        nume: "Whiskey Macallan Reflexion",
        pret: 7000
    };
    const glen = {
        nume: "Whiskey Glenfarclas 40YO",
        pret: 4900
    };
    const roja = {
        nume: "Parfum Roja Parfums Goodnight Kiss",
        pret: 6747
    };
    const tizi = {
        nume: "Parfum Tiziana Terenzi Tyl Assoluto",
        pret: 3460
    };
    const joy = {
        nume: "Parfum Joy Baccarat Pure Parfum, Limited Edition",
        pret: 7492
    };



        return (
        <View style={styles.container}>
            <ImageDetail2/>
        <ScrollView>

            <TouchableOpacity style={styles.item}>
                <Text style={styles.font}>{aj.nume} - {aj.pret} RON</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.font}>{bolivar.nume} - {bolivar.pret} RON</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.font}>{arturo.nume} - {arturo.pret} RON</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.item2}>
                <Text style={styles.font}>{hibiki.nume} - {hibiki.pret} RON</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item2}>
                <Text style={styles.font}>{mcallan.nume} - {mcallan.pret} RON</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item2}>
                <Text style={styles.font}>{glen.nume} - {glen.pret} RON</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.item}>
                <Text style={styles.font}>{roja.nume} - {roja.pret} RON</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.font}>{tizi.nume} - {tizi.pret} RON</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.font}>{joy.nume} - {joy.pret} RON</Text>
            </TouchableOpacity>

        </ScrollView>
        </View>
     );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    font: {
        fontSize: 20
    },
    item: {
        backgroundColor: '#5cd6b4',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    item2: {
        backgroundColor: '#FF1493',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});

export default ProductScreen;