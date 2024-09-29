import Sale from "../assets/hero/sale.png";
import Men from "../assets/hero/men.png";
import Women from "../assets/hero/women.png";
import Button from "./ui/Button";
import Slider from "react-slick";

const imageList = [
  {
    id: "img_1",
    img: Men,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut, repellendus eaque veniam sequi distinctio cupiditate ducimus excepturi dignissimos explicabo ad corrupti dolorum, amet magni quos harum soluta quidem accusantium!",
  },
  {
    id: "img_2",
    img: Women,
    title: "30% off on all Women's Wear",
    description:
      "Who's Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut, repellendus eaque veniam sequi distinctio cupiditate ducimus excepturi",
  },
  {
    id: "img_3",
    img: Sale,
    title: "70% off on all Products Sale",
    description:
      "Doloribus aut, repellendus eaque veniam sequi distinctio cupiditate ducimus excepturi dignissimos explicabo ad corrupti dolorum, amet magni quos harum soluta quidem accusantium!",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="size-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {imageList.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {item.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {item.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <Button>Order Now</Button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={item.img}
                      alt="women"
                      className="size-[300px] sm:size-[450px] sm:scale-105 object-contain mx-auto lg:scale-125"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
