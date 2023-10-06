import "./styles.css";

function F1()
{
const myStyle = {
color:"blue",
backgroundColor:"orange"
}
return(
<div class="c1">
<h1 style={{color:"red"}}>Inline styling</h1>
<h2 style={myStyle}>Internal styling</h2>
</div>
)
}

export function Home()
{
return <h1>Home component</h1>
}

export function About()
{
return <h1>About component</h1>
}
export function Blog()
{
return <h1>Blog component</h1>
}
export function Contact()
{
return <h1>Contact component</h1>
}



export default F1;
