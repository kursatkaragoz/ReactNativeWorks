import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';



/*
const FirstComponent = ({name,year, changeState}) => {
    return(
        <View>
            <Text>{name} {year} First Component</Text>
            <TouchableOpacity onPress={changeState}>
                <Text>
                    Değiştir
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default FirstComponent;

*/




export default class FirstComponent extends Component {
    constructor() {
        super();
        this.state = {
            address: ' '
        }
    }

    changeAddress = () => {
        this.setState({address:'Istanbul'})
    }


    render(){
        const {name, year, changeState} = this.props;
        const { address } = this.state;
        return(
            <View>
                <Text>{name} {year} {address} First Component</Text>
                <TouchableOpacity onPress={() => {
                    this.changeAddress();
                    changeState();                    
                    }}>
                    <Text>
                        Değiştir
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

}
