import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';


import HomeStack from './HomeStack';
import RegisterStack from './RegisterStack';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        tabBar={props => <CustomTabBar
            {...props}
            items={[
                { text: 'Início', route: 'HomeStack' },
                { text: 'Diário', route: 'RegisterStack' }
            ]}
        />}
        initialRouteName='HomeStack'
        screenOptions={{
            headerShown: false
        }}
    >
        <Tab.Screen name='HomeStack' component={HomeStack} />
        <Tab.Screen name='RegisterStack' component={RegisterStack} />
    </Tab.Navigator>
);