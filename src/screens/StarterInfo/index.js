import { useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {useDispatch } from 'react-redux';
import DefaultButton from '../../components/DefaultButton';
import C from './styles';


export default () => {
    const navigation = useNavigation();
    const start = () => {
        navigation.navigate('StarterName');
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    return (
        <C.Container>
            <C.WelcomeText>Bem vindo(a) ao DevPeso</C.WelcomeText>
            <C.BeginConfigArea>
                <DefaultButton width="100%" bgcolor="#0072C0" underlayColor="#0B7AC6" onPress={start}>
                    <C.ButtonText>Iniciar Configuração</C.ButtonText>
                </DefaultButton>
            </C.BeginConfigArea>
        </C.Container>
    );
}