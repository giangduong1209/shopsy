import Slider from "react-slick";

const TestimonialsData = [
  {
    id: "cus_1",
    name: "Victor",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: "cus_2",
    name: "Satya Nadella",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: "cus_3",
    name: "Virat Kohli",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: "cus_4",
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: "cus_5",
    name: "Victor",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: "cus_6",
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quod. Odio nostrum, ab placeat quia, molestias vero facere est officiis exercitationem aut cupiditate adipisci asperiores officia iure minus ullam! Provident.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary" data-aos="fade-up">
            What our customers are saying
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Testimonials
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi
            accusamus ab, nihil illum incidunt, hic excepturi voluptate quos
            blanditiis tenetur beatae perspiciatis porro quo quidem voluptatibus
            corporis quaerat ea!
          </p>
        </div>
        {/* Testimonials Card */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.img}
                      className="rounded-full size-20"
                    />
                  </div>
                  <div className="flex items-center gap-4 flex-col">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-400">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-primary">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-primary/80">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
