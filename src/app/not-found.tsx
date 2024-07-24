'use client'
import { Metadata } from "next";
import React from "react";
import Style from "./page.module.css";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Sp Site",
  description: "Sorry! Page Not Found",
};
export default function NotFound() {
  const router = useRouter();
  console.log("page not found");
  // You can add any UI inside Loading, including a Skeleton.
  const send = async () => {
    
    // await sendMail({
    //   to: "hard.sheth.sa@gmail.com",
    //   name: "hard sheth",
    //   subject: "Test Mail",
    //   body: 'Hello test mail'
    // });
  };
  return (
    <div className="position-relative">
      <div className="container">
        <div className="col-10 mx-auto">
          <div className="text-center">
            <img
              src="/asset/404-no-page.avif"
              alt="Sorry! No Page Found"
              className={`rounded ${Style.notFound}`}
            />
          </div>
          <h1 className="text-primary text-sm-center">Page Not Found</h1>
          <div className="row">
            <div className="col-12 col-sm-7 mx-auto">
              <ul className="list-unstyled ">
                <li>Sorry, but the page you are looking for is not found.</li>
                <li>Please, make sure you have typed the current URL.</li>
                <li>We looked everywhere for this page.</li>
                <li>Are you sure the website URL is correct?</li>
                <li>Get in touch with the site owner.</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-4 col-lg-2 mx-auto">
              <button
                className="btn btn-outline-primary w-100 rounded-pill"
                type="button"
                onClick={() => {
                  router.back()
                  // send()
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
