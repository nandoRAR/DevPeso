import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StackActions } from "@react-navigation/native";
import C from "./styles";
import DefaultButton from "../../components/DefaultButton";

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState(
    useSelector((state) => state.userReducer.name)
  );
  const [height, setHeight] = useState(
    useSelector((state) => state.userReducer.height)
  );
  const [targetWeight, setTargetWeight] = useState(
    useSelector((state) => state.userReducer.targetWeight)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Configurações",
    });
  }, []);

  const ConfirmAction = () => {
    return Alert.alert(
      "Você tem certeza disso?",
      "Você tem certeza de confimar todas as modificações?",
      [
        {
          text: "Sim",
          onPress: () => {
            dispatch({ type: "SET_NAME", payload: { name } });
            dispatch({ type: "SET_HEIGHT", payload: { height } });
            dispatch({ type: "SET_TARGETWEIGHT", payload: { targetWeight } });
            navigation.navigate("Home");
          },
        },
        {
          text: "Não",
        },
      ]
    );
  };

  const resetAction = () => {
    return Alert.alert(
            "Você tem certeza disso?",
            "Você tem certeza de resetar todas as suas informações?",
            [
                {
                    text: "Sim",
                    onPress: () => {
                        dispatch({ type: 'RESET' });
                        navigation.dispatch(
                            StackActions.replace('StarterStrack')
                        );
                    },
                },
                {
                    text: "Não",
                },
            ]
        );
  };

  return (
    <C.Container>
      <C.Label>Seu nome:</C.Label>
      <C.Input value={name} onChangeText={(e) => setName(e)} />
      <C.Label>Sua Altura:</C.Label>
      <C.Input value={height} onChangeText={(e) => setHeight(e)} />
      <C.Label>Sua Peso Ideal:</C.Label>
      <C.Input value={targetWeight} onChangeText={(e) => setTargetWeight(e)} />
      <C.ViewButton>
        <DefaultButton onPress={ConfirmAction} bgcolor="#4AC34E">
          <C.TextButton>Confimar Mudanças</C.TextButton>
        </DefaultButton>
      </C.ViewButton>
      <C.ViewButton>
        <DefaultButton onPress={resetAction} bgcolor="#ea0000">
          <C.TextButton>Resetar Tudo</C.TextButton>
        </DefaultButton>
      </C.ViewButton>
    </C.Container>
  );
};
