import CustomText from "@/components/ui/CustomText";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import "@/global.css";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';
export default function Index() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(true);
    return (
      
    <SafeAreaView className="bg-blue-500 flex-1 justify-center items-center">
    isLogin
    ?
    <LoginForm 
    onLoginPress={() => router.navigate('/HomeScreen')} onSwitchToRegister={() => setIsLogin(false)}
    />
    :
    <RegisterForm 
    onRegisterPress={() => router.navigate('/HomeScreen')} onSwitchToLogin={() => setIsLogin(true)}
    />
  </SafeAreaView>
    )
  }
      