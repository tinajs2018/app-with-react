import React, {  useEffect ,useState}  from 'react'; 3.4

import './App.css';
const App= ()=>{
  const APP_ID = '9a6ce6d0';
  const APP_KEY =" a2b757d1ecebd9c929ccec76112bbea9	—";
  useEffect(() =>{
  getRecipes();
  }, [ ]);
const getRecipes = async() =>{
  const response=await fetch(  "https://api.edamam.com/search?q=chiken&app_id=${APP_ID }&app_key=${ APP_KEY}");
const data = await response.json ();
console.log(data);
  
};
return (
<div className="App">
<form  className="search -form">
<input className="search-bar" type="text"/>
<button     className="search-button"  type="submit">search </button>

</form>

</div>
);
}
export default App;
