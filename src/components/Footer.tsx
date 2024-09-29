import Logo from "../assets/logo.png";
import FooterBanner from "../assets/footer_banner.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${FooterBanner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLink = [
  {
    id: "link_1",
    title: "Home",
    link: "/#",
  },
  {
    id: "link_2",
    title: "About",
    link: "/#about",
  },
  {
    id: "link_3",
    title: "Contact",
    link: "/#contact",
  },
  {
    id: "link_4",
    title: "Blog",
    link: "/Blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={Logo} alt="logo" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda officiis veritatis voluptatibus rem iste ut temporibus
              quae asperiores? Quidem sint adipisci quas, excepturi laborum ad
              magnam necessitatibus voluptates cupiditate quaerat.
            </p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLink.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.id}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLink.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.id}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Social link */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Ho Chi Minh City</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+84 482 473 937</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
