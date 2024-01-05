import styled from "styled-components/native";

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        margin: 0 30px;
    `,
    TextTitle: styled.Text`
        font-size: 15px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    `,
    TextButton : styled.Text`
        color: white;
    `,
     WeightInput : styled.TextInput`
        border: 1px solid #CCC;
        margin: 20px 0px;
        width: 200px;
        height: 40px;
        border-radius: 10px;
        font-size: 16px;
        padding: 10px;
    `,
    ViewButton: styled.View`
        justify-content: center;
        align-items: center;
        margin-top: 22px;
    `,
    ViewButtonConfirm: styled.View`
        margin-top: 50px;
    `,
}