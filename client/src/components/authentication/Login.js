import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { Navigation } from 'react-native-navigation';
import * as screen from '../../constants/screenLayouts'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state
    }
  }

  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }

  leaveScreen = () => {
    Navigation.pop(this.props.componentId)
  }

  render() {

    
    const authenticate = async () => {
      let usernameOrEmail = this.state.usernameOrEmail
      let password = this.state.password
      
      await axios.post('http://localhost:5000/login', {
        usernameOrEmail : usernameOrEmail,
        password : password
      }).then(response => {

        if (response.data.isAuthenticated) {
        Navigation.push(this.props.componentId, {
          component: {
            name: 'AgreeToTerms',
            passProps: {
              usernameOrEmail: this.state.usernameOrEmail
            }
            }
          })
        } else {
          this.setState({
            ...this.state,
            errorMessage: response.data.errorMessage
          })
        }
      })
    }

    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>

          <TextInput style={styles.input} placeholder="Username or Email" placeholderTextColor='rgba(0, 0, 0, 0.5)' autoCapitalize='none' onChangeText={(usernameOrEmail) => this.setState({...this.state, usernameOrEmail})}></TextInput>
          
          <TextInput style={styles.input} placeholder="Password" autoCapitalize='none' placeholderTextColor='rgba(0, 0, 0, 0.5)' secureTextEntry={true} onChangeText={(password) => this.setState({...this.state, password})}></TextInput>

          <TouchableOpacity style={styles.loginButton} onPress={() => authenticate()}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          
          <Text style={styles.orRegister}>or <Text style={styles.register} onPress={() => {this.goToScreen('Register')}}>Register</Text></Text>
        </View>

        <Image style={styles.logo} resizeMode={'contain'} source={require('../../styles/images/tphco.png')} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    username : state.username
  }
}


export default connect(mapStateToProps)(Login)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 30, 40, 1)',
    justifyContent: 'center',
    padding: 20,
  },
  loginContainer: {
    borderRadius: 25,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 10
  },
  title: {
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1)',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    marginTop: 20
  },
  loginButton: {
    backgroundColor: 'blue',
    width: 75,
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center'
  },
  orRegister: {
    textAlign: 'right'
  },
  register: {
    color: 'blue'
  },
  logo: {
    width: 300,
    height: 150,
    tintColor: 'rgba(255, 255, 255, 1)',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center'
  }
})