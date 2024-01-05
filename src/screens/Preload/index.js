import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import C from './styles';


export default () => {
    const navigation = useNavigation();
    const name = useSelector(state => state.userReducer.name);

    useEffect(() => {
        if (!name) {
            navigation.reset({
                index: 1,
                routes: [{ name: 'StarterStrack' }]
            });
        } else {
            navigation.reset({
                index: 1,
                routes: [{ name: 'AppTab' }]
            });
        }
    }, []);

    return (
        <C.Container>
            <C.LoadingIcon color="#000" size="large" />
        </C.Container>
    );
}