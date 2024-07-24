import React from "react";
import Style from "./page.module.css";
import { IoCall } from "react-icons/io5";
import { BiSolidNavigation } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function page() {
  return (
    <div className="container-fluid bg-white">
      <div className="container">
        <div className="text-center">
          <h2>Contact us</h2>
          <p>Tortor at risus viverra adipiscing at in tellus integer.</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 g-md-1 mb-4">
          <div className="col">
            <div className="m-2 border rounded h-100 p-3 px-4">
              <div>
                <IoCall
                  size={55}
                  className={`p-3 rounded-circle ${Style["text-dark-hover"]}`}
                />
              </div>
              <div className="mb-3 mt-4">
                <h5>Phone</h5>
              </div>
              <div>
                <div>
                  <strong>Toll-Free:</strong> 0000 - 123 - 456789
                </div>
                <div>
                  <strong>Fax:</strong> 0000 - 123 - 456789
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="m-2 border rounded h-100 p-3 px-4">
              <div>
                <MdEmail
                  size={55}
                  className={`p-3 rounded-circle ${Style["text-dark-hover"]}`}
                />
              </div>
              <div className="mb-3 mt-4">
                <h5>Email</h5>
              </div>
              <div>
                <p>hardsheh@solutionanalysts.com</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="m-2 border rounded h-100 p-3 px-4">
              <div>
                <BiSolidNavigation
                  size={55}
                  className={`p-3 rounded-circle ${Style["text-dark-hover"]}`}
                />
              </div>
              <div className="mb-3 mt-4">
                <h5>Address</h5>
              </div>
              <div>
                <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-3 g-md-2 mb-4">
          <div className="col">
            <div className="border rounded h-100"></div>
          </div>
          <div className="col">
            <div className="row ps-2">
              <div className="col-12 mb-3">
                <input
                  type="text"
                  name=""
                  className="form-control rounded-pill"
                  id=""
                  placeholder="Name"
                />
              </div>
              <div className="col-12 mb-3">
                <input
                  type="email"
                  className="form-control rounded-pill"
                  id=""
                  placeholder="Email"
                />
              </div>
              <div className="col-12 mb-3">
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id=""
                  placeholder="Phone"
                />
              </div>
              <div className="col-12 mb-3">
                <textarea
                  cols={35}
                  className="form-control rounded h-100"
                  placeholder="Message"
                />
              </div>
              <div className="col-8">
                <button
                  type="button"
                  className="btn btn-outline-primary w-100 rounded-pill"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
