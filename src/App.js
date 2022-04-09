
import './App.css';

function App() {
  return (
    <div class= "bg-blue-200 h-screen" >
      <div class="grid place-items-center">
      <h1 className="text-3xl md:text-6xl lg:text-7xl underline font-extrabold text-blue-700 ">
        Personal Portfolio
      </h1>

      
      
      <h1 className = "text-2xl md:text-4xl lg:text-6xl font-extrabold text-blue-700">
        Daniel Navarro
      </h1>
      <div classname="grid-cols-3">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded ml-4 mt-4" onClick={(e) => {
        e.preventDefault();
        window.open("https://github.com/dnava1");
      }}>
        GitHub</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded ml-4 mt-4" onClick={(e) => {
        e.preventDefault();
        window.open("https://www.linkedin.com/in/danielnav/");
      }}>
        Linkedin</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded ml-4 mt-4" onClick={(e) => {
        e.preventDefault();
        window.open("https://lmgtfy.app/?q=resume");
      }}>
        Resume</button>
        </div>
        </div>
        </div>
  );
}

export default App;
