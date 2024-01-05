import styled from "styled-components/native";

export default {

    Container: styled.SafeAreaView`
        background-color: #FFF;
        flex: 1;
        justify-content: center;
        align-items: center;
        padding: 0px 30px;
    `,
    WelcomeText: styled.Text`
        font-size: 22px;
        color: #333;
        margin-top: 50px;
    `,
    BeginConfigArea: styled.View`
        margin-top: 50px;
        width: 80%;
        margin-bottom: 50px;
    `,
    ButtonText: styled.Text`
        color: #FFF;
    `
}