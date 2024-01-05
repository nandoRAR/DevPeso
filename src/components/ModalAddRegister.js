import styled from 'styled-components/native';
import { useState } from 'react';
import { Modal } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DefaultButton from './DefaultButton';
import calculateIMC from '../helpers/calculateIMC';

const ModalArea = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`;
const ModalView = styled.View`
    margin: 20px;
    background-color: white;
    border: 2px solid black;
    border-radius: 20px;
    padding: 35px;
    align-items: center;
`;
const TextTitle = styled.Text`
    font-size: 18px;
    color: black;
`;
const TextButton = styled.Text`
    color: white;
`;
const WeightInput = styled.TextInput`
    border: 1px solid #CCC;
    margin: 20px 0px;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    font-size: 16px;
    padding: 10px;
`;
const TouchableOpacity = styled.TouchableOpacity`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.68);
`;



export default ({ modalVisible, setModalVisible }) => {

    const height = useSelector(state => state.userReducer.height);
    const currentWeight = useSelector(state => state.userReducer.currentWeight);
    const listRegister = useSelector(state => state?.userReducer?.register);
    const [newWeight, setNewWeight] = useState();
    const [diet, setDiet] = useState(false);
    const [exercise, setExercise] = useState(false);

    const dispatch = useDispatch();

    const NewRegister = () => {
        let day = new Date();
        if (!newWeight) {
            alert("Você precisa de um peso válido");
            return
        }
        let imc = calculateIMC(newWeight, height);
        let id = listRegister.length + 1;
        dispatch({ type: 'SET_IMC', payload: { currentIMC: imc } });
        dispatch({
            type: 'ADD_REGISTER', payload: {
                register: {
                    id: id,
                    date: day.toLocaleDateString('pt-br'),
                    weight: newWeight,
                    imc: imc,
                    differenceWeight: newWeight - currentWeight,
                    diet: diet,
                    exercise: exercise
                }
            }
        });
        dispatch({ type: 'SET_CURRENTWEIGHT', payload: { currentWeight: newWeight } });
        setNewWeight();
        setDiet(false);
        setExercise(false);
        setModalVisible(!modalVisible);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} activeOpacity={1}>
                <ModalArea>
                    <ModalView>
                        <TextTitle>Digitar seu novo Peso</TextTitle>
                        <WeightInput
                            keyboardType='numeric'
                            value={newWeight}
                            onChangeText={(t) => { setNewWeight(t) }}
                            autoFocus={true}
                        />
                        <TextTitle>Marca as opções abaixo que foram feita no dia</TextTitle>
                        <DefaultButton
                            bgcolor={diet ? '#A5E8BC' : false}
                            onPress={() => setDiet(!diet)}
                            width="200px"
                            style={{ marginBottom: 20 }}
                            underlayColor="#CCC"
                        >
                            <TextButton>Dieta</TextButton>
                        </DefaultButton>
                        <DefaultButton
                            bgcolor={exercise ? '#A5E8BC' : false}
                            onPress={() => setExercise(!exercise)}
                            width="200px"
                            style={{ marginBottom: 20 }}
                            underlayColor="#CCC"
                        >
                            <TextButton>Exercícios Físicos</TextButton>
                        </DefaultButton>
                        <DefaultButton bgcolor="#4AC34E" onPress={() => NewRegister()} width="150px">
                            <TextButton>Adicionar</TextButton>
                        </DefaultButton>
                    </ModalView>
                </ModalArea>
            </TouchableOpacity>
        </Modal>
    );
};