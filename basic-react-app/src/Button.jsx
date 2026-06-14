function handleClick(event){
    console.log("Hello!");
    console.log(event);
}
function handleMouseOver(){
    console.log("Bye!");
}

function handleDbClick(){
    console.log("you double clicked!");
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>
            If there are conflicts between your local changes and the changes from GitHub, 
            Git will stop and notify you about the files that have conflicts. You will need to 
            manually resolve these conflicts by editing the files and deciding which version of the code to keep.
            </p>
            <button onDoubleClick={handleDbClick}>Double Click Me!</button>
        </div>
    );
}