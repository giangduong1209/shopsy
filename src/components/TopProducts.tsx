import { FaStar } from "react-icons/fa6";
import Img1 from "../assets/shirts/shirt1.png";
import Img2 from "../assets/shirts/shirt2.png";
import Img3 from "../assets/shirts/shirt3.png";
import Button from "./ui/Button";

const bestProductsData = [
  {
    id: "best_1",
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cumque, nostrum nobis veritatis natus sapiente fugit inventore sunt exercitationem amet.",
  },
  {
    id: "best_2",
    img: Img2,
    title: "Printed shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cumque, nostrum nobis veritatis natus sapiente fugit inventore sunt exercitationem amet.",
  },
  {
    id: "best_3",
    img: Img3,
    title: "Women shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cumque, nostrum nobis veritatis natus sapiente fugit inventore sunt exercitationem amet.",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p className="text-sm text-primary" data-aos="fade-up">
            Top Rated Products for you.
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi
            accusamus ab, nihil illum incidunt, hic excepturi voluptate quos
            blanditiis tenetur beatae perspiciatis porro quo quidem voluptatibus
            corporis quaerat ea!
          </p>
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {bestProductsData.map((bestProduct) => (
            <div
              data-aos="zoom-in"
              key={bestProduct.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
            >
              {/* Image section */}
              <div className="h-[100px]">
                <img
                  src={bestProduct.img}
                  alt={bestProduct.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-sm"
                />
              </div>
              {/* Detail Section */}
              <div className="p-4 text-center">
                {/* Star rating */}
                <div className="flex w-full items-center justify-center gap-1">
                  <FaStar className="text-yellow-500 group-hover:text-red-500" />
                  <FaStar className="text-yellow-500 group-hover:text-red-500" />
                  <FaStar className="text-yellow-500 group-hover:text-red-500" />
                  <FaStar className="text-yellow-500 group-hover:text-red-500" />
                </div>
                <h1 className="text-xl font-bold dark:text-white">
                  {bestProduct.title}
                </h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {bestProduct.description}
                </p>
                <Button className="mx-auto my-2">Order Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
