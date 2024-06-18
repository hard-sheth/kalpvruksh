"use client";

import { useState } from "react";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import Style from "./SearchOptions.module.css";
import { Spinner } from "reactstrap";
import ReactLoading from "react-loading";
interface labelsName {
  label: string;
  value: string | unknown | any;
}
interface searchProp {
  placeBtn: "right" | "left";
  btnText?: string | any;
  rounded: boolean;
  clearable: boolean;
  btnClick?: any;
  asynchonouse?: boolean;
  loading: boolean;
  loadingText?: string;
  options?: unknown[] | [];
  value?: labelsName | null;
  position?: "sticky" | "nonsticky";
}

function SearchInput({
  placeBtn = "right",
  btnText = <IoIosSearch />,
  rounded = false,
  btnClick,
  loadingText = "Loading...",
  options = [],
  value = null,
  position = "nonsticky",
  loading= true
}: searchProp) {
  const [selectValue, setSelectValue] = useState<string | unknown | any>(
    undefined
  );
  const [showOptions, setShowOptions] = useState<boolean>(false);
  console.log(options, "options");

  return (
    <div className={`${Style['sticky-search']} bg-white text-secondary ${rounded ? `border border-1 rounded-pill` : "" }`}>
      <div className="position-relative h-100">
        <div className={rounded ? `border border-1 rounded-pill` : "" + ` `}>
          <div className="d-flex justify-content-between">
            <div>
              {placeBtn == "left" && <button type="button">{btnText}</button>}
            </div>

            <div
              className={`d-flex align-items-center w-100 border border-1 ${
                rounded ? Style.searchparent : ""
              }`}
            >
              <input
                type="text"
                className={` ${Style.inputText}`}
                value={selectValue}
                onChange={(e) => {
                  setSelectValue(e.target.value);
                  setShowOptions(true);
                }}
              />
             {loading && <span
                onClick={() => {
                  setSelectValue("");
                  setShowOptions(true);
                }}
                className={`${Style["cursor-pointer"]} me-2`}
              >
               <ReactLoading type={'bubbles'} color="black" height={'100%'} width={'30px'} />        
              </span>}
            {selectValue?.length >0 && <span
                onClick={() => {
                  setSelectValue("");
                  setShowOptions(false);
                }}
                className={`${Style["cursor-pointer"]} me-2`}
              >
                <IoMdClose />
              </span>}
            </div>
            <div className="">
              {placeBtn == "right" && (
                <button type="button" className={`btn border-0`}>
                  {btnText}
                </button>
              )}
            </div>
          </div>
        </div>
        {showOptions && (
          <div className={`w-100 rounded ${Style.searchOptions}`}>
            {options?.length === 0 && (
              <div
                className={`text-center pt-2 bg-light rounded  align-content-center`}
              >
                {loadingText}
              </div>
            )}
            {options?.length >= 0 && (
              <div className=" py-2 bg-light rounded h-100 ">
                {options.map((item: labelsName | any, index: any) => {
                  return (
                    <div
                      key={index}
                      className={`ps-4 ${Style.searchlist} ${
                        value?.value === item.value ? "bg-primary" : ""
                      }`}
                      onClick={() => {
                        setSelectValue(item.value);
                        setShowOptions(false);
                      }}
                    >
                      {item.label}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
