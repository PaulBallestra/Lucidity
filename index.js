import React from 'react';
import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {AuthProvider} from './src/context/AuthContext';
import {AxiosProvider} from './src/context/AxiosContext';

//import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";

class Root extends React.Component {

    constructor(){
        super();
        PushNotification.configure({
            onRegister: function (token) {
                console.log("TOKEN:", token);
            },
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
                //notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            popInitialNotification: true,
            //requestPermissions: true,
            requestPermissions: Platform.OS === 'ios'
        });
    }

    

    render (){
        return (
            <AuthProvider>
                <AxiosProvider>
                    <App />
                </AxiosProvider>
            </AuthProvider>
        );
    }
};
AppRegistry.registerComponent(appName, () => Root);

//AppRegistry.registerComponent(appName, () => App);
