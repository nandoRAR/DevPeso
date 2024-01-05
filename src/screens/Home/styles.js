import styled from "styled-components/native";

export default {
    Container: styled.SafeAreaView`
        background-color: #e6e6fa;
        flex: 1;
        align-items: center;
        padding: 0px 30px;
    `,
    HeaderText: styled.Text`
        font-size: 22px;
        margin: 60px 0px;
        font-weight: bold;
   `,
    TitleText: styled.Text`
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: bold;
    `,
    LabelText: styled.Text`
        font-size: 18px;
        margin-bottom: 40px;
   `,
    ConfigButtonArea: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
    `,
    ConfigButtonImage: styled.Image`
        width: 25px;
        height: 25px;
    `,
    TextButton: styled.Text`
        color: #FFF;
    `,
}