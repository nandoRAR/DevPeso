import { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import C from './styles';
import DefaultButton from '../../components/DefaultButton';
import calculateIMC from '../../helpers/calculateIMC';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const { id } = route.params;
    const height = useSelector(state => state.userReducer.height);
    const currentWeight = useSelector(state => state.userReducer.currentWeight);
    const listRegister = useSelector(state => state.userReducer.register);
    const [register, setRegister] = useState();
    const [weightBefore, setWeightBefore] = useState();
    const [newWeight, setNewWeight] = useState();
    const [diet, setDiet] = useState(false);
    const [exercise, setExercise] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Editar Peso'
        })
    }, []);

    useEffect(() => {
        if (listRegister) {
            setRegister(listRegister.find(i => i.id == id));
        }
    }, [listRegister]);

    useEffect(() => {
        if (register) {
            setWeightBefore(register.weight - register.differenceWeight);
            setNewWeight(register.weight);
            setDiet(register.diet ? true : false);
            setExercise(register.exercise ? true : false);
        }
    }, [register]);

    const Edit = () => {
        if (!newWeight) {
            alert("Você precisa de um peso válido");
            return
        }
        let imc = calculateIMC(newWeight, height);
        dispatch({
            type: 'EDIT_REGISTER', payload: {
                register: {
                    id: id,
                    date: register.date,
                    weight: newWeight,
                    imc: imc,
                    differenceWeight: newWeight - weightBefore,
                    diet: diet,
                    exercise: exercise
                }
            }
        });
        if (id == listRegister.length) {
            dispatch({ type: 'SET_IMC', payload: { currentIMC: imc } });
            dispatch({ type: 'SET_CURRENTWEIGHT', payload: { currentWeight: newWeight } });
        }
        navigation.navigate('Register');
    }

    return (
        <C.Container>
            {id == listRegister.length &&
                <>
                    <C.TextTitle>Peso</C.TextTitle>
                    <C.WeightInput
                        keyboardType='numeric'
                        value={newWeight}
                        onChangeText={(t) => { setNewWeight(t) }}
                    />
                </>
            }
            <C.TextTitle>Marca as opções abaixo que foram feita no dia</C.TextTitle>
            <C.ViewButton>
                <DefaultButton
                    bgcolor={diet ? '#A5E8BC' : false}
                    onPress={() => setDiet(!diet)}
                    width="200px"
                    style={{ marginBottom: 20 }}
                    underlayColor="#CCC"
                >
                    <C.TextButton>Dieta</C.TextButton>
                </DefaultButton>
                <DefaultButton
                    bgcolor={exercise ? '#A5E8BC' : false}
                    onPress={() => setExercise(!exercise)}
                    width="200px"
                    style={{ marginBottom: 20 }}
                    underlayColor="#CCC"
                >
                    <C.TextButton>Exercícios Físicos</C.TextButton>
                </DefaultButton>
            </C.ViewButton>
            <C.ViewButtonConfirm>
                <DefaultButton bgcolor="#4AC34E" onPress={() => Edit()}>
                    <C.TextButton>Confirmar</C.TextButton>
                </DefaultButton>
            </C.ViewButtonConfirm>
        </C.Container>
    );
}