import { CustomButton } from '@/components/ui/CustomButton';
import CustomText from "@/components/ui/CustomText"
import { TextInput, View } from "react-native";

type RegisterFormProps = {
    onRegisterPress: () => void;
    onSwitchToLogin: () => void;
    isDisabled?: boolean;
  }
export function RegisterForm({ onRegisterPress, onSwitchToLogin, isDisabled = true }: RegisterFormProps) {
  return (
    <>
      <CustomText variant='large' >Regristrate!</CustomText> 
      <CustomText variant='medium'>Crea una cuenta para acceder a nuestra app!</CustomText>
      
      <TextInput 
        className='bg-white text-black rounded-lg p-3 w-full border border-black' 
        placeholder='Nombre de Usuario' 
      />
      <TextInput 
        className='bg-white text-black rounded-lg p-3 w-full border border-black' 
        placeholder='Email' 
      />
      <TextInput 
        className='bg-white text-black rounded-lg p-3 w-full border border-black' 
        placeholder='Contraseña' 
        secureTextEntry 
      />
      
      <View className='flex-row gap-2'>
        <CustomButton 
          onPress={onSwitchToLogin} 
          variant='link'
        >
          Ya tengo una cuenta
        </CustomButton>
        <CustomButton 
          onPress={onRegisterPress} 
          variant={isDisabled ? 'link' : 'secondary'}
        >
          Registrarse
        </CustomButton>
        
      </View>
    </>
  );
}

