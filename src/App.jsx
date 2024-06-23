import "./styles.css";
import Homepage from "./components/Homepage";
import React , {useState , useEffect}  from "react";

export default function App() {
  // const [data, setData] = useState(null);

//   async function hitdata()
//   {
// try {
  
// const res = await fetch("http://localhost:3001/api" )
// console.log(res);
// const res1 = await res.json()
// } catch (error) {
//   console.log(error);
// }
//   }

//   useEffect(() => {
//     hitdata()
//   }, []);

  return <Homepage />;
}
