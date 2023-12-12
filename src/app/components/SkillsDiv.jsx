import Image from "next/image";
const SkillsDiv = () => {
  return (
    <div className="grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 grid-cols-4  bg-secondary p-10 my-10 rounded-xl gap-x-2 gap-y-3">
      <Image
        src="/html.png"
        alt="Html"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px]  animate-pulse"
      />
      <Image
        src="/css.png"
        alt="CSS"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
      <Image
        src="/js.png"
        alt="Javascript"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
      <Image
        src="/react.png"
        alt="React"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
      <Image
        src="/next.png"
        alt="Next.js"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
      <Image
        src="/tailwind.png"
        alt="Tailwind"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
      <Image
        src="/bootstrap.png"
        alt="Bootstrap"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
      <Image
        src="/express.png"
        alt="Express"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
      <Image
        src="/node-js.png"
        alt="Node.js"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
      <Image
        src="/firebase.png"
        alt="Firebase"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
      <Image
        src="/solidity.png"
        alt="Solidity"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
      <Image
        src="/hardhat.svg"
        alt="Hardhat"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
      <Image
        src="/github.svg"
        alt="github"
        height={50} 
        width={50}
        className="sm:h-[100px] sm:w-[100px] animate-pulse"
      />
    </div>
  );
};

export default SkillsDiv;
