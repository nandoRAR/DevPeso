import styled from "styled-components/native";

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        margin: 0 30px;
    `,
    View: styled.View``,
    Label: styled.Text`
        font-size: 15px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    `,
    Input: styled.TextInput`
        border: 1px solid #CCC;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        font-size: 16px;
        padding: 10px;
    `,
    ViewButton: styled.View`
        margin-top: 50px;
    `,
    TextButton: styled.Text`
        color: #FFF;
    `,
}