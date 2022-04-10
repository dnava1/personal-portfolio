
import './App.css';

function App() {
  return (
    <div class= "bg-blue-200 h-screen" >
      <header class="flex justify-between text-white py-4 px-8">
        <a href="/" class="text-lg font-bold">Logo</a>
      <ul class="hidden md:flex flex-row items-center align-middle gap-5">
        <li><a href="Home" class="bg-pink-400 text-blue-200 py-2 px-4 rounded-md font-bold">Home</a></li>
        <li><a href="About" class="bg-pink-400 text-blue-200 py-2 px-4 rounded-md font-bold">About</a></li>
        <li><a href="Contact" class="bg-pink-400 text-blue-200 py-2 px-4 rounded-md font-bold">Contact</a></li>
      </ul>
      <button class ="md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
      </button>
      </header>

      <div class="grid place-items-center">
      <h1 className="text-3xl md:text-6xl lg:text-7xl underline font-extrabold text-blue-700 ">
        Personal Portfolio
      </h1>
      <h1 className = "text-2xl md:text-4xl lg:text-6xl font-extrabold text-blue-700">
        Daniel Navarro
      </h1>

      <div>
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




      <div class="container mx-auto p-2">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div class="bg-white rounded-md py-4 px-4 border-2 border-pink-400">
            <h2 class="tracking-widest text-xs mb-1">Category</h2>
              <h1 class="text-lg text-silver mb-3">TAILWIND CSS</h1>
              <p class="loading-relaxed text-sm mb-3">BL bladnsa dsanudasdnuasduas dasd asd asd asd asd as</p>
              <button class="bg-orange-500 text-sm text-white rounded-md px-4 py-1 customBtn">Click Me</button>
          </div>

          <div class="bg-white rounded-md py-4 px-4 border-2 border-pink-400">
            <h2 class="tracking-widest text-xs mb-1">Category</h2>
              <h1 class="text-lg text-silver mb-3">TAILWIND CSS</h1>
              <p class="loading-relaxed text-sm mb-3">BL bladnsa dsanudasdnuasduas</p>
              <button class="bg-orange-500 text-sm text-white rounded-md px-4 py-1 customBtn">Click Me</button>
          </div>

          <div class="bg-white rounded-md py-4 px-4 border-2 border-pink-400">
            <h2 class="tracking-widest text-xs mb-1">Category</h2>
              <h1 class="text-lg text-silver mb-3">TAILWIND CSS</h1>
              <p class="loading-relaxed text-sm mb-3">BL bladnsa dsanudasdnuasduas</p>
              <button class="bg-orange-500 text-sm text-white rounded-md px-4 py-1 customBtn">Click Me</button>
          </div>

          <div class="bg-white rounded-md py-4 px-4 border-2 border-pink-400">
            <h2 class="tracking-widest text-xs mb-1">Category</h2>
              <h1 class="text-lg text-silver mb-3">TAILWIND CSS</h1>
              <p class="loading-relaxed text-sm mb-3">BL bladnsa dsanudasdnuasduas</p>
              <button class="bg-orange-500 text-sm text-white rounded-md px-4 py-1 customBtn">Click Me</button>
          </div>

        </div>


      </div>

      
        </div>
  );
}

export default App;
