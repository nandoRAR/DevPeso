import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';


export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const height = useSelector(state => state.userReducer.height);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerRight: () => (
                <C.NextButton onPress={nextAction}>
                    <C.NextButtonText>Próximo</C.NextButtonText>
                </C.NextButton>
            ),
            headerRightContainerStyle: {
                marginRight: 10
            }
        })
    }, [height]);

    const handleChangeName = (t) => {
        dispatch({ type: 'SET_HEIGHT', payload: { height: t } });
    }

    const nextAction = () => {
        if (!height) {
            alert("Você precisa de uma altura válida");
            return
        }
        navigation.navigate('StarterWeight');
    }


    return (
        <C.Container>
            <C.HeaderText>Qual é a sua Altura(m)?</C.HeaderText>
            <C.HeightInput
                keyboardType='numeric'
                value={height}
                onChangeText={(t) => handleChangeName(t)}
                autoFocus={true}
                onSubmitEditing={nextAction}
            />
        </C.Container>
    );
}