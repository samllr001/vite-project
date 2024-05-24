interface TOAppButton {
    buttonText:string,
    buttonType:"submit" | "button" 
    isDisabled:boolean
}

const AppButton = ({buttonText, buttonType, isDisabled}:TOAppButton) => {
    return(
        <button type={buttonType} disabled={isDisabled}>{buttonText}</button>
    );
};

export default AppButton;