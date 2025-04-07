import react , {usestate} from 'react';
import { TextInput, view } from 'react-native';

const app = ()  => {

    const [value, setvalue] = usestate('');
    return(
        <view>
            <TextInput

            placeholder="digite algo"
            onChangeText={setvalue}
            value={value}
            style={{borderWidth: 1, padding: 8}}



        /> 


        </view>
    );

};

export default app; 