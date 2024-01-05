import styled from "styled-components/native";

export default {
    Container: styled.SafeAreaView`
        background-color: #e6e6fa;
        flex: 1;
        flex-direction: column;
        padding: 0px 10px;
    `,
    FlatList: styled.FlatList``,
    RegisterView: styled.View`
        margin-top: 30px;
        background-color: #FFF;
        padding: 20px;
        flex-direction: column;
        border-width: 0.5px;
        border-radius: 20px;
    `,
    DateView: styled.View`
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
    `,
    Line: styled.View`
        background-color: #CCC;
        height: 1px;
        margin-top: 10px;
    `,
    InfoView: styled.View`
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: nowrap;
        margin-top: 20px;
    `,
    WeightView: styled.View``,
    CheckView: styled.View`
        flex-direction: row;
        justify-content: space-around;
        margin-top: 20px;
    `,
    TesteView: styled.View`
        flex-direction: row;
    `,
    DateText: styled.Text`
        font-size: 15px;
        font-weight: bold;
   `,
    LabelText: styled.Text`
        font-size: 15px;
    `,
    ItenImage: styled.Image`
        width: 15px;
        height: 15px;
        align-self: center;   
  `,
    EditButtonArea: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
    `,
    EditImage: styled.Image`
        width: 30px;
        height: 30px;
        align-self: center;   
  `,
    ChartButtonArea: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
        margin-right: 10px
    `,
    ChartButtonImage: styled.Image`
        width: 25px;
        height: 25px;
    `,
}