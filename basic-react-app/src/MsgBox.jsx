
export default function MsgBox({username, textColor}){
    let styles = {color: textColor};
    return(
        <h2 style={styles}>Hello, {username}!</h2>
    );
}