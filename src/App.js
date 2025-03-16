import logo from './logo.svg';
import './App.css';

function App() {
  const pronunList ={
    'Mr':'Male',
    'Ms':'Feamle',
    'Miss':'Female'
  };
  return (
    <div className="App">
      <header className="App-header">
        <lable htmlFor='pronoun'>Select Pronoun</lable>
        <select key={'pronoun'}>
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

        


      </header>
    </div>
  );
}

export default App;
