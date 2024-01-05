import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';
import calculateIMC from '../../helpers/calculateIMC';

export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const currentWeight = useSelector(state => state.userReducer.currentWeight);
    const height = useSelector(state => state.userReducer.height);
    let day = new Date();
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
    }, [currentWeight]);

    const handleChangeName = (t) => {
        dispatch({ type: 'SET_CURRENTWEIGHT', payload: { currentWeight: t } });
    }

    const nextAction = () => {
        if (!currentWeight) {
            alert("Você precisa de um peso válido");
            return
        }
        let imc = calculateIMC(currentWeight, height);
        dispatch({type: 'SET_IMC', payload: { currentIMC: imc }})
        dispatch({
            type: 'ADD_REGISTER', payload: {
                register: {
                    id: 1,
                    date: day.toLocaleDateString('pt-br'),
                    weight: currentWeight,
                    imc: imc,
                    differenceWeight:  0,
                    diet: false,
                    exercise: false
                }
            }
        });
        navigation.navigate('StarterTargetWeight');
    }


    return (
        <C.Container>
            <C.HeaderText>Qual é o seu Peso(Kg) atual?</C.HeaderText>
            <C.WeightInput
                keyboardType='numeric'
                value={currentWeight}
                onChangeText={(t) => handleChangeName(t)}
                autoFocus={true}
                onSubmitEditing={nextAction}
            />
        </C.Container>
    );
}