import './App.css';
import clear from './components/clear.svg'
function App() {
  return (





    
    <div className="App">
     <div className='Header'>
     <form>
  <label>
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Find Weather" />
</form>
     </div>
     <div className='bodyWeather'>
  
            <img src={clear} alt="clear" />
            <h1>clear sky</h1>
            <h2>Temperature 24°C To 25°C</h2>
            <div className='humidityAndPressur'>
            <h3><strong>Humidity</strong> 72% </h3> <h3><strong>Pressure</strong> 1001.8</h3>
            </div>

     </div>


    </div>
  );
}

export default App;
