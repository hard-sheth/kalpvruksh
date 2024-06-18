import { CiMail } from "react-icons/ci";
import Style from "./Appfooter.module.css";
import Image from "next/image";
import moment from "moment";
function AppFooter() {
  return (
    <div className="container-fluid bg-light pt-4">
      <div className="row col-12 col-md-6 mx-auto text-center">
        <h2 className="fw-bold">NEVER MISS ANOTHER UPDATE</h2>
        <p className={`${Style["fs-7"]}`}>
          Be the first to know! Get the latest news on Organic Tattva, straight
          in to your inbox.
        </p>
        <div className="input-group">
          <div className="input-group-text bg-white">
            <CiMail />
          </div>
          <input
            type="text"
            className="form-control border-start-0 border-end-0"
            id="inlineFormInputGroupUsername"
            placeholder="Enter your email address"
          />
          <div className="input-group-text">SUBSCRIBE</div>
        </div>
      </div>
      <div className="row gx-5 h-100 row-cols-4 px-2 px-lg-5">
        <div className="col">
          <h1 className="mt-3 fs-5 fw-bold border-bottom">Company</h1>
          <p>About Us</p>
          <p>Contact Us</p>
          <h1 className="mt-3 fs-5 fw-bold border-bottom">Policies</h1>
          <p>Privacy Policy</p>
          <p>Cancellation & Return Policy </p>
          <p>Terms and Conditions</p>
        </div>
        <div className="col">
          <h1 className="mt-3 fs-5 fw-bold border-bottom">About Us</h1>
          <p className={`${Style["fs-7"]}`}>
            We’ve turned the wheel full circle at Organic Tattva, by building a
            culture that thrives on the principles of health, ecology, fairness
            and care. From nurturing our soil and crops with unadulterated
            nourishment to testing each product for 186 pesticides, we follow
            the highest standards of quality and hygiene.
          </p>
        </div>
        <div className="col">
          <h1 className="mt-3 fs-5 fw-bold border-bottom">Categories</h1>
          <p>Flours & Suji</p>
          <p>Oils & Ghee</p>
          <p>Pulses & Dals</p>
          <p>Dry Fruits & Nuts</p>
          <p>Salt, Sugar & Jaggery</p>
          <p>Ready To Cook</p>

          <p>Teas & Coffee</p>
          <p>Health Foods</p>
          <p>Spices & Masala</p>
          <p>Rice & Rice Products</p>
        </div>
        <div className="col">
          <h1 className="mt-3 fs-5 fw-bold border-bottom">Cities We Serve</h1>
          <p className={`${Style["fs-9"]} mb-0`}>Delhi NCR</p>
          <p className={`${Style["fs-9"]} mb-0`}>Bangalore</p>
          <p className={`${Style["fs-9"]} mb-0`}>Mumbai</p>
          <p className={`${Style["fs-9"]} mb-0`}>Hyderabad</p>
          <p className={`${Style["fs-9"]} mb-0`}>Kolkata</p>
        </div>
      </div>
      <div className="row row-cols-3 row-cols-lg-5 pt-4 border-top">
        <div className="col">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Image
                src={`https://organictattva.com/pub/media/wysiwyg/homepage/farming.png`}
                alt="Some Random Image"
                width={50}
                height={50}
                className="object-fit-cover"
              />
            </li>
            <li className="list-inline-item">Sustainable Farming Techniques</li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Image
                src={`https://organictattva.com/pub/media/wysiwyg/homepage/chemical_free.png`}
                alt="Some Random Image"
                width={50}
                height={50}
                className="object-fit-cover"
              />
            </li>
            <li className="list-inline-item">Chemical Pesticide-free</li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Image
                src={`	https://organictattva.com/pub/media/wysiwyg/homepage/gmo.png`}
                alt="Some Random Image"
                width={50}
                height={50}
                className="object-fit-cover"
              />
            </li>
            <li className="list-inline-item">Non-GMO Produce</li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Image
                src={`	https://organictattva.com/pub/media/wysiwyg/homepage/locally.png`}
                alt="Some Random Image"
                width={50}
                height={50}
                className="object-fit-cover"
              />
            </li>
            <li className="list-inline-item">Locally Ethically Sourced</li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Image
                src={`	https://organictattva.com/pub/media/wysiwyg/homepage/global.png`}
                alt="Some Random Image"
                width={50}
                height={50}
                className="object-fit-cover"
              />
            </li>
            <li className="list-inline-item">189 Global Testing Standards</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mx-auto text-center col-md-6">
          <p className="fs-6 fw-bold">
        Made with Love | Organic Tattva copyright {moment().format('YYYY')}
        </p>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
