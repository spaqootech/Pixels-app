import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { useRouter } from 'expo-router'
const index = () => {
    const route = useRouter()
  return (
    <View style={className`flex-1`}>
        <Image source={require('../assets/welcome.png')} style={className`absolute`}/>
        <View style={className`h-70 w-98 bg-white absolute bottom-0 rounded-3xl justify-center items-center gap-3`}>
            <Text style={className`font-bold text-7xl`}>Pixels</Text>
<Text style={className`text-lg font-bold`}>Every Pixels Tells a Story</Text>
            <Pressable onPress={()=>route.push('Home')}>
            <Text style={className`bg-black text-white p-4 w-80 text-center rounded-xl`}>
                Start Explore</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default index