import './App.css';
// import Home from './Home';
// import Bhojan from './Bhojan';
// import Mony from './Mony'
import { Add, Sub, Mul, Div } from './Calculator'

function App() {
  return (

    /*    <div style={{ margin: '150px auto', width: '600px', backgroundColor: 'yellowgreen', padding: '15px', borderRadius: '5px ' }}>
          <Home />
          <Bhojan />
          <Mony />
        </div>
    */
    <div style={{ margin: '100px 50px' }}>
      <h3>Small Calculator :- </h3>
      <ul style={{ margin: '20px 50px' }} >
        <li>Additon of 2 No. is {Add(5, 5)}</li>
        <li>Substraction of 2 No. is {Sub(15, 5)}</li>
        <li>Multiplication of 2 No. is {Mul(2, 5)}</li>
        <li>Division of  2 No. is {Div(19, 3)}</li>
      </ul>
    </div>
  );

}

export default App;
