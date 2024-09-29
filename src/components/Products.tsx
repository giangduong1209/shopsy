import { FaStar } from "react-icons/fa6";
import Img1 from "../assets/women/women1.png";
import Img2 from "../assets/women/women2.jpg";
import Img3 from "../assets/women/women3.jpg";
import Img4 from "../assets/women/women4.jpg";
import Img5 from "../assets/women/women5.jpg";
import Button from "./ui/Button";

const productsData = [
  {
    id: "product_1",
    img: Img1,
    title: "Women Ethnic",
    rating: 0.5,
    color: "White",
    aosDelay: "0",
  },
  {
    id: "product_2",
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: "product_3",
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "200",
  },
  {
    id: "product_4",
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "200",
  },
  {
    id: "product_5",
    img: Img5,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "200",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary" data-aos="fade-up">
            Top Selling Products for you.
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Products
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi
            accusamus ab, nihil illum incidunt, hic excepturi voluptate quos
            blanditiis tenetur beatae perspiciatis porro quo quidem voluptatibus
            corporis quaerat ea!
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
            {productsData.map((product) => (
              <div
                key={product.id}
                className="space-x-3
              "
                data-aos="fade-up"
                data-aos-delay={product.aosDelay}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-[150px] h-[220px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-up" className="mt-10">
          <Button className="mx-auto rounded-md">View All Products</Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
