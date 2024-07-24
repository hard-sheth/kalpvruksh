import React from "react";
import Image from "next/image";
import { FaCoffee } from "react-icons/fa";
import Style from "./page.module.css";
import { FaEarthAsia } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

function page() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 mb-3">
          <div className="col">
            <h3  className={`${Style['spicy-rice-regular']}`}>The Richest Masala In The World</h3>
            <p>
              Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka
              dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper
              suscipit, posuere a, pede. Donec nec justo eget felis facilisis
              fermentum. Morbi in sem quis dui placerat ornare. Pellentesque
              odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
              Cras consequat
            </p>
            <p className="ps-3 border-start">
              Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis.
              Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
              pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem
              quis dui placerat ornare. Tortor dignissim convallis aenean et
              tortor. Ac tincidunt vitae semper quis lectus nulla at volutpat
              diam.
            </p>
          </div>
          <div className="col text-center">
            <Image
              src={`/asset/Spices-test.png`}
              alt="Some Spices Image"
              className="img-fluid text-center"
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row ">
            <div className="my-3 text-center">
              <h3  className={`${Style['spicy-rice-regular']}`}>Unique flavors spices</h3>
              <p>Quisque volutpat mattis eros.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 ">
              <div className="col">
                <div className="row ">
                  <div className={`col-3 col-md-2 text-center`}>
                    <FaCoffee
                      size={80}
                      className={`p-3 ${Style["text-dark-hover"]}`}
                    />
                  </div>
                  <div className="col-9 col-md-10">
                    <h2>Flavors</h2>
                    <p>
                      Sed vestibulum nulla elementum auctor tincidunt. Aliquam
                      sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum
                      enim nulla, sollicitudin ac hendrerit nec, tempor quis
                      nisl
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row ">
                  <div className={`col-3 col-md-2 text-center`}>
                    <FaEarthAsia
                      size={80}
                      className={`p-3 ${Style["text-dark-hover"]}`}
                    />
                  </div>
                  <div className="col-9 col-md-10">
                    <h2>Export</h2>
                    <p>
                      Sollicitudin ac hendrerit nec, tempor quis nisl. Sed
                      vestibulum nulla elementum auctor tincidunt. Aliquam sit
                      amet cursus mauris. Sed vitae mattis ipsum. Vestibulum
                      enim nulla,
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row ">
                  <div className={`col-3 col-md-2 text-center`}>
                    <IoPersonSharp
                      size={80}
                      className={`p-3 ${Style["text-dark-hover"]}`}
                    />
                  </div>
                  <div className="col-9 col-md-10">
                    <h2>Cultivation</h2>
                    <p>
                      Vestibulum enim nulla, sollicitudin ac hendrerit nec,
                      tempor quis nisl. Sed vestibulum nulla elementum auctor
                      tincidunt. Aliquam sit amet cursus mauris. Sed vitae
                      mattis ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row ">
                  <div className={`col-3 col-md-2 text-center`}>
                    <LuEye
                      size={80}
                      className={`p-3 ${Style["text-dark-hover"]}`}
                    />
                  </div>
                  <div className="col-9 col-md-10">
                    <h2>Testing</h2>
                    <p>
                      Aliquam sit amet cursus mauris. Sed vitae mattis ipsum.
                      Vestibulum enim nulla, sollicitudin ac hendrerit nec,
                      tempor quis nisl. Sed vestibulum nulla elementum auctor
                      tincidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="container mb-4">
          <div className="text-center">
            <h3  className={`${Style['spicy-rice-regular']}`}>A unique blended taste</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et male.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 mb-3 gy-3">
            <div className="col">
              <Image
                src={`/asset/spies1.webp`}
                alt="Spices Image"
                height={400}
                width={800}
                className="img-fluid"
              />
            </div>
            <div className="col">
              <h3 className={`${Style['spicy-rice-regular']}`}>The finest spice</h3>
              <p>
                Donec arcu purus, euismod nec eleifend et, luctus efficitur
                erat. Pellentesque at justo porttitor quis ornare ante integer
                quis ornare ante. Phasellus vel aliquam libero. Donec arcu
                purus, euismod nec eleifend et, luctus efficitur erat.
                Pellentesque at justo porttitor quis ornare ante integer quis
                ornare ante. Phasellus vel aliquam libero.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 mb-3 gy-3">
            <div className="col order-2 order-md-1 text-end">
              <h3 className={`${Style['spicy-rice-regular']}`}>The premium flavor</h3>
              <p>
                Pellentesque at justo porttitor quis ornare ante integer quis
                ornare ante. Phasellus vel aliquam libero. Donec arcu purus,
                euismod nec eleifend et, luctus efficitur erat. Pellentesque at
                justo porttitor quis ornare ante integer quis ornare ante.
                Phasellus vel aliquam libero. Donec arcu purus, euismod nec
                eleifend et, luctus efficitur erat.
              </p>
            </div>
            <div className="col order-1 order-md-2">
              <Image
                src={`/asset/spies1.webp`}
                alt="Spices Image"
                height={400}
                width={800}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light py-5">
        <div className="container mb-4">
          <div className="text-center">
            <h3  className={`${Style['spicy-rice-regular']}`}>Our Client Words</h3>
            <p>Pellentesque at justo porttitor quis</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-5"> </div>
    </div>
  );
}

export default page;
