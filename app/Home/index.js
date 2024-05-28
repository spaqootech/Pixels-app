import { View, Text, TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'// tailwind css for react native
import Menu from '../../assets/icons/Menu'
import Search from '../../assets/icons/Search'
import Cross from '../../assets/icons/Cross'
const index = () => {
  return (
    <View style={className`bg-gray-200 flex-1 p-2`}>
      
      <View style={className`flex-row  justify-between items-center`}>
      <Text style={className`font-bold text-xl`}>Pixels</Text>
      <Menu/>
      </View>

      <View style={className`flex-row justify-between items-center bg-white p-1 rounded-xl my-1`}>
        <Search/>
        <TextInput placeholder='Search for photos' style={className`p-2 flex-1`}/>
        <Cross/>
      </View>

      <View style={className`py-2`}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
<Text style={className`mr-2 p-2 px-3 bg-white rounded-xl`}>Nature</Text>
<Text style={className`mr-2 p-2 px-3 bg-white rounded-xl`}>Design</Text>
<Text style={className`mr-2 p-2 px-3 bg-white rounded-xl`}>Fiels</Text>
<Text style={className`mr-2 p-2 px-3 bg-white rounded-xl`}>People</Text>
<Text style={className`mr-2 p-2 px-3 bg-white rounded-xl`}>Art</Text>
<Text style={className`mr-2 p-2 px-3 bg-white rounded-xl`}>Craft</Text>
<Text style={className`mr-2 p-2 px-3 bg-white rounded-xl`}>Place</Text>
<Text style={className`mr-2 p-2 px-3 bg-white rounded-xl`}>Over load</Text>
<Text style={className`mr-2 p-2 px-3 bg-white rounded-xl`}>spaqoo</Text>
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
       <View style={className`gap-2 pb-10`}>

       <View style={className`flex-row justify-between items-center`}>
                <Image source={require('../../assets/p1.avif')} 
                style={className`h-70 w-45 rounded-xl`}/>
                <Image source={require('../../assets/p2.avif')} 
                style={className`h-70 w-45 rounded-xl`}/>
        </View>
        
        <View style={className`flex-row justify-between items-center`}>
                <Image source={require('../../assets/p3.avif')} 
                style={className`h-70 w-45 rounded-xl`}/>
                <Image source={require('../../assets/p4.avif')} 
                style={className`h-70 w-45 rounded-xl`}/>
        </View>
        
        <View style={className`flex-row justify-between items-center`}>
                <Image source={require('../../assets/p5.avif')} 
                style={className`h-70 w-45 rounded-xl`}/>
                <Image source={require('../../assets/p6.avif')} 
                style={className`h-70 w-45 rounded-xl`}/>
        </View>
        
       </View>
      </ScrollView>

   
    </View>
  )
}

export default index