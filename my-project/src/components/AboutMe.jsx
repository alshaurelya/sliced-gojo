import React from 'react';
import('tailwindcss').Config
import AboutMePic from './Poloroid2.png';

const AboutMe = () => {
    return (
      <div className="container mx-auto my-8 p-8 bg-gray-50 rounded-lg shadow-xl">
        <div className="flex items-center justify-center mb-10">
        </div>

        <div class="grid grid-cols-2 gap-4 place-content-stretch h-48.">
            <div id="home" className="flex flex-col items-start justify-center ml-4">
                <h1 className="animate-bounce text-6xl font-extrabold mb-2">Welcome!</h1>
                <p className="text-lg">Hi, take a quick peek of my portofolio</p>
            </div>

            <div className="w-3/4 h-full align-middle ml-10">
                 <img
                  src={AboutMePic}
                  alt="My Photo"
                  className="w-full h-full object-cover"
                 />
            </div>
        </div> <br/>

        <div id="about" className="container mx-auto p-4 bg-gray-200 shadow-lg rounded-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">About Me</h2> 
            <p className="text-lg mb-2">
            I’m Alsha, an undergrad in Electrical Engineering at the University of Indonesia.<br />
            Beyond circuits, I'm passionate in crafting <a class="underline decoration-sky-500">'Visual Experiences'</a>. <br/>
            with <a class="font-bold">Video Editing, UI/Graphic Design, Photography, and Content Creation 🎥✨🎨.</a> <br/>
            Merging <a class="underline decoration-pink-500">Tech and Aesthetics </a>, 🔧
            exited to innovate in both engineering and design.  
            </p>
        </div> <br/>
  
        <div class="grid grid-cols-2 gap-4 place-content-stretch h-48.">
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700">Experience</h3>
                <p className="text-lg text-gray-800">
                In my two years on my high school's Student Council,<br/>
                I began as a dedicated staff member, then i ascended as <br/> 
                <a class="font-semibold">Head of the Publication and Documentation Division</a>, <br/>
                and also i led  a few documentation teams for various committees. <br/>
                Demonstrating leadership, I made a lasting impact on each initiative.
                </p>
            </div>
  
  
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700">Hobbies</h3>
                <p className="text-lg text-gray-800">
                    Apart from my uni life, <a class="font-semibold">I love photography and listening to music </a>
                    Whether I'm capturing moments through my lens or curating the perfect playlist, these hobbies add a ton of joy to my life. 
                    I also love connecting with people, sharing thoughts, and having meaningful conversations. Let's chat and share our interests!
                </p>
            </div>
        </div>
    </div>
    );
  };
  
  export default AboutMe;