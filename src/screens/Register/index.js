import { useLayoutEffect, useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import C from './styles';


export default () => {
    const [idRegister, setIdRegister] = useState(0);
    const navigation = useNavigation();
    const listRegister = useSelector(state => state?.userReducer?.register);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Diário',
            headerTitleAlign: "center",
            headerTintColor: '#111',
            headerStyle: { backgroundColor: '#EEE' },
            headerRight: () => (
                <C.ChartButtonArea onPress={btnAction} underlayColor="transparent">
                     <C.ChartButtonImage source={require('../../assets/grafico.png')}/>
                </C.ChartButtonArea>
            )
        });
    }, []);

    const btnAction = () => {
        navigation.navigate('Chart');
    }

    const Editar = (id) => {
        navigation.navigate('EditRegister', {
            id: id
        });
    };

    return (
        <C.Container>
            <C.FlatList
                data={listRegister}
                renderItem={({ item, index }) => (
                    <C.RegisterView>
                        <C.DateView>
                            <C.DateText>{item.date}</C.DateText>
                            <C.EditButtonArea onPress={() => Editar(item.id)}>
                                <C.EditImage source={require('../../assets/edit.png')} />
                            </C.EditButtonArea>                           
                        </C.DateView>
                        <C.Line />
                        <C.InfoView>
                            <C.LabelText>Peso: {item.weight} Kg</C.LabelText>
                            <C.LabelText>IMC: {item.imc}</C.LabelText>
                            <C.WeightView>
                                <C.LabelText>{item.differenceWeight > 0 ? '+' : ''}{item.differenceWeight.toFixed(2)} Kg</C.LabelText>
                                {item.differenceWeight > 0 ?
                                    <C.ItenImage source={require('../../assets/arrowUp.png')} /> :
                                    <C.ItenImage source={require('../../assets/ArrowDown.png')} />
                                }

                            </C.WeightView>
                        </C.InfoView>
                        <C.CheckView>
                            <C.TesteView>
                                <C.LabelText>Dieta: </C.LabelText>
                                {item.diet ?
                                    <C.ItenImage source={require('../../assets/yes.png')} /> :
                                    <C.ItenImage source={require('../../assets/no.png')} />
                                }
                            </C.TesteView>
                            <C.TesteView>
                                <C.LabelText>Exercícios Físicos: </C.LabelText>
                                {item.exercise ?
                                    <C.ItenImage source={require('../../assets/yes.png')} /> :
                                    <C.ItenImage source={require('../../assets/no.png')} />
                                }
                            </C.TesteView>
                        </C.CheckView>
                    </C.RegisterView>
                )}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />
             
        </C.Container>
    );
}