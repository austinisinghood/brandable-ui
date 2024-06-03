import { twMerge } from "tailwind-merge";

const Info = () => {
  return (
    <div
      className={twMerge(
        `w-full flex flex-col items-start justify-start order-2 p-6 lg:absolute lg:top-[12%] lg:w-1/2 lg:h-[85%] lg:px-12 2xl:w-[25%] 2xl:h-[75%]`
      )}
    >
      <h2 className="label-text text-white-3 pb-2">Skills</h2>
      <code className="text-green-400">{`<Info />`}</code>
    </div>
  );
};

export default Info;
