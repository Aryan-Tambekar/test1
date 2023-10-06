import { useEffect } from "react";
import Axios from "axios";

function LandingPage()
{
useEffect(()=>{
Axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
if(res.status === 200)
{
console.log(res);
}
else{
Promise.reject();
}
})
.catch((err)=>alert(err))
},[])
return(
<div>
<h1>Landing Page</h1>
</div>
)
}
export default LandingPage;
