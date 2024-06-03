import { twMerge } from "tailwind-merge";

const Tools = () => {
  return (
    <div
      className={twMerge(
        `w-full flex flex-col items-start justify-start order-4 p-6 lg:absolute lg:top-[75%] lg:right-0 lg:w-1/2 lg:h-[25%] lg:px-12 2xl:top-0 2xl:right-0 2xl:w-[30%] 2xl:h-[100%]`
      )}
    >
      <h2 className="label-text text-white-3 pb-2">Tools</h2>
      <code className="text-green-400">{`<Tools />`}</code>
    </div>
  );
};

export default Tools;
