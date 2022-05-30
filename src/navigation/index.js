import React from 'react'
import { Image } from 'react-native'

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'

import Calendar from '../features/calendar/calendar.screen'
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
            activeBackgroundColor: COLORS.backgroundComponent,
            inactiveBackgroundColor: COLORS.backgroundBottom
        }}>
        <Nav.Screen 
                name='Learning'
                
                component={Learning}
                options = {{
                    tabBarIcon:({focused})=>(
                        <Image 
                            source={icons.learning}
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
                name='Calendar'
                component={Calendar}
                options = {{
                    tabBarIcon:({focused})=>(
                        <Image 
                            source={icons.calendar}
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
  )
}