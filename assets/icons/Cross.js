import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'


const Cross = () => {
  return (
    <View>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"   style={className`h-8 w-8 p-1 rounded-xl bg-gray-200`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
    </View>
  )
}

export default Cross