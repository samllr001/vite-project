interface TOAppInput {
    inputType: "text" | "tel",
    inputPlaceholder: string
}

const AppInput = ({inputType, inputPlaceholder}:TOAppInput) => {
    return(
        <input inputType="text" inputPlaceholder="Ваш ответ" />
    );
};

export default AppInput;