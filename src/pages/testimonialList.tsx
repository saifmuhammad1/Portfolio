import React from "react";
import {
  dummyTestominiObj,
  ITestomonialObj,
} from "../asset/dummyOnjects/testimonialObject";
import userProfile from "../asset/image/userVatart.png";

const TestimonialList = () => {
  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gray-900 px-10 py-10 md:px-20 gap-3  ">
      <div className="flex  justify-center">
        <p className=" py-1 px-3 rounded-full bg-gray-600  dark:bg-gray-400 text-gray-200 w-fit  ">
          Testimonial
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row gap-5 overflow-x-auto w-full  p-2">
        {dummyTestominiObj.map((obj: ITestomonialObj) => (
          <article
            key={obj.name}
            className="flex-none text-gray-600 flex flex-col gap-4 
      w-64 h-64 p-5 shadow-lg bg-white dark:bg-gray-700  rounded-xl dark:text-white "
          >
            <div className="flex justify-center">
              <div className="rounded-full bg-[#9CA3AF] p-2 flex justify-center items-center">
                <img src={userProfile} alt={obj.name} className="w-8 h-8" />
              </div>
            </div>

            <div className="flex flex-col justify-center text-center gap-3">
              <p className="text-xs whitespace-normal">{obj.testomoni}</p>

              <p className="font-semibold text-black dark:text-white">
                {obj.name.toUpperCase()}
              </p>

              <p className="text-xs">{obj.designation}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
