import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: ''
      }
    }

    validateEmptyFields = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
          if (
            (this.state.email != '' )&&(reg.test(this.state.email) === true)) 
              {if (this.state.password != ''&&(this.state.password.length > 8)) 
                {alert('Success')} 
              else {alert('Please enter a valid Password');}} 
            else {alert('Please enter a valid Email');
        }
    };

    navigateTo = () => {

    }

    render() {
      return (
        <>
            <KeyboardAvoidingView behavior='position' enabled>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.appName}>THE MOVIE APP</Text>
                    <TextInput 
                        placeholder='EMAIL ADDRESS' 
                        style={styles.textInput}
                        value={this.state.text}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput 
                        placeholder='PASSWORD' 
                        style={styles.textInput}
                        value={this.state.text}
                        onChangeText={password => this.setState({ password })}
                    />
                    <View style={styles.btnGroup}>
                        <TouchableOpacity style={styles.loginButton}>
                            <Button 
                                title='Sign in' 
                                color='#fff' 
                                onPress={this.validateEmptyFields}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginButton}>
                            <Button 
                                title='Sign up' 
                                color='#fff' 
                                onPress={this.validateEmptyFields}
                            />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
      );
    }
  }
export default LoginPage;

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
      justifyContent: 'space-evenly',
      alignItems:'center',
      height: deviceHeight/3,
      marginTop: deviceHeight/3
    },
    appName: {
        fontWeight: 'bold',
        fontSize: 25
  },
  textInput:{
      width: deviceWidth/2,
      height: 40,
      borderRadius:5,
      borderColor: 'grey',
      borderWidth: 1,
      padding:5
  },
  loginButton:{
      backgroundColor: '#61DAFB',
      borderRadius: 5
  },
  btnGroup:{
      flexDirection: 'row',
      width: deviceWidth/2,
      justifyContent: 'space-evenly',
  }
  });