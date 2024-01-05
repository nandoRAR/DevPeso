import { createStackNavigator } from '@react-navigation/stack';

import Register from '../screens/Register';
import EditRegister from '../screens/EditRegister';
import Chart from '../screens/Chart';

const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator initialRouteName='Register'>
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='EditRegister' component={EditRegister} />
            <Stack.Screen name='Chart' component={Chart} />
        </Stack.Navigator >
    );

}