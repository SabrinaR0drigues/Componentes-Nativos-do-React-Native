import React from  'react';
 import { Button , Alert } from  'react-native';

 const App = () => (
<Button
 title ="Pressione -me"
onPress ={() => Alert . alert ('B o t o pressionado !')}
/>
);


export default App ;