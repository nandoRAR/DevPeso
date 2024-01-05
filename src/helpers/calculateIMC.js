const calculateIMC = (weight, height) => {
    const imc = weight / (height * height);
    const newImc = imc.toFixed(2)
    return newImc;
};

export default calculateIMC;