import React, {Component} from 'react';
import { StyleSheet, Button, View, TextInput, Image, Text, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class LoginView extends Component {
  
  CheckTextInputIsEmptyOrNot = () =>{
 
    const { TextInputPassword }  = this.state ;
    const { TextInputEmail }  = this.state ;

    if(TextInputPassword == '' || TextInputEmail == '')
    {
    Alert.alert("¡Por favor!, LLene todos los campos");
    } else (
      Actions.home({text1: this.state.text1})
    );
  }


  constructor(props) {
    super(props)
    this.state = {
      text1: "Ramses",
      TextInputPassword: '',
      TextInputEmail: ''
    }
  }

  
  render() {
    return (
      <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Logo.png')}
      />
  <Text style={{ fontWeight: 'bold'}}>E-mail:</Text>
      <TextInput
        style={styles.input}
        onChangeText= {TextInputEmail=> this.setState({TextInputEmail})}
        placeholder= "E-mail"
      />
      <Text style={{ fontWeight: 'bold'}}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText= {TextInputPassword => this.setState({TextInputPassword})}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry={true}
      />
        <Button
          onPress={this.CheckTextInputIsEmptyOrNot}
          title="Login"
          color="#841584"
          accessibilityLabel="Login button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ceb95',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  logo: {
    resizeMode: 'stretch',
    width: 200,
    height: 100
  }
});
