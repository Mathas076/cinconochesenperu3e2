import CustomText from "@/components/ui/CustomText";
import { LoginForm } from "@/components/auth/LoginForm";
import "@/global.css";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  
  const [isLogin, setIsLogin] = useState<string>("");
  useEffect(() => {
    switch (isLogin){
      case "Login": 
      Alert.alert("Login");
      break;
      case "Register":
      break;
    }
    
    return () => {
      
    };
  }, []);
  return (

    <View className="bg-[#026A75] w-screen h-screen">
     <Link href="/(home)/HomeScreen">Presionar</Link>
      <LoginForm onLoginPress={() => setIsLogin("Login")} onSwitchToRegister={() => setIsLogin("Register")}></LoginForm>
    </View>
  );
}