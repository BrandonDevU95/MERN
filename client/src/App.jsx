import React from 'react';
import Admin from './Pages/Admin'
import SingIn from './Pages/Admin/SignIn.jsx'
import Home from './Pages/Admin/Home.jsx'
import Contact from './Pages/Contact.jsx' 

function App() {
  return (
	 <div>
		<h1>Estamo en App.js</h1>
		<Admin/>
		<SingIn/>
		<Home/>
		<Contact/>
	 </div>
  );
}

export default App;
