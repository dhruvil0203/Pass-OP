import React from "react";

function Navbar() {
  return (
    <nav className=" bg-slate-800 text-white ">
      <div className="mycontainer flex px-4 py-4 justify-between items-center h-20">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500 items-center"> &lt;</span>
          Pass
          <span className="text-green-500 items-center">OP/&gt;</span>
        </div>
        <a
          href="https://github.com/dhruvil0203"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          <img
            src="/github.png"
            alt="Github Image"
            className="w-6 h-6 rounded-full object-cover "
          />
          <span className="font-semibold">GitHub</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
