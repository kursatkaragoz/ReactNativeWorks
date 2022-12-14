

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import FirstComponent from './FirstComponent';

// justify-content : flex-start, flex-end, center, space-between, space-arround  
// (sağa sola ve boşluk yapısına göre hizala) x ekseninde calısır.
// alignItems: flex-start, flex-end, center, stretch 
//justify-content'in tam tersi y ekseninde iş yapar
//flexWrap: nowrap, wrap  (sığmayanları yatay yada diket sığdır)
//Components kullanıcı ara yüzünü şekillendiren belli görevleri olan class ve functionlar
// return olarak react elementleri döndürebilir.
// belirli parametreler alabilir.
// State: Component Memory, component olusturuldugunda component içerisin java tutulacak olan
// javascript objesidir.


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Kürşad KARAGÖZ',
      year: 1996,
    }
  }

  changeState = () => {
    this.setState({
      name: 'Ali Veli',
      year: 1990
    },() => {
      alert('Bilgiler Güncellendi.')
    })
  }

  render(){
    const {name, year} = this.state;
    return (
      <View style={[{flex:1, paddingTop:150}]}>
        <Text> {name} {year} </Text>
        <TouchableOpacity onPress={this.changeState}>
          <Text> Değiştir</Text>
        </TouchableOpacity>
        
      </View>
    )
    
  }
}



/*
export const App = () => {
  return (
    <View style={{ paddingTop:150 }}>
    <Text>Merhaba</Text>
  </View>
  )
}
export default App;
*/