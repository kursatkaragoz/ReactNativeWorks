import React, { Component } from 'react';
import {View, Text} from 'react-native';


//State ile işlem yapılmayacak ise bu yapıyı kullanmak mantıklıdır.
//Complex yapı söz konusu ise diğer yapı mantıklı
const FirstComponent = ({name,text}) => {
    return(
        <View>
            <Text>{name} {text} First Component</Text>
        </View>
    )
}

export default FirstComponent;



/*
export default class FirstComponent extends Component {
    render(){
        return(
            <View>
                <Text> First Component</Text>
            </View>
        )    
    }

}
*/