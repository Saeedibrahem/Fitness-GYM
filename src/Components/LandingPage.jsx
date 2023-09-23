import React from "react";

const LandingPage = () => {
  return (
    <>
      <div
        className="min-h-[calc(100vh-80px)] relative flex bg-slate-400"
        style={{
          backgroundImage: "url(./assets/images/1.avif)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[#00000080] left-0"></div>
        <div className="container  text-white relative  flex-1 flex flex-col justify-evenly">
          <div className="lg:w-1/2 w-full || flex flex-col gap-5 md:gap-0  ">
            <p>WELCOME TO FITNESS GYM</p>
            <h2 className="md:text-[5rem] text-[2.5rem] asd font-extrabold ">
              THE BEST FITNESS STUDIO IN TOWER
            </h2>
            <div className="">
              <button className="rounded-control">
                {" "}
                Make Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
