import { AsyncStorage } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import axios from 'axios'
import * as screen from './src/constants/screenLayouts'
import AgreeToTerms from './src/components/terms/AgreeToTerms'
import Login from './src/components/authentication/Login'
import Register from './src/components/authentication/Register'
import TermsOfService from './src/components/terms/TermsOfService';
import Dashboard from './src/components/Dashboard';


const initialState = {
    isAuthenticated: false,
    termsAccepted: false,
}

const rootReducer = (state = initialState, action) => {
    return state
}


const store = createStore(rootReducer)


Navigation.registerComponentWithRedux('AgreeToTerms', () => AgreeToTerms, Provider, store)
Navigation.registerComponentWithRedux('Register', () => Register, Provider, store)
Navigation.registerComponentWithRedux('TermsOfService', () => TermsOfService, Provider, store)
Navigation.registerComponentWithRedux('Login', () => Login, Provider, store)
Navigation.registerComponentWithRedux('Dashboard', () => Dashboard, Provider, store)

_retrieveAsyncStorageLoginStatus = async () => {
    try {
        const response = await AsyncStorage.getItem('isLoggedIn')

        if (response) {
            Navigation.setRoot({
                root : {
                    stack: {
                        id: 'PreLoginStack',
                        children: [
                            {component : screen.termsOfService},
                            {component : screen.agreeToTerms}
                        ]
                    }
                }
            })
        } else {
            Navigation.setRoot({
                root : {
                    stack: {
                        options: {
                            topBar: {
                                visible: 'false'
                            }
                        },
                        id: 'PreLoginStack',
                        children: [
                            {component : screen.register},
                            {component : screen.login}
                        ]
                    }
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}

_storeData = async () => {
    try {
        await AsyncStorage.setItem('isLoggedIn', true) 
    } catch(error){
        console.log(error)
    }
}



Navigation.events().registerAppLaunchedListener(() => {
    
    _retrieveAsyncStorageLoginStatus()
    
})