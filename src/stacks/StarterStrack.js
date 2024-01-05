import { createStackNavigator } from '@react-navigation/stack';

import StarterInfo from '../screens/StarterInfo';
import StarterName from '../screens/StarterName';
import StarterHeight from '../screens/StarterHeight';
import StarterWeight from '../screens/StarterWeight';
import StarterTargetWeight from '../screens/StarterTargetWeight';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator initialRouteName='StarterInfo'>
            <Stack.Screen name='StarterInfo' component={StarterInfo} />
            <Stack.Screen name='StarterName' component={StarterName} />
            <Stack.Screen name='StarterHeight' component={StarterHeight} />
            <Stack.Screen name='StarterWeight' component={StarterWeight} />
            <Stack.Screen name='StarterTargetWeight' component={StarterTargetWeight} />
        </Stack.Navigator >
    );

}