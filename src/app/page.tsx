import Image from "next/image";
import styles from "./page.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";

export default function Home() {
  return (
    <div className="container">
      <div className="text-center">
        <Image
          src={`https://cdn-media.organictattva.com/media/blog/cache/840x620/magefan_blog/ot_July-blog-banner.jpg`}
          alt="Some Random Image"
          width={1000}
          height={500}
          className="object-fit-cover"
        />
      </div>
      <div className="my-4">
        <div className="mt-5">
          <FaRegCalendarAlt /> {moment().format("MMMM D,yyyy")}
        </div>
        <div className="col-10 mx-auto">
          <h1 className="fw-bold">
            Whole Wheat Flour vs Regular Wheat Flour - Here’s what’s Healthier
          </h1>
          <p>
            When you go grocery shopping, do you reach for whole wheat flour or
            regular wheat flour?
          </p>
          <p>
            Making the right choice can be challenging with phrases like whole
            wheat, whole grain, and multigrain printed over every product. Well,
            don’t worry, we are here to help you navigate through these terms,
            so that the next time you go grocery shopping, you can make a
            healthier decision.
          </p>
          <p>
            White flour is what most people reach for first when they go
            shopping, and it is the star ingredient in a variety of baked goods
            and bread. However, not all flours are made equal. White flour is
            manufactured from refined and processed wheat grains, so the
            nutritional value is a little low. Whole-wheat flour is prepared
            from crushed wheat kernels and incorporates every part of the bran.
            The wheat germ and bran give the flour a deeper color and higher
            nutritional value.
          </p>
          <ul>
            <li>
              <p className="fw-bold fs-4">High in Fibre</p>
              <p>
                The difference in fiber levels of whole-wheat flour and white
                flour adds the most significant nutritional differences. Organic
                whole-wheat flour has a high fiber content, avoids constipation,
                decreases blood cholesterol, and may help you lose weight. On
                the other hand, white flour contains less fiber than whole-grain
                flour because the refining process separates the fiber-rich bran
                from the rest of the grain.
              </p>
            </li>
            <li>
              <p className="fw-bold fs-4">Regulates Blood Sugar</p>
              <p>
              Any carbohydrate-containing food, including those using whole wheat or white flour, influences your blood sugar levels. After a meal, your body converts the carbohydrates in your meals into glucose, a simple sugar. The Glycemic Index or GI of food serves as a measure of how quickly this process occurs. Whole wheat flour has a lower GI compared to your regular wheat flour. It helps you absorb your food better and prevents your blood sugar from suddenly spiking or crashing.
              </p>
            </li>
            <li>
              <p className="fw-bold fs-4">Improves Gut Health</p>
              <p>
              Thanks to its high fiber content, wheat bran has a prebiotic effect on the human gut bacteria. It helps break down the good bacteria in your gastrointestinal system and improves digestion. It can also help you increase nutritional uptake in your body as it contains a variety of vitamins, including B-1, B-3, and B-5, which keep your gut health in check.
              </p>
            </li>
            <li>
              <p className="fw-bold fs-4">The Bottom Line</p>
              <p>
              Making a few simple changes to your diet allows you to receive the nutritious benefits of whole-wheat flour without sacrificing the things you enjoy. For starters, try using a blend of whole wheat atta and regular atta and slowly make your switch. Organic Tattva’s Whole Wheat Flour is one of the best whole wheat flours available in the market. They provide you with all the health benefits while not compromising on the taste.
              </p>
            </li>
     
          </ul>
        </div>
      </div>
    </div>
  );
}
