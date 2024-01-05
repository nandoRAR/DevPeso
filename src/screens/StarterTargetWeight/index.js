import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';


export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const targetWeight = useSelector(state => state.userReducer.targetWeight);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerRight: () => (
                <C.NextButton onPress={nextAction}>
                    <C.NextButtonText>Concluir</C.NextButtonText>
                </C.NextButton>
            ),
            headerRightContainerStyle: {
                marginRight: 10
            }
        })
    }, [targetWeight]);

    const handleChangeName = (t) => {
        dispatch({ type: 'SET_TARGETWEIGHT', payload: { targetWeight: t } });
    }

    const nextAction = () => {
        if (!targetWeight) {
            alert("Você precisa de um peso válido");
            return
        }
        navigation.reset({
            index: 1,
            routes: [{ name: 'AppTab' }]
        })
    }


    return (
        <C.Container>
            <C.HeaderText>Qual é o seu Peso(Kg) Ideal?</C.HeaderText>
            <C.TargetWeightInput
                keyboardType='numeric'
                value={targetWeight}
                onChangeText={(t) => handleChangeName(t)}
                autoFocus={true}
                onSubmitEditing={nextAction}
            />
        </C.Container>
    );
}