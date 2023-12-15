import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-5 flex flex-col justify-center">
      <div className="flex items-center justify-center gap-3 my-3">
        <Link
          href="https://github.com/Piyush1638/"
          className=" hover:scale-150 duration-500 ease-linear"
          target="blank"
        >
          <Image src="/github.svg" alt="github" height={30} width={30} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/piyush-kumar-singh-377112231/"
          className=" hover:scale-150 duration-500 ease-linear"
          target="blank"
        >
          <Image
            src="/socialLinkedin.png"
            alt="LinkedIn"
            height={30}
            width={30}
          />
        </Link>
        <Link
          href="https://www.instagram.com/_piyush_singh_002/"
          className=" hover:scale-150 duration-500 ease-linear"
          target="blank"
        >
          <Image src="/instagram.png" alt="Instagram" height={30} width={30} />
        </Link>
      </div>
      <p className="text-white flex items-center justify-center">
        ❤️Designed & Developed By
      </p>
      <p className="text-transparent bg-gradient-to-r from-textPurple to-pink-300 bg-clip-text font-bold font-poppins text-center">
        Piyush Kumar Singh
      </p>
    </footer>
  );
};

export default Footer;
