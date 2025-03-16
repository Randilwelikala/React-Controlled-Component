import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [gender,setGender] = useState('');
  const pronunList ={
    'Mr':'Male',
    'Ms':'Feamle',
    'Miss':'Female'
  };

  const handlePronounChange = (event)=>{
    const selectedPronoun = event.target.value;
    setGender(selectedPronoun);
  }
  return (
    <div className="App">
      <header className="App-header">
        <lable htmlFor='pronoun'>Select Pronoun</lable>
        <select key={'pronoun'} onChange={handlePronounChange}>
        <option value="">Select your pronoun</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
          <option value="Miss">Miss</option>

        </select>
        <br/>

        <input typr='text' placeholder ='First Name'/>
        <input typr='text' placeholder ='Last Name'/> 
        
        <div>
          <lable>Male</lable>
          <input value='Male' type='radio' name='gender'></input>
        </div>

        <div>
          <lable>Female</lable>
          <input value='Female' type='radio' name='gender'></input>
        </div>
        <p>{gender}</p>

        


      </header>
    </div>
  );
}

export default App;
