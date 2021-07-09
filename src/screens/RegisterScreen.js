import React, {useState} from "react";
import {Text, StyleSheet, View, TextInput, TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail";

const RegisterScreen = ({navigation}) => {
    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[pass, setPass]=useState("")
    const[cpass, setCPass]=useState("")
    const[address, setAddress]=useState("")
    return (
        <View style={styles.container}>
            <ImageDetail/>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(name) => setName(name)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(pass) => setPass(pass)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="confirm password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(cpass) => setCPass(cpass)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="address"
                    placeholderTextColor="#003f5c"
                    onChangeText={(address) => setAddress(address)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.text}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        backgroundColor: "#5cd6b4",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#FF1493",
    },
    text: {
        color: "white"
    }
});

export default RegisterScreen;