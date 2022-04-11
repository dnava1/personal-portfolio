import javaIcon from "./Images/javaIcon.png"; import htmlIcon from "./Images/htmlIcon.png"; import cssIcon from "./Images/cssIcon.png";
import javascriptIcon from "./Images/javascriptIcon.png";
import pythonIcon from "./Images/pythonIcon.png";
import cIcon from "./Images/cIcon.png";
import sqlIcon from "./Images/sqlIcon.png";
import gitIcon from "./Images/gitIcon.png";
import reactIcon from "./Images/reactIcon.png";
import tailwindIcon from "./Images/tailwindIcon.png"
import mongoIcon from "./Images/mongoIcon.png"
import djangoIcon from "./Images/djangoIcon.png"
import firebaseIcon from "./Images/firebaseIcon.png"
import liteIcon from "./Images/liteIcon.png"
import androidIcon from "./Images/androidIcon.png"
import puttyIcon from "./Images/puttyIcon.png"
import winscpIcon from "./Images/winscpIcon.png"
import vsIcon from "./Images/vsIcon.png"
import githubIcon from "./Images/githubIcon.png"
import postIcon from "./Images/postIcon.png"
import npmIcon from "./Images/npmIcon.png"
import profilepicture from "./Images/profilepicture.png"
import educationIcon from "./Images/educationIcon.png"
import heart from "./Images/heart.svg"




import './App.css';

function App() {
  return (
    <div class= "bg-neutral-800 h-max font-sans" >

      <nav class="top-0 sticky bg-blue-800 border-gray-200 px-2 sm:px-4 py-1  dark:bg-gray-800 w-full ">
        <div class="flex justify-between text-white py-1 px-1 mx-auto">
          <a href="/" class="text-lg font-bold ">Daniel Navarro</a>
          <ul class="hidden md:flex flex-row items-center align-middle gap-5">
           
            <li><a href="#About"><button type="button" class="text-white bg-gradient-to-r from-blue-800 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-pink-400 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">About</button></a></li>
            <li><a href="#Skills"><button type="button" class="text-white bg-gradient-to-r from-blue-800 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-pink-400 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Skills</button></a></li>
            <li><a href="#Projects"><button type="button" class="text-white bg-gradient-to-r from-blue-800 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-pink-400 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Projects</button></a></li>
            
            <li><button type="button" class="text-white bg-gradient-to-r from-blue-800 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-pink-400 dark:focus:ring-pink-400 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full "  onClick={() => {
        window.location='mailto:dnava039@fiu.edu'
      }}>Contact</button></li>
      </ul>
            
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" class ="md:hidden hover:bg-blue-700 ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              
              <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                  
                  <li><a href="#About" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</a></li>
                  <li><a href="#Skills" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Skills</a></li>
                  <li><a href="#Projects" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects</a></li>
                  <li><a class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => {
        window.location='mailto:dnava039@fiu.edu'
      }}>Contact</a></li>
                </ul>
              </div>           
        </div>  
      </nav>


      <div id="About" class="grid place-items-center ">
      <h1  className="text-4xl md:text-6xl lg:text-8xl underline font-bold text-sky-300 pt-10">
        Daniel Navarro
      </h1>
      <h2 className = "text-2xl md:text-4xl lg:text-6xl font-semibold text-sky-300">
        Software Engineer
      </h2>
      <h3 className = "text-1xl md:text-2xl lg:text-3xl font-semibold text-sky-300">
        Miami, Fl • 786-609-7234 • dnava039@fiu.edu
      </h3>
      
      <img src={profilepicture} height={300} width={300} class="pt-10"/>
      

    

      <div class="py-2">

      <button type="button" class="hover:animate-pulse px-4 mt-1 mb-2" 
      onClick={(e) => {
        e.preventDefault();
        window.open("https://github.com/dnava1");
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        
        </button>

        <button class="hover:animate-pulse  px-4 mt-1" 
        onClick={(e) => {
        e.preventDefault();
        window.open("https://www.linkedin.com/in/danielnav/");
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        
        
        </button>
        
        </div>

       

        

        <h1 className = "text-center text-1xl md:text-2xl lg:text-3xl font-extrabold text-pink-500 mx-auto py-2 max-w-screen-lg mt-10 px-10">
        I am a motivated and enthusiastic software developer completing my BS in Computer Science in Spring 2022. I enjoy building interesting software
        and solving the problems that come along. My hobbies include hiking, gardening, and cooking.
      </h1>

      <button class="rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 button text-white bg-gradient-to-r from-pink-700 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg font-mediumtext-sm px-3 py-2.5 text-center "
        
        onClick={(e) => {
        e.preventDefault();
        window.open("https://lmgtfy.app/?q=resume");
      }}>
       
          Download Resume
          
        </button>

        </div>

        

        
      <p className ="grid place-content-center">
fsdfsdfs
      </p>

      <h1 className = "text-2xl md:text-4xl lg:text-6xl font-bold text-sky-300 grid place-items-center">
        Experience and Education
        

      </h1>
      <h2 className ="grid place-content-center text-white">
      <img src={educationIcon} />
         B.S. - Computer Science

      </h2>
      <p className ="grid place-content-center text-white">
        Florida International University - Miami, FL

      </p>
      

        <h1 id="Skills" className = "text-2xl md:text-4xl lg:text-6xl font-bold text-blue-700 grid place-items-center">
        Skills
      </h1>





      <div class="container mx-auto px-10">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700 ">
            
            
              <h1 class="text-lg text-white mb-3 font-semibold ">Languages</h1>
              <p class="loading-relaxed text-sm mb-3 columns-3">
              <img src={javaIcon} height={85} width={85}  />
             
              <img src={htmlIcon} height={85} width={85} />
              <img src={cssIcon} height={85} width={85} />
              <img src={javascriptIcon} height={85} width={85} />
              <img src={pythonIcon} height={85} width={85} />
              <img src={cIcon}height={85} width={85} />
              <img src={sqlIcon}height={85} width={85} />
              
              </p>
              
              
          </div>

          

         

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700">
              <h1 class="text-lg text-white mb-3 font-semibold">Tools</h1>
              <p class="loading-relaxed text-sm mb-3 columns-3">
              <img src={gitIcon}height={85} width={85} />
              <img src={androidIcon}height={85} width={85} />
              <img src={puttyIcon}height={85} width={85} />
              <img src={postIcon}height={85} width={85} />
              <img src={vsIcon}height={85} width={85} />
              <img src={winscpIcon}height={85} width={85} />
              <img src={githubIcon}height={85} width={85} />
              <img src={npmIcon}height={85} width={85} />
              </p>
              
          </div>

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700">
           
           <h1 class="text-lg text-white mb-3 font-semibold">Frameworks</h1>
           <p class="loading-relaxed text-sm mb-3 columns-3">
           <img src={reactIcon}height={85} width={85} />
           <img src={tailwindIcon}height={85} width={85} />
           <img src={djangoIcon}height={85} width={85} />
           
           
           </p>
           
       </div>

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700">
           
              <h1 class="text-lg text-white mb-3 font-semibold">Databases</h1>
              <p class="loading-relaxed text-sm mb-3 columns-3">
              <img src={mongoIcon}height={85} width={85} />
              <img src={firebaseIcon}height={85} width={85} />
              <img src={liteIcon}height={85} width={85} />
              
              </p>
              
          </div>

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700">
            
            <h1 class="text-lg text-white mb-3 font-semibold">Concepts</h1>
            <p class="loading-relaxed text-sm mb-3 text-white">•Agile Methodoloy</p>
            <p class="loading-relaxed text-sm mb-3 text-white">•Object-Oriented Programming</p>
            <p class="loading-relaxed text-sm mb-3 text-white">•RESTful APIs</p>
            <p class="loading-relaxed text-sm mb-3 text-white">•Data Structures and Algorithms</p>
            
        </div>

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700">
            
              <h1 class="text-lg text-white mb-3 font-semibold">Soft Skills</h1>
              
              <p class="loading-relaxed text-sm mb-3 text-white">•Detail Oriented</p>
              <p class="loading-relaxed text-sm mb-3 text-white">•Verbal and Written Communication</p>
              <p class="loading-relaxed text-sm mb-3 text-white">•Conflict Resolution</p>
              <p class="loading-relaxed text-sm mb-3 text-white">•Collaboration</p>
             
          </div>

         
    

        </div>


      </div>

      <div class="grid place-items-center">

     
      
      <h1 id="Projects" className = "text-2xl md:text-4xl lg:text-6xl font-extrabold text-sky-300 ">
        Projects
      </h1>
     



      <button class="bg-blue-500 hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded ml-4 mt-4" onClick={() => {
        window.location='mailto:dnava039@fiu.edu'
      }}>
        Send an Email</button>
        </div>




        <div class="container mx-auto px-10">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700 ">
            
            
              <h1 class="text-lg text-white mb-3 font-semibold ">Languages</h1>
              <p class="loading-relaxed text-sm mb-3 columns-3">
              <img src={javaIcon} height={85} width={85}  />
             
              <img src={htmlIcon} height={85} width={85} />
              <img src={cssIcon} height={85} width={85} />
              <img src={javascriptIcon} height={85} width={85} />
              <img src={pythonIcon} height={85} width={85} />
              <img src={cIcon}height={85} width={85} />
              <img src={sqlIcon}height={85} width={85} />
              
              </p>
              
              
          </div>

          

         

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700">
              <h1 class="text-lg text-white mb-3 font-semibold">Tools</h1>
              <p class="loading-relaxed text-sm mb-3 columns-3">
              <img src={gitIcon}height={85} width={85} />
              <img src={androidIcon}height={85} width={85} />
              <img src={puttyIcon}height={85} width={85} />
              <img src={postIcon}height={85} width={85} />
              <img src={vsIcon}height={85} width={85} />
              <img src={winscpIcon}height={85} width={85} />
              <img src={githubIcon}height={85} width={85} />
              <img src={npmIcon}height={85} width={85} />
              </p>
              
          </div>

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700">
           
           <h1 class="text-lg text-white mb-3 font-semibold">Frameworks</h1>
           <p class="loading-relaxed text-sm mb-3 columns-3">
           <img src={reactIcon}height={85} width={85} />
           <img src={tailwindIcon}height={85} width={85} />
           <img src={djangoIcon}height={85} width={85} />
           
           
           </p>
           
       </div>

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700">
           
              <h1 class="text-lg text-white mb-3 font-semibold">Databases</h1>
              <p class="loading-relaxed text-sm mb-3 columns-3">
              <img src={mongoIcon}height={85} width={85} />
              <img src={firebaseIcon}height={85} width={85} />
              <img src={liteIcon}height={85} width={85} />
              
              </p>
              
          </div>

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700 hover:opacity-70 cursor-pointer">
            <a onClick={(e) => {
       e.preventDefault();
       window.open("https://google.com");
            }}>
            
            <h1 class="text-lg text-white mb-3 font-semibold">Plant Tracker</h1>
            <p class="loading-relaxed text-sm mb-3 text-white">•Agile Methodoloy</p>
            <p class="loading-relaxed text-sm mb-3 text-white">•Object-Oriented Programming</p>
            <p class="loading-relaxed text-sm mb-3 text-white">•RESTful APIs</p>
            <p class="loading-relaxed text-sm mb-3 text-white">•Data Structures and Algorithms</p>
            </a>
            
        </div>

        

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-pink-700 hover:opacity-70 cursor-pointer">
          <a onClick={(e) => {
       e.preventDefault();
       window.open("https://google.com");
            }}>
            
              <h1 class="text-lg text-white mb-3 font-semibold">Soft Skills</h1>

             

              
              <p class="loading-relaxed text-sm mb-3 text-white">•Detail Oriented</p>
              <p class="loading-relaxed text-sm mb-3 text-white">•Verbal and Written Communication</p>
              <p class="loading-relaxed text-sm mb-3 text-white">•Conflict Resolution</p>
              <p class="loading-relaxed text-sm mb-3 text-white">•Collaboration</p>
              </a>
             
          </div>

        

         
    

        </div>
        

      </div>
      <h1>SOMETHING GOES HERE</h1>

      <footer class="p-4 bg-zinc-600  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex flex-wrap items-center">
    <img src={heart} height={25} width={25} class="animate-beat"/>
      <p class="pl-3 text-white">Made with React.js and Tailwindcss. </p>
        


    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 text-white ">Resume</a>
        </li>
        <li>
            <a href="#" class="hover:underline text-white">Contact</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
        </li>
       
    </ul>
</footer>

     

      
    
      

      
    </div>
  );
}

export default App;
