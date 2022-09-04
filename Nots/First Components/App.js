

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
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


export default class App extends Component {
  render(){
    return (
      <View style={[{flex:1, paddingTop:150}]}>
        <FirstComponent name= {'Kürşad KARAGÖZ'} text={"Hoşgeldiniz"} />
      </View>
    )
    
  }
}

const style = StyleSheet.create({
  welcome_area:{ backgroundColor:'red', flex:1},
  welcome_text:{ color:'white', fontSize:20}
});


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