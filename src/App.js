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
import linkedIcon from "./Images/linkedIcon.png"
import heart from "./Images/heart.svg"
import dijkstra from "./Images/dijkstra.png"
import planttracker from "./Images/planttracker.png"
import androidapp from "./Images/androidapp.png"
import djangopro from "./Images/djangopro.png"





import './App.css';

function App() {
  return (
    <div class= "bg-neutral-800  h-max font-sans scroll-smooth" >


      
      <nav class="top-0 sticky bg-viceblue border-gray-200 px-2 sm:px-4 py-1  dark:bg-gray-800 w-full ">
        <div class="flex justify-between text-white py-1 px-1 mx-auto">
          <a href="/" class="text-lg font-bold ">Daniel Navarro</a>
          <ul class="hidden md:flex flex-row items-center align-middle gap-5">
           
            <li><a href="#About"><button type="button" class="text-white bg-gradient-to-r from-viceblue to-vicepink hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-pink-400 dark:focus:ring-pink-400 font-semibold text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">About</button></a></li>
            <li><a href="#Skills"><button type="button" class="text-white bg-gradient-to-r from-viceblue to-vicepink hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-pink-400 dark:focus:ring-pink-400 font-semibold text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Skills</button></a></li>
            <li><a href="#Projects"><button type="button" class="text-white bg-gradient-to-r from-viceblue to-vicepink hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-pink-400 dark:focus:ring-pink-400 font-semibold text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full ">Projects</button></a></li>
            
            <li><button type="button" class="text-white bg-gradient-to-r from-viceblue to-vicepink hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-pink-400 dark:focus:ring-pink-400 font-semibold text-sm px-5 py-2.5 text-center mr-2 mb-1 mt-.5 rounded-full "  onClick={() => {
        window.location='mailto:dnava039@fiu.edu'
      }}>Contact</button></li>
      </ul>
            
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" class ="md:hidden hover:bg-vicepink ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              
              <div id="dropdown" class="hidden z-10 w-44 bg-neutral-800 rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul class="py-1 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefault">
                  
                  <li><a href="#About" class="block py-2 px-4 hover:bg-vicepink dark:hover:bg-gray-600 dark:hover:text-white ">About</a></li>
                  <li><a href="#Skills" class="block py-2 px-4 hover:bg-vicepink dark:hover:bg-gray-600 dark:hover:text-white">Skills</a></li>
                  <li><a href="#Projects" class="block py-2 px-4 hover:bg-vicepink dark:hover:bg-gray-600 dark:hover:text-white">Projects</a></li>
                  <li><a class="cursor-pointer block py-2 px-4 hover:bg-vicepink dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => {
        window.location='mailto:dnava039@fiu.edu'
      }}>Contact</a></li>
                </ul>
              </div>           
        </div>  
      </nav>


      
      <div class="fixed grid columns-1 bottom-5 left-2">
     
      <a class="cursor-pointer"onClick={(e) => {
       e.preventDefault();
       window.open("https://www.linkedin.com/in/danielnav/");
            }}> <img class="md:w-8 lg:w-14 pb-1"src={linkedIcon} height={25} width={25}/>  </a>

      
<a class="cursor-pointer"onClick={(e) => {
       e.preventDefault();
       window.open("https://github.com/dnava1");
            }}> <img class="md:w-8 lg:w-14 lg:mb-16 "src={githubIcon} height={25} width={25}/>  </a>
    
      </div>


      <div class= "bg-gradient-to-r from-neutral-800 to-viceblue  h-max font-sans scroll-smooth" >


      <div id="About" class="grid place-items-center">
      <h1  className="text-5xl md:text-7xl lg:text-8xl underline font-bold text-vicepink pt-10 pb-2 animate-bounceintro">
        Daniel Navarro
      </h1>
      <h2 className = "text-3xl md:text-5xl lg:text-6xl font-semibold text-viceblue pb-1 animate-bounceintro">
        Software Engineer
      </h2>
      <h3 className = "text-1xl md:text-2xl lg:text-3xl font-semibold text-white animate-bounceintro">
        Miami, Fl • 786-609-7234 • dnava039@fiu.edu
      </h3>
      
      <img src={profilepicture} height={310} width={310} class="pt-10"/>
      

        <h1 className = "text-center text-1xl md:text-2xl lg:text-3xl font-extrabold text-vicepink mx-auto py-2 max-w-screen-lg mt-10 px-10">
        I am a motivated and enthusiastic software developer completing my BS in Computer Science in Spring 2022. I enjoy building interesting software
        and solving the problems that come along. My hobbies include hiking, gardening, and cooking.
      </h1>

      <button class="rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 button text-white bg-gradient-to-r from-vicepink via-pink-500 to-vicepink hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-vicepink shadow-lg font-mediumtext-sm px-3 py-2.5 mb-20 text-center "
        
        onClick={(e) => {
        e.preventDefault();
        window.open("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*");
      }}>
       
          Download Resume
          
        </button>

        </div>
        </div>

        
      <h1 className = "text-5xl md:text-6xl lg:text-8xl font-extrabold text-viceblue grid place-items-center mt-24 mb-5 ">
        Education
      </h1>

      

       <h2 class ="text-white pt-5 lg:pt-10 text-2xl md:text-3xl lg:text-4xl grid place-items-center">
      
      <p class="font-bold text-center">
      🎓B.S. in Computer Science
      </p>

      
      <p class ="text-white  text-2xl md:text-3xl lg:text-4xl ml-5">
      •Florida International University
        <p>•Aug 2019 - May 2022</p>
        •GPA - 3.81
        <p > •Upsilon Pi Epsilon (UPE) </p>

      </p>
      </h2>

      <h1 className = "text-5xl md:text-6xl lg:text-8xl font-extrabold text-viceblue grid place-items-center mt-24 mb-5 center-text">
        Experience
      </h1>

       <h2 class ="text-white pt-5 lg:pt-10 text-2xl md:text-3xl lg:text-4xl grid place-items-center">
      
      <p class="font-bold text-center">
      📝Enumerator
      </p>

      
      <p class ="text-white  text-2xl md:text-3xl lg:text-4xl ml-5">
      •U.S. Census Bureau - Miami, Fl
        <p>•Jun 2020- Sep 2020</p>
        •GPA - 3.81
        <p > •Upsilon Pi Epsilon (UPE) </p>

      </p>
      </h2>
     
      

        <h1 class = "text-4xl md:text-5xl lg:text-7xl font-extrabold text-viceblue grid place-items-center mt-24 mb-10">
        Skills
      </h1>


      <div class="container mx-auto px-10">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-vicepink ">
            
            
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

          

         

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-vicepink">
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

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-vicepink">
           
           <h1 class="text-lg text-white mb-3 font-semibold">Frameworks</h1>
           <p class="loading-relaxed text-sm mb-3 columns-3">
           <img src={reactIcon}height={85} width={85} />
           <img src={tailwindIcon}height={85} width={85} />
           <img src={djangoIcon}height={85} width={85} />
           
           
           </p>
           
       </div>

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-vicepink">
           
              <h1 class="text-lg text-white mb-3 font-semibold">Databases</h1>
              <p class="loading-relaxed text-sm mb-3 columns-3">
              <img src={mongoIcon}height={85} width={85} />
              <img src={firebaseIcon}height={85} width={85} />
              <img src={liteIcon}height={85} width={85} />
              
              </p>
              
          </div>

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-vicepink">
            
            <h1 class="text-lg text-white mb-3 font-semibold">Concepts</h1>
            <p class="loading-relaxed text-sm mb-3 text-white">•Agile Methodoloy</p>
            <p class="loading-relaxed text-sm mb-3 text-white">•Object-Oriented Programming</p>
            <p class="loading-relaxed text-sm mb-3 text-white">•RESTful APIs</p>
            <p class="loading-relaxed text-sm mb-3 text-white">•Data Structures and Algorithms</p>
            
        </div>

          <div class="bg-neutral-900 rounded-md py-4 px-4 border-2 border-vicepink">
            
              <h1 class="text-lg text-white mb-3 font-semibold">Soft Skills</h1>
              
              <p class="loading-relaxed text-sm mb-3 text-white">•Detail Oriented</p>
              <p class="loading-relaxed text-sm mb-3 text-white">•Verbal and Written Communication</p>
              <p class="loading-relaxed text-sm mb-3 text-white">•Conflict Resolution</p>
              <p class="loading-relaxed text-sm mb-3 text-white">•Collaboration</p>
             
          </div>

         
    

        </div>


      </div>

      <div id="Projects" class="grid place-items-center ">

     
      
      <h1  className = "text-4xl md:text-5xl lg:text-7xl font-extrabold text-viceblue mt-24 mb-10">
        Projects
      </h1>
     



        </div>




        <div class="container mx-auto px-10">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">

        <div class="bg-neutral-900 rounded-md py-3 px-3 border-2 border-vicepink grid place-content-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ">
        <a onClick={(e) => {
       e.preventDefault();
       window.open("https://github.com/dnava1/DijkstraAlgorithm");
            }}>
            <div class="grid place-content-center mt-5">
            <img src={dijkstra}height={425} width={425} />

            </div>
          
              <h1 class="text-lg text-white mb-3 font-semibold text-center mt-5">Dijkstra Algorithm Visualizer</h1>
              <p class="text-center text-white">
               Developed a visualization tool that finds the shortest path between nodes in a graph using Dijkstra's Algorithm. Input is given by a text file containing
               a weighted adjacency matrix. Built using Java.
              
              
              
              </p>
              </a>
              
          </div>


          <div class="bg-neutral-900 rounded-md py-3 px-3 border-2 border-vicepink grid place-content-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ">
          <a onClick={(e) => {
       e.preventDefault();
       window.open("https://github.com/dnava1/plant-tracker");
            }}>
            <div class="grid place-content-center mt-5">
            <img src={planttracker}height={425} width={425} />

            </div>
          
              <h1 class="text-lg text-white mb-3 font-semibold text-center mt-5">Plant Tracker</h1>
              <p class="text-center text-white">
                Built a website that enables users to track the health of their plants. Designed with React.js and Firebase Firestore, along with Google Authentication. 
                User data is saved to their account and they can create plants, update them, and delete them. 
              
              
              
              </p>
              </a>
              
          </div>

          <div class="bg-neutral-900 rounded-md py-3 px-3 border-2 border-vicepink grid place-content-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ">
          <a onClick={(e) => {
       e.preventDefault();
       window.open("https://github.com/Mkamboykos/Anxiety-Stress-Self-Management");
            }}>
            <div class="grid place-content-center mt-5">
            <img src={androidapp}height={425} width={425} />

            </div>
          
              <h1 class="text-lg text-white mb-3 font-semibold text-center mt-5">Anxiety and Stress Self Management</h1>
              <p class="text-center text-white">
                Coordinated a team to develop an Android app using React Native and Firebase that aims to help the user control their stress and anxiety. Users are able to sign in with Google or
                create their own accounts, complete with password reset and email verification. Afterwards, a mood diary and stress exercises are available to relieve stress and anxiety. 
              
              
              
              </p>
              </a>
              
          </div>

          <div class="bg-neutral-900 rounded-md py-3 px-3 border-2 border-vicepink grid place-content-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ">
          <a onClick={(e) => {
       e.preventDefault();
       window.open("https://github.com/dnava1/Geek-Text");
            }}>
            <div class="grid place-content-center mt-5">
            <img src={djangopro}height={425} width={425} />

            </div>
          
              <h1 class="text-lg text-white mb-3 font-semibold text-center mt-5">Book Store Management</h1>
              <p class="text-center text-white">
                Led a team to develop a backend for a bookstore using Django. Work was accomplished using the Agile methodology. Individual features included administrator permission to create books and authors and their respective fields. Users are only allowed
                to read these objects. A REST API was integrated along with SQLite to handle requests.
                
              
              
              </p>
              </a>
              
          </div>
         

        </div >
        

      </div>
      <div class="pb-5"></div>

      <footer class="p-4 bg-zinc-600  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex flex-wrap items-center ml-5">
    <img src={heart} height={30} width={30} class="animate-beat"/>
      <p class="pl-3 text-white">Made with React.js and Tailwindcss. </p>
        


    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm ml-14 text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
        <a class="mr-4 hover:underline md:mr-6 text-white hover:cursor-pointer" onClick={(e) => {
       e.preventDefault();
       window.open("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*");
            }}>Resume</a>
        </li>
        <li>
        <a class="mr-4 hover:underline md:mr-6 text-white hover:cursor-pointer" onClick={(e) => {
       e.preventDefault();
       window.open("https://github.com/dnava1");
            }}>Github</a>
        </li>
        <li>
        <a class="mr-4 hover:underline md:mr-6 text-white hover:cursor-pointer" onClick={(e) => {
       e.preventDefault();
       window.open("https://www.linkedin.com/in/danielnav/");
            }}>LinkedIn</a>
        </li>
        <li>
        <a class="mr-4 hover:underline md:mr-6 text-white hover:cursor-pointer" onClick={(e) => {
       e.preventDefault();
       window.location='mailto:dnava039@fiu.edu'
            }}>Conact</a>
            
        </li>
    </ul>
</footer>

     

      
    
      

      
    </div>
  );
}

export default App;
