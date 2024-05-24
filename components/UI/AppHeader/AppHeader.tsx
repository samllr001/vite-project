interface TOAppHeader {
    headerText:string,
    headerType:"h1" 
}

const AppHeader = ({headerText, headerType}:TOAppHeader) => {
    return(
        <h1>{headerText}</h1>
    );
};

export default AppHeader;