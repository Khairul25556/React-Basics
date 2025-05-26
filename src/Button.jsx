function printHello(){
    console.log("Hello!");
}

function printBye(){
    console.log("Bye!");
}

function printHover(){
    console.log("Hover!");
}

function printDouble(){
    console.log("You double clicked me!");
}


function Button(){
    return(
        <div>
            <button onClick={printHello}>Click Me!</button>
            <p onClick={printBye}>This is clickable!</p>
            <p onMouseOver={printHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint in eaque ea odio aliquam est! Nemo placeat numquam perferendis, est, earum quo, qui dolore voluptatem iusto aperiam odio! Autem?</p>
            <button onDoubleClick={printDouble}>Double Click Me!</button>
        </div>
    );
};

export default Button;