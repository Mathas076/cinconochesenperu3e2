import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Homelayout = () => {
  return (
    <Stack>
        <Stack.Screen name='HomeScreen' options={{
            title:'Home',
            headerShown:false,
         } }/>
        <Stack.Screen name='SettingScreen' options={{
            title:'Configuraciones'
         } }/>
    </Stack>
   
  )
}

export default Homelayout