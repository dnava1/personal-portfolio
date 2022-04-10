import javaIcon from "./Images/javaIcon.png"; import htmlIcon from "./Images/htmlIcon.png"; import cssIcon from "./Images/cssIcon.png";
import javascriptIcon from "./Images/javascriptIcon.png";
import pythonIcon from "./Images/pythonIcon.png";
import cIcon from "./Images/cIcon.png";


import './App.css';

function App() {
  return (
    <div class= "bg-blue-200 h-screen" >

      <nav class="top-0 sticky bg-blue-700 border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800 w-full ">
        <div class="flex justify-between text-white py-1 px-1 mx-auto">
          <a href="/" class="text-lg font-bold">Daniel Navarro</a>
          <ul class="hidden md:flex flex-row items-center align-middle gap-5">
            <li><button type="button" class="text-white bg-gradient-to-r from-blue-700 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Home</button></li>
            <li><button type="button" class="text-white bg-gradient-to-r from-blue-700 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">About</button></li>
            <li><button type="button" class="text-white bg-gradient-to-r from-blue-700 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Skills</button></li>
            <li><button type="button" class="text-white bg-gradient-to-r from-blue-700 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Projects</button></li>
            <li><button type="button" class="text-white bg-gradient-to-r from-blue-700 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Contact</button></li>
            </ul>
            
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" class ="md:hidden hover:bg-blue-700 ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              
              <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li><a href="Home" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a></li>
                  <li><a href="About" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</a></li>
                  <li><a href="Contact" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Skills</a></li>
                  <li><a href="Contact" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects</a></li>
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
      <button type="button" class="py-2 px-4 ml-4 mt-4" 
      onClick={(e) => {
        e.preventDefault();
        window.open("https://github.com/dnava1");
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </button>

        <button class=" py-2 px-4 ml-4 mt-4" 
        onClick={(e) => {
        e.preventDefault();
        window.open("https://www.linkedin.com/in/danielnav/");
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        
        </button>
        
        </div>

        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-blue-700 rounded-lg group bg-gradient-to-br from-pink-400 to-pink-400 group-hover:from-pink-400 group-hover:to-pink-400  dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-400 dark:focus:ring-pink-400"
        
        onClick={(e) => {
        e.preventDefault();
        window.open("https://lmgtfy.app/?q=resume");
      }}>
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Download Resume
  </span>
        </button>

        </div>




      <div class="container mx-auto p-2">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div class="bg-white rounded-md py-4 px-4 border-2 border-pink-400">
            
            
              <h1 class="text-lg text-silver mb-3">Languages</h1>
              <p class="loading-relaxed text-sm mb-3 columns-3">
              <img src={javaIcon} height={65} width={65} />
              <img src={htmlIcon}/>
              <img src={cssIcon}/>
              <img src={javascriptIcon}/>
              <img src={pythonIcon}/>
              <img src={cIcon}/>
              
              
              
              
              </p>
              
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

      <h1 className = "text-2xl md:text-4xl lg:text-6xl font-extrabold text-blue-700 ">
        Skills
      </h1>

      <h1 className = "text-2xl md:text-4xl lg:text-6xl font-extrabold text-blue-700 ">
        Projects
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
