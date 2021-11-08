import React from 'react'
import { View, Text,TextInput } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
const App = () => {
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <Text style={{color:'white'}}>Hi friend</Text>
            <View>
                
            <AntDesign name="checkcircle" size={24} color="black" />
            <AntDesign name="checkcircleo" size={24} color="black" />
            </View>

            <TextInput  style={{height:60,backgroundColor:'white'}}
            placeholder='hi friend'

    
            
            />
        </View>
    )
}

export default App

