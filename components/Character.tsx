import React from 'react'
import { Text, View } from './Themed';

const Character = (character : any) => {
    // alert(character.name)
    return (
        <View>
            <Text>yoylo</Text>
            <Text>{character.id}</Text>
        </View>
    )
}
export default Character