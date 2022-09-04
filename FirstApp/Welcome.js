import React from 'react';
import { View, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class index extends React.Component {
    render(){
        return(
        <View>
           <Text> {this.props.name} {this.props.age} </Text>
        </View>
        ) 
        
    }
}

index.PropTypes = {
    //isRequired kullanılması zorunlu props.
    name:PropTypes.string.isRequired, // |array|bool|func|number|object|string|element
    age:PropTypes.number
};

//gönderilmesi zorunlu props'a default data eklemek için.
//name için default data belirtilmez veya text içinde verilmezse error verir.
index.defaultProps = {
    name:'Ali Veli',
    age:'30'
}