import React from  'react';
import { TouchableOpacity , Text , Alert } from 'react-native';
3
 const App = () => (
< TouchableOpacity onPress={() => Alert.alert('Item tocado !')}>
<Text > Toque Aqui </ Text >
</ TouchableOpacity >
);

export default App ;
