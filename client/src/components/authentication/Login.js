import React, {Component} from 'react';
import axios from 'axios'
import {StyleSheet, TextInput, Text, View, Image, TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import * as screen from '../../constants/screenLayouts'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  componentWillMount = () => {

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
  await axios.get('http://localhost:5000/').then(response => {  
        if (true) {  
          
          Navigation.setRoot({
              root : {
                  stack: {
                      options: {
                          topBar: {
                              visible: 'true'
                          }
                      },
                      id: 'PostLoginStack',
                      children: [
                          {component : screen.dashboard}
                      ]
                  }
              }
          })

      } else {
          // Navigation.setRoot({
          //     root : {
          //         stack: {
          //             options: {
          //                 topBar: {
          //                     visible: 'false'
          //                 }
          //             },
          //             id: 'PreLoginStack',
          //             children: [
          //                 {component : screen.register},
          //                 {component : screen.login}
          //             ]
          //         }
          //     }
          // })
          return
      }
  })
}


    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Login</Text>
          <Text>{this.state.hello}{this.state.username}</Text>

          <TextInput style={styles.input} placeholder="Username" placeholderTextColor='rgba(0, 0, 0, 0.5)' onChangeText={(username) => this.setState({...this.state, username})}></TextInput>
          
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor='rgba(0, 0, 0, 0.5)'></TextInput>

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
})