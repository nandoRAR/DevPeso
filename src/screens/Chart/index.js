import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { BarChart } from "react-native-chart-kit";

import C from "./styles";

export default () => {
  const navigation = useNavigation();
  const listRegister = useSelector((state) => state?.userReducer?.register);
  const dataY = listRegister.map((item) => item.date);
  const dataX = listRegister.map((item) => item.weight);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Gráfico",
      headerTitleAlign: "center",
      headerTintColor: "#111",
      headerStyle: { backgroundColor: "#EEE" },
    });
  }, []);

  return (
    <C.Container>
      {listRegister.length > 0 && (
        <C.Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
          <BarChart
            data={{
              labels: dataY,
              datasets: [
                {
                  data: dataX,
                },
              ],
            }}
            showValuesOnTopOfBars={true}
            width={(listRegister.length > 4 ? listRegister.length : 4) * 95}
            height={400}
            yAxisSuffix={"Kg"}
            chartConfig={{
              backgroundGradientFrom: "#eff3ff",
              fillShadowGradient: "#4084F4",
              decimalPlaces: 2,
              barPercentage: 0.5,
              fillShadowGradientOpacity: 1,
              backgroundGradientFromOpacity: 1,
              backgroundGradientTo: "#ffffff",
              spacingInner: 0.7,
              backgroundGradientToOpacity: 1,
              color: () => `#4084F4`,
              labelColor: () => `black`,
              withShadow: false,           
              propsForBackgroundLines: {
                strokeWidth: 0,
              },             
            }}
            style={{
              marginVertical: 8,
              borderRadius: 0,
            }}
          />
        </C.Scroll>
      )}
    </C.Container>
  );
};
