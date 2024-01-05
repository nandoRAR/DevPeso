const initialState = {
    name: '',
    height: '',
    currentWeight: '',
    targetWeight: '',
    currentIMC: '',
    register: []
};

export default (state = initialState, action) => {
    let register = [...state.register];

    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name };
            break;
        case 'SET_HEIGHT':
            return { ...state, height: action.payload.height };
            break;
        case 'SET_CURRENTWEIGHT':
            return { ...state, currentWeight: action.payload.currentWeight };
            break;
        case 'SET_TARGETWEIGHT':
            return { ...state, targetWeight: action.payload.targetWeight };
            break;
        case 'SET_IMC':
            return { ...state, currentIMC: action.payload.currentIMC };
            break;
        case 'ADD_REGISTER':
            register.unshift(action.payload.register);
            return { ...state, register };
            break;
        case 'EDIT_REGISTER':
            let index = register.findIndex(i => i.id === action.payload.register.id);
            if (index > -1) {
                register[index] = action.payload.register;
            }
            return { ...state, register };
            break;
        case 'DEL_REGISTER':
            register = register.filter(i => i.id!== action.payload.register.id);
            return { ...state, register };
            break;
        case 'RESET':
            return initialState;
            break;
    }

    return state;
};