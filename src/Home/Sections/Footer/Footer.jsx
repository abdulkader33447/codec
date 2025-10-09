import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2d2d2d] text-gray-300 py-16">
      <div className="max-w-[1320px] w-11/12 mx-auto sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-4">CodeC</h2>
          <p className="text-sm leading-relaxed">
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus. Scelerisque felis imperdiet proin fermentum
            leo. Amet volutpat consequat mauris nunc congue.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-[#6cb42c] inline-block pb-1">
            USEFUL LINKS
          </h3>
          <ul className="space-y-2 mt-6">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms Of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-[#6cb42c] inline-block pb-1">
            OUR SERVICES
          </h3>
          <ul className="space-y-2 mt-6">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Photography
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Woocommerce
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Brand Image
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-[#6cb42c] inline-block pb-1">
            CONTACT US
          </h3>
          <div className="space-y-2 mt-6">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <p className="mt-4">
              <span className="font-semibold text-white">Phone:</span> +1 5589
              55488 55
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              info@example.com
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="w-9 h-9 bg-[#3a3a3a] flex items-center justify-center rounded-full hover:bg-[#FFBD39] text-white transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                className="w-9 h-9 bg-[#3a3a3a] flex items-center justify-center rounded-full hover:bg-[#FFBD39] text-white transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-9 h-9 bg-[#3a3a3a] flex items-center justify-center rounded-full hover:bg-[#FFBD39] text-white transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="w-9 h-9 bg-[#3a3a3a] flex items-center justify-center rounded-full hover:bg-[#FFBD39] text-white transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        <p>
          © Copyright <span className="font-semibold">Deshit-BD</span> | All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
