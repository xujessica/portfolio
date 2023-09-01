import React from "react";
import userData from "@constants/data";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 md:px-10">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900 md:px-10">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}.
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4 md:px-10">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto gap-y-20 gap-x-20">
          <div className="col-span-2 md:col-span-2">
            <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
          </div>
          <div className="col-span-2 pt-16">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-l text-gray-700 mb-4 dark:text-gray-300 pt-6"
              >
                {desc}
              </p>
            ))}
            <div className="pt-6">
              <Link
                href={userData.resume}
                className="w-64 mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-l font-semibold flex flex-row  items-stretch dark:text-gray-700"
              >
                <p>Download my resume</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
