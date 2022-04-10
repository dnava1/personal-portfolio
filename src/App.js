
import './App.css';

function App() {
  return (
    <div class= "bg-blue-200 h-screen" >

      <nav class="bg-black border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800 fixed w-full top-0">
        <div class="flex justify-between text-white py-1 px-1 mx-auto">
          <a href="/" class="text-lg font-bold">Daniel Navarro</a>
          <ul class="hidden md:flex flex-row items-center align-middle gap-5">
            <li><button type="button" class="text-white bg-gradient-to-r from-blue-700 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Home</button></li>
            <li><button type="button" class="text-white bg-gradient-to-r from-blue-700 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">About</button></li>
            <li><button type="button" class="text-white bg-gradient-to-r from-blue-700 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Skills</button></li>
            <li><button type="button" class="text-white bg-gradient-to-r from-blue-700 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Project</button></li>
            <li><button type="button" class="text-white bg-gradient-to-r from-blue-700 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Contact</button></li>
            </ul>
            
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" class ="md:hidden hover:bg-blue-700 ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              
              <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li><a href="Home" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a></li>
                  <li><a href="About" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</a></li>
                  <li><a href="Contact" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</a></li>
                </ul>
              </div>           
        </div>  
      </nav>


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

      


      
      <div class="grid place-items-center">

      <h1 className = "text-2xl md:text-4xl lg:text-6xl font-extrabold text-blue-700 ">
        About
      </h1>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded ml-4 mt-4" onClick={() => {
        window.location='mailto:dnava039@fiu.edu'
      }}>
        Send an Email</button>
        </div>

      

      
    </div>
  );
}

export default App;
