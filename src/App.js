import logo from './logo.svg';
import './App.css';
import './User';
import User from './User';
import Customer from './Customer'

function App() {
  return (
    <div className="App">
      <h1>App Component</h1> 
      <User data={{name:'priya', age:21}} />
    <Customer data1={{name:'ajay', age:40}}/>
    </div>
    
  );
}

export default App;
