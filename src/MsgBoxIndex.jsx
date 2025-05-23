import MsgBox from "./msgBox";

function MsgBoxIndex(){
    
    return(
        <>
        <MsgBox username={"Khairul"} textColor={"blue"} />
        <MsgBox username={"Elon Musk"} textColor={"Red"} />
        <MsgBox username={"Morty"} textColor={"Yellow"} />
        <MsgBox username={"Rick"} textColor={"green"} />
        </>
    );
};

export default MsgBoxIndex;