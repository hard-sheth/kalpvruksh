import { FaCoffee, FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { LuEye } from "react-icons/lu";
import { FaEarthAsia } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; 

function App() {
  const childRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // The target element is not visible
            console.log('Element is not visible on the screen!');
            // Trigger your action here
            setIsVisible(true)
          }
          else{
            setIsVisible(false)
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the element is out of view
      }
    );

    const currentTarget = childRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  console.log(isVisible, 'isVisible');  

  return (
    <div className="container-fluid">
      <div className={`nav-visible bg-dark ${isVisible?'show':'hide'}`}  >
        <div className="d-flex align-items-center py-3 ">
          <div className="col-10">
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item bg-transparent text-white border-0">
                Home
              </li>
              <li className="list-group-item bg-transparent text-white border-0">
                Gourmet Foods
              </li>
              <li className="list-group-item bg-transparent text-white border-0">
                Shop
              </li>
              <li className="list-group-item bg-transparent text-white border-0">
                Grocery
              </li>
              <li className="list-group-item bg-transparent text-white border-0">
                Cooking Oil
              </li>
              <li className="list-group-item bg-transparent text-white border-0">
                Beverages
              </li>
              <li className="list-group-item bg-transparent text-white border-0">
                Pages
              </li>
            </ul>
          </div>
          <div className="col-2 text-end text-white">
            <ul className="d-flex justify-content-around  m-0 p-0 ">
              <li>
                <FaSearch size={20} />
              </li>
              <li>USD</li>
              <li>
                <FaShoppingCart size={20} />
              </li>
              <li>
                <FaUserAlt size={20} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-top">
        <div className="container">
          
          <div className="logo text-center" ref={childRef}>
            <a href="/">
              <img
                src="//waffy-demo.myshopify.com/cdn/shop/files/logo_300x300.png?v=1614285629"
                alt="Waffy (password: buddha)"
                style={{ maxWidth: "250px" }}
              />
            </a>
          </div>
          <div className="row bg-dark align-items-center py-3 mt-3">
            <div className="col-9">
              <ul className="list-group list-group-horizontal ">
                <li className="list-group-item bg-transparent text-white border-0">
                  Home
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  Gourmet Foods
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  Shop
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  Grocery
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  Cooking Oil
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  Beverages
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  Pages
                </li>
              </ul>
            </div>
            <div className="col-3 text-end text-white">
              <ul className="d-flex justify-content-around  m-0 p-0 ">
                <li>
                  <FaSearch size={20} />
                </li>
                <li>USD</li>
                <li>
                  <FaShoppingCart size={20} />
                </li>
                <li>
                  <FaUserAlt size={20} />
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-white mt-5 pt-4">
            <h2>ABOUT US</h2>
            <p>Home / About us</p>
          </div>
        </div>
      </div>
    
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 mb-3">
          <div className="col">
            <h3 className={`spicy-rice-regular`}>
              The Richest Masala In The World
            </h3>
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
            <img
              src="https://waffy-demo.myshopify.com/cdn/shop/files/abo-1.jpg?v=1622288419"
              alt="some Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row ">
            <div className="my-3 text-center">
              <h3 className={`spicy-rice-regular`}>Unique flavors spices</h3>
              <p>Quisque volutpat mattis eros.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 ">
              <div className="col">
                <div className="row ">
                  <div className={`col-3 col-md-2 text-center`}>
                    <FaCoffee size={80} className={`p-3 text-dark-hover`} />
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
                    <FaEarthAsia size={80} className={`p-3 text-dark-hover`} />
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
                      className={`p-3 text-dark-hover`}
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
                    <LuEye size={80} className={`p-3 text-dark-hover`} />
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
            <h3 className={`spicy-rice-regular`}>A unique blended taste</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et male.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 mb-3 gy-3">
            <div className="col">
              <img
                src="https://waffy-demo.myshopify.com/cdn/shop/files/abo-2_970x.jpg?v=1622288447"
                alt="some Image"
                className="img-fluid"
              />
            </div>
            <div className="col">
              <h3 className={`spicy-rice-regular`}>The finest spice</h3>
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
              <h3 className={`spicy-rice-regular`}>The premium flavor</h3>
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
              <img
                src="https://waffy-demo.myshopify.com/cdn/shop/files/abo-3_970x.jpg?v=1622288462"
                alt="some Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light py-5">
        <div className="container mb-4">
          <div className="text-center">
            <h3 className={`spicy-rice-regular`}>Our Client Words</h3>
            <p>Pellentesque at justo porttitor quis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
