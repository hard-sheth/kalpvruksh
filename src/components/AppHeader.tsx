"use client";
import Image from "next/image";
import { useState } from "react";
import SearchInput from "./SearchOptions";
import { CiMenuBurger } from "react-icons/ci";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container-fluid">
      <div className="row align-items-center gx-3">
        <div className="col-1 d-md-none">
          <button
            type="button"
            className="btn btn-light"
            onClick={toggleOffcanvas}
          >
            <CiMenuBurger />
          </button>
        </div>
        <div className="col-6 col-md-3 ms-auto ms-md-0">
          <Image
            src={`https://cdn-media.organictattva.com/media/logo/stores/1/OT-small.png`}
            alt="Some Random Logo"
            width={250}
            height={50}
            className="w-100 img-fluid"
          />
        </div>
        <div className="col-12 col-md-5 col-lg-3 ms-lg-auto">
          <SearchInput
            placeBtn="right"
            clearable={true}
            loading={false}
            rounded={true}
            position="sticky"
          />
        </div>
        <Offcanvas
          isOpen={isOpen}
          backdrop={false}
          scrollable
          toggle={toggleOffcanvas}
          className={`w-75 d-md-none`}
        >
          <OffcanvasHeader toggle={toggleOffcanvas}>
            <div className="col-12">
              <Image
                src={`https://cdn-media.organictattva.com/media/logo/stores/1/OT-small.png`}
                alt="Some Random Logo"
                width={250}
                height={70}
              />
            </div>
          </OffcanvasHeader>
          <OffcanvasBody>
            <div className="row row-cols-1 ">
              <div className="col m-0">
                <div className="row align-content-center">
                  <div className="col-2">
                    <Image
                      src={`https://cdn-media.organictattva.com/media/wysiwyg/codazon/menu/icon_menu/spices.png`}
                      alt="Some Grinding Pic"
                      height={30}
                      width={30}
                    />
                  </div>
                  <div className="col-10 me-auto">Spices & Masalas</div>
                </div>
              </div>
            </div>
            <p>
              This is the content of the Offcanvas. You can add any components
              or content you want inside the Offcanvas.
            </p>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </div>
  );
}

export default AppHeader;
