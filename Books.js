import React from 'react'
import { View, Text } from 'react-native'

const Books = ({title}) => {
    return (
        <View style={{width:250,padding:20, borderColor:"black",borderWidth:1,paddingHorizontal:50}}>
        <Text>{title}</Text>

    </View>
    )
}

export default Books
