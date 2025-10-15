import { Stack } from "expo-router";
import { View } from "react-native";
import { Tabs } from 'expo-router/ui';

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name='index' options={{
      headerShown:false,
    } }/>
    <Stack.Screen name='(home)' options={{
      headerShown:false,
    } }/>
  </Stack>
}