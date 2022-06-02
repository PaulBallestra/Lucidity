import React from 'react'
import { Image } from 'react-native'

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'

import Landing from '../features/landing/landing.screen'
import Tools from '../features/tools/tools.screen'
import Learning from '../features/learning/learning.screen'

import { COLORS } from '../constants/themes'
import icons from '../constants/icons'

const Nav = createBottomTabNavigator();

export default function index() {
    return (
        //NAV BAR BOTTOM    
        <Nav.Navigator tabBarOptions={{
            showLabel : false,
            activeBackgroundColor: COLORS.customLightDark,
            inactiveBackgroundColor: COLORS.backgroundBottom,
        }}>
        <Nav.Screen 
                name='Learning'
                component={Learning}
                options = {{
                    tabBarIcon:({focused})=>(
                        <Image 
                            source={focused ? icons.learning_open : icons.learning}
                            resizeMode = 'contain'
                            style = {{
                                width: focused ? 42 : 33,
                                height: focused ? 42 : 33,
                                tintColor : focused ? COLORS.blue : COLORS.text
                            }}
                        />
                        
                    )
                }}
        />
        <Nav.Screen 
                name='Landing'
                component={Landing}
                options = {{
                    tabBarIcon:({focused})=>(
                        <Image 
                            source={focused ? icons.calendar_open : icons.calendar}
                            resizeMode = 'contain'
                            style = {{
                                width: 33,
                                height: 33,
                                tintColor : focused ? COLORS.blue : COLORS.text
                            }}
                        />
                        
                    )
                }}
        />
        <Nav.Screen 
                name='Tools'
                component={Tools}
                options = {{
                    tabBarIcon:({focused})=>(
                        <Image 
                            source={icons.tools}
                            resizeMode = 'contain'
                            style = {{
                                width: 33,
                                height: 33,
                                tintColor : focused ? COLORS.blue : COLORS.text
                            }}
                        />
                    )
                }}
        /> 
        
    </Nav.Navigator>
)}