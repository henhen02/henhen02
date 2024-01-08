import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container bg-[#213555] mt-10">
      <div className="footer-content flex flex-col justify-between md:flex-row items-start max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex flex-col mb-2 md:items-start mt-4 md:mt-0">
          <h3 className="text-[#D8C4B6] text-lg md:text-xl font-bold mb-2">
            Contact me
          </h3>
          <div className="footer-links flex flex-col items-start gap-[10px]">
            <a
              href="mailto:hendri21072002@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#D8C4B6] hover:text-white flex flex-row justify-center items-center gap-1"
            >
              <AiFillMail size={24} />
              hendri21072002@gmail.com
            </a>
            <a
              href="https://www.facebook.com/hendrialdi.zulfan"
              target="_blank"
              rel="noreferrer"
              className="text-[#D8C4B6] hover:text-white flex flex-row justify-center items-center gap-1"
            >
              <FaFacebook size={24} />
              Hendri Aldi Zulfan
            </a>
            <a
              href="https://twitter.com/210702Aldi"
              target="_blank"
              rel="noreferrer"
              className="text-[#D8C4B6] hover:text-white flex flex-row justify-center items-center gap-1"
            >
              <FaTwitter size={24} />
              @21072002Aldi
            </a>
            <a
              href="https://www.instagram.com/hendrialdizulfan"
              target="_blank"
              rel="noreferrer"
              className="text-[#D8C4B6] hover:text-white flex flex-row justify-center items-center gap-1"
            >
              <FaInstagram size={24} />
              @hendrialdizulfan
            </a>
            <a
              href="https://github.com/henhen02"
              target="_blank"
              rel="noreferrer"
              className="text-[#D8C4B6] hover:text-white flex flex-row justify-center items-center gap-1"
            >
              <FaGithub size={24} />
              henhen02
            </a>
          </div>
        </div>
        <div className="flex flex-col md:items-start">
          <h3 className="text-[#D8C4B6] text-lg md:text-xl font-bold mb-2">
            Built with
          </h3>
          <div className="flex flex-row items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png"
              alt="Vite logo"
              height="24"
              width="24"
            />
            <p className="text-[#D8C4B6] text-sm md:text-base">Vite</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
              alt="React Logo"
              height="24"
              width="24"
            />
            <p className="text-[#D8C4B6] text-sm md:text-base">React.js</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355"
              alt="Node js logo"
              height="24"
              width="24"
            />
            <p className="text-[#D8C4B6] text-sm md:text-base">Node.js</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201"
              alt="Typescript logo"
              height="24"
              width="24"
            />
            <p className="text-[#D8C4B6] text-sm md:text-base">Typescript</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042"
              alt="Tailwindcss logo"
              height="24"
              width="24"
            />
            <p className="text-[#D8C4B6] text-sm md:text-base">Tailwindcss</p>
          </div>
        </div>
      </div>
      <p className="text-[#D8C4B6] text-center p-5 text-[16px]">
        &copy; {year} henhen02
      </p>
    </footer>
  );
};

export default Footer;
