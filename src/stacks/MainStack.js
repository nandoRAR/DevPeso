import { createStackNavigator } from '@react-navigation/stack';

import StarterStrack from './StarterStrack';
import Preload from '../screens/Preload';
import AppTab from './AppTab';


const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName='Preload'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='Preload' component={Preload} />
            <Stack.Screen name='StarterStrack' component={StarterStrack} />
            <Stack.Screen name='AppTab' component={AppTab} />
        </Stack.Navigator>
    );

}