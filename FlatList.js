import React from 'react';
 import { FlatList , Text } from 'react-native';

 const data = [
 { key : '1', title : 'Item 1' } ,
 { key : '2', title :  'Item 2' } ,
 { key : '3', title :  'Item 3' }
 ];

 const App = () => (
  <FlatList
  data ={ data }
  renderItem ={({ item }) => <Text >{ item . title } </ Text >}
 />
 );
 
 export default app ;