import React from 'react'
import { View, Image ,TouchableOpacity } from 'react-native'

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'

import Calendar from '../features/calendar/calendar.screen'
import Tools from '../features/tools/tools.screen'
import Learning from '../features/learning/learning.screen'

import { COLORS } from '../constants/themes'
import { icons } from '../assets/icons'

const Nav = createBottomTabNavigator();

export default function index() {
  return (
   <Nav.Navigator tabBarOptions={{showLabel : true}}>
       <Nav.Screen 
            name='Learning'
            component={Learning}
            options = {{
                tabBarIcon:({focused})=>(
                    <Image 
                        //source={icons.search}
                        resizeMode = 'contain'
                        style = {{
                            width:25,
                            heigth:25,
                            tintColor : focused ? COLORS.primary : COLORS.secondary
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
                        //source={icons.search}
                        resizeMode = 'contain'
                        style = {{
                            width:25,
                            heigth:25,
                            tintColor : focused ? COLORS.primary : COLORS.secondary
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
                        //source={icons.location}
                        resizeMode = 'contain'
                        style = {{
                            width:25,
                            heigth:25,
                            tintColor : focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                    
                )
            }}
       /> 
       
   </Nav.Navigator>
  )
}