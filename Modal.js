import React , { useState } from 'react';
 import { Modal , Text , View , Button } from 'react-native';

 const App = () => {
 const [ visible , setVisible ] = useState ( false );

 return (

 <View >

 <Button title =" Abrir Modal " onPress ={() => setVisible ( true )} />
<Modal visible={ visible } transparent />
 <View style ={{ flex :1 , justifyContent :’center ’, alignItems :’center ’
}} 
 <Text  C o n t e d o do Modal \Text >
 <Button title =" Fechar " onPress ={() => setVisible ( false )} />
 <\View >

 
 <\Modal>
<\View >
 );
 };

export default App ;
