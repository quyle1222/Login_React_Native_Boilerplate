import React from 'react'
import { View, Text, Image } from 'react-native'
import StylesDetails from '@/Theme/Styles/DetailsScreen/StylesDetailsScreen'
export function ItemDetailsComponent(text) {
  return (
    <View style={StylesDetails.fieldContainer}>
      <Text style={StylesDetails.textField}>{text}</Text>
    </View>
  )
}
