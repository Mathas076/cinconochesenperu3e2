import CustomText from "@/components/ui/CustomText";
import "@/global.css";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
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
      <CustomText variant="large" dark>
        Hello World
      </CustomText>
    </View>
  );
}