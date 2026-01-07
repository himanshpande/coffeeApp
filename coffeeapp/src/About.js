import React, { useState } from 'react';

export default function About() {
  const [Read,setRead]=useState(false);
  const[Hide,setHide]=useState(false);
  const readMore=()=>{
    setRead(true);
    setHide(false);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f3f0] px-4 py-8">
      <div className="max-w-3xl text-center">
        {/* <div className="mb-8 flex justify-center">
          <img
            src=""
            alt="Floral illustration"
            className="w-48 h-auto"
          />
        </div> */}

        <h2 className="text-6xl md:text-5xl font-serif tracking-wider mb-6 text-[#4a4a4a]">
          ABOUT ROBUSTA
        </h2>

      
        <p className="text-base md:text-lg leading-relaxed text-[#a8a8a8] max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        </p>
        {Read &&
        <p className="text-base md:text-lg leading-relaxed text-[#a8a8a8] max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        </p>
}

        <button className="text-sm font-semibold text-amber-600 hover:text-amber-500 transition" onClick={readMore}> Read More → </button>
        {Hide &&
                <button className="text-sm font-semibold text-amber-600 hover:text-amber-500 transition" onClick={readMore}> Read More → </button>
}
      </div>
    </div>
  );
}