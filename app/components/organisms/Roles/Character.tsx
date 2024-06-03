import Image from "next/image";

type CharacterProps = {
  prevPerson: () => void;
  nextPerson: () => void;
  image: string;
  video: string;
};

const Character = ({
  prevPerson,
  nextPerson,
  image,
  video,
}: CharacterProps) => {
  return (
    <div className="w-full flex flex-row items-center justify-center order-3 p-6 lg:absolute lg:right-0 lg:w-1/2 lg:h-[75%] 2xl:left-[30%] 2xl:w-[40%] 2xl:h-[100%]">
      <div className="w-[15%] h-full flex items-center justify-start p-2">
        <code className="text-green-400" onClick={prevPerson}>{`<`}</code>
      </div>
      <div className="w-[70%] max-w-[70%] h-fit flex items-center justify-center p-2 lg:w-[60%] xl:w-[50%] 2xl:w-[100%]">
        {/* <video
          className="w-full h-full border-2 border-red-500"
          src={video}
          autoPlay
          loop
          muted
        /> */}
        <Image
          className="max-w-[350px]"
          src={image}
          width={1080}
          height={1920}
          alt="character image"
          priority
        />
      </div>
      <div className="w-[15%] h-full flex items-center justify-end p-2">
        <code className="text-green-400" onClick={nextPerson}>{`>`}</code>
      </div>
    </div>
  );
};

export default Character;
