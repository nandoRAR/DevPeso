import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import C from './styles';
import DefaultButton from '../../components/DefaultButton';
import ModalAddRegister from '../../components/ModalAddRegister';

export default () => {
    const [modalVisible, setModalVisible] = useState(false);
    const name = useSelector(state => state.userReducer.name);
    const targetWeight = useSelector(state => state.userReducer.targetWeight);
    const weight = useSelector(state => state.userReducer.currentWeight);
    const imc = useSelector(state => state.userReducer.currentIMC);

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Seu progresso diário',
            headerTitleAlign: "center",
            headerRight: () => (
                <C.ConfigButtonArea onPress={btnAction} underlayColor="transparent">
                    <C.ConfigButtonImage source={require('../../assets/config.png')} />
                </C.ConfigButtonArea>
            ),
            headerRightContainerStyle: {
                marginRight: 10,
            },
            headerStyle: { backgroundColor: '#EEE' },
            
        })
    }, []);

    const btnAction = () => {
        navigation.navigate('HomeConfig');
    }

    return (
        <C.Container>
            <C.HeaderText>Bem-Vindo(a) {name}</C.HeaderText>
            <C.TitleText>IMC</C.TitleText>
            <C.LabelText>{imc}</C.LabelText>
            <C.TitleText>Peso Atual</C.TitleText>
            <C.LabelText>{weight} Kg</C.LabelText>
            <C.TitleText>Peso Ideal</C.TitleText>
            <C.LabelText>{targetWeight} Kg</C.LabelText>
            <DefaultButton onPress={() => setModalVisible(true)} bgcolor="#4AC34E" width="150px">
                <C.TextButton>Novo Peso</C.TextButton>
            </DefaultButton>
            <ModalAddRegister modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </C.Container>
    );
}