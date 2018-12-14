import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert, TextInput ,Image} from 'react-native';

// -------------- Home Screen -----------------
export default class HomeScreen extends Component {
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props)

        this.state = {
           username:'',
           password:''
        }
    }
    checkLogin = () => {
        let user = this.state.username
        let pass = this.state.password
        
        if(user==""||pass==""){
            Alert.alert('กรุณากรอก Username และ Password')
        }else if(user=="user01"&&pass=="1234"){
            this.props.navigation.navigate('NormalEmployees')
        }else if(user=="user02"&&pass=="1234"){
            this.props.navigation.navigate('Staffhome')
        }else if(user=="user03"&&pass=="1234"){
            this.props.navigation.navigate('secretaryhome')
        }else if(user=="user04"&&pass=="1234"){
            this.props.navigation.navigate('Bosshome')
        }else{
            Alert.alert(' Username หรือ Password ไม่ถูกต้อง')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/img/cover.png')} style={{ resizeMode: 'contain',aspectRatio: 1 }}/>
                <TextInput placeholder="Username" textAlign={'left'}  style={styles.textInput}  onChangeText={(text) => this.setState({username:text})}  />
                <TextInput secureTextEntry={true} placeholder="Password" textAlign={'left'}  style={styles.textInput} onChangeText={(text) => this.setState({password:text})}  />
                
                <Button
                    title="login"
                    onPress={this.checkLogin}
                />
            </View>
        );
    }
}

// -------------- CSS -----------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 44,
        marginVertical: 10
    },
    textInput:{
        width:'70%',
        margin:10,
        backgroundColor:'#D9D9D9',
        borderRadius:50
    }
});
