import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Info from "@/components/auth/Info"

const   HomeScreen = () => {
  return (
    <SafeAreaView className="bg-blue-500 flex-1 justify-start items-center">
      <Info></Info>
    </SafeAreaView> 
  )
}

export default HomeScreen