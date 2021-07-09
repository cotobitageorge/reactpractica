import React, {useState} from "react";
import {Text, StyleSheet, View, TextInput, TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail";

const HomeScreen = ({navigation}) => {

  const[name, setName]=useState("")
  const[pass, setPass]=useState("")

  return (
      <View style={styles.container}>
        <ImageDetail/>

          <View style={styles.inputView}>
              <TextInput
                  style={styles.TextInput}
                  autoCapitalize="none"
                  placeholder="username"
                  placeholderTextColor="#003f5c"
                  onChangeText={(name) => setName(name)}
              />
          </View>

          <View style={styles.inputView}>
              <TextInput
                  style={styles.TextInput}
                  autoCapitalize="none"
                  placeholder="password"
                  placeholderTextColor="#003f5c"
                  secureTextEntry={true}
                  onChangeText={(pass) => setPass(pass)}
              />
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Menu")}>
              <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>

        <Text style={styles.text3}>You don't have an account? Register
            <Text style={styles.pressHere} onPress={()=>navigation.navigate("Register")}> here</Text>
        </Text>
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
  text3: {
      fontSize: 15
  },
    pressHere: {
      color: "#5cd6b4",
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 40
    },
    text: {
        color: "white"
    }
});

export default HomeScreen;
