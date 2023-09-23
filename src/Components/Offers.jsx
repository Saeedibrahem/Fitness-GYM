import React from "react";

function Offers() {
  const loop = [1, 2, 3];
  const Data = {
    image: "./assets/images/features.png",
    cat: "HEALTHIER LIFE",
    title: "Achieve Your Goals",
    body: "We believe that with the right guidance, support, and mindset, you can accomplish anything you set your mind to.",
    btn: "View Class Schedule",
  };
  return (
    <div className="flex container gap-4 md:justify-center ~~ lg:justify-start flex-wrap py-8">
      {loop.map((ele) => (
        <div
          key={ele}
          className="lg:w-[calc(100%/3-16px)] relative feature md:w-[calc(100%/2-16px)] overflow-hidden w-full bg-[#EDF2F7] p-8 text-white "
        >
          <div className="overlay">
            <img src={Data.image} className="w-full h-full" alt="" />
          </div>
          <div className="relative flex flex-col gap-4 ">
            <div className="logoo">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="4rem"
                width="3.5rem"
                className="text-main-color logoo"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M325.944 61.815l-98.26 24.566 147.158 66.891 98.263-24.566zM209.787 97.687v43.488l155.355 70.617v-43.489zM491 142.475l-108.159 27.04v62.929c-20.977 5.241-41.953 10.488-62.929 15.732v62.929c-20.977 5.241-41.953 10.488-62.929 15.732v62.93c-20.977 5.24-41.952 10.487-62.929 15.731v44.687L491 375.947zm-290.914 13.733l-35.332 8.834 147.16 66.891 35.334-8.834zm-53.228 20.14v43.488l155.355 70.617v-43.489zm-9.7 58.521l-35.333 8.834 147.16 66.891 35.334-8.834zm-53.23 20.14v43.488l155.357 70.617v-43.489zm-9.7 58.522l-35.331 8.834 147.159 66.89 35.334-8.834zM21 333.67v43.487l155.356 70.617v-43.488z" />
              </svg>
              <p className="text-main-color mt-3 text-[13px] font-bold ">
                {Data.cat}
              </p>
            </div>
            <h3 className="text-black text-[24px] mt-4 overflow-hidden group font-medium relative">
              {Data.title}
              <span className="absolute bottom-0  bg-white group-hover:translate-x-0 duration-300 || h-[3px] || -translate-x-[102%] w-full || left-0"></span>
            </h3>
            <p className="text-[#A0AEC0] mt-4">{Data.body}</p>
            <div className="">
              <button className="rounded-control || text-white || mt-4 font-semibold">
                {Data.btn}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offers;
