import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import * as screen from '../../constants/screenLayouts'


// type Props = {}; Component<Props>
export default class AgreeToTerms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state
    }
  }

  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        options: {
          topBar: {
            visible: 'true',
            title: {
              text: 'Terms of Service'
            }
          }
        },
        name: screenName
      }
    })
  }

  acceptTerms = () => {
    Navigation.setRoot({
      root: {
        stack: {
          id: 'PostLoginStack',
          children: [
            {component : screen.energyTechWeekly},
            {component: screen.dashboard}
          ]
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} resizeMode={'contain'} source={require('../../styles/images/tphco.png')} />
        
        <View>
          <Text style={styles.welcome}>Welcome to the TPH Energy News App! By clicking OK, you accept{screen.termsOfService.name}</Text>

          <View style={styles.termsButtonContainer}>
            <Button color='rgba(110, 90, 25, 1)' title="(Terms of Service)" accessibilityLabel="Terms of Service" onPress={() => this.goToScreen("TermsOfService")} />
          </View>
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.acceptTerms()}>
          <Text style={styles.ok}>OK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingRight: 25,
    paddingLeft: 25,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 30, 40, 1)',
  },
  logo: {
    width: 300,
    paddingBottom: 100,
    tintColor: 'rgba(255, 255, 255, 1)'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
  },
  instructions: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: 50,
    width: 200,
    margin: 25,
  },
  ok: {
    color: 'rgba(0, 30, 40, 1)',
    fontWeight: 'bold',
    fontSize: 20
  },
  termsButtonContainer: {
    padding: 0,
    margin: 0,
  }
});
