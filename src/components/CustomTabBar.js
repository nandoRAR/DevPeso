import styled from 'styled-components/native';

const TabBarArea = styled.SafeAreaView`
    flex-direction: row;
    background-color: #EEE;
`;
const TabBarItem = styled.View`
    flex: 1;
    height: 65px;
    align-items: center;
`;
const TabRegular = styled.TouchableOpacity`
    align-items: center;
    height: 60px;
    justify-content: center;
`;
const Text = styled.Text`
    font-size: 20px;
`;




export default (props) => {
    const focusedOptions = props.descriptors[props.state.routes[props.state.index].key].options;
    if (focusedOptions?.tabBarStyle?.display === "none") {
        return null;
    }
    return (
        <TabBarArea>
            {props.items.map(item => (
                <TabBarItem key={item.route}>
                        <TabRegular underlayColor="transparent" onPress={() => props.navigation.navigate(item.route)}>                      
                                <Text>{item.text}</Text>
                        </TabRegular>
                    
                </TabBarItem>
            ))}
        </TabBarArea>
    );
}