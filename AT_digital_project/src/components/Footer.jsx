import React from "react";

const Footer = () => {
  return (
    <div className="bg-navbarcolor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className=" flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 md:pt-0">AT DIGITAL</h1>

          <p>
            Your goal is our target. Not anything in between. We use
            <br />
            online marketing platforms and tools to achieve single <br />
            objective - your business results.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-xl pb-4 md:pt-0">
            {" "}
            Our Technologies
          </h2>
          <nav className="flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              {" "}
              Reactjs
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              {" "}
              Gatsby
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              {" "}
              Nextjs
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              {" "}
              Nodejs
            </a>
          </nav>
        </div>

        <div>
          <h2 className="font-medium text-xl pb-4 md:pt-0 "> Our Services</h2>
          <nav className="flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Social media Marketing
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              {" "}
              Web & Mobile App Development
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              {" "}
              Data & Analytics
            </a>
          </nav>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <hr className="border-t border-gray-300" style={{ width: "630px" }} />
        <p className="text-center py-4">Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
