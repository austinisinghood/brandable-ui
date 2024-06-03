import { twMerge } from "tailwind-merge";

type NameProps = {
  title: string;
  job: string;
};

const Name = ({ title, job }: NameProps) => {
  return (
    <div
      className={twMerge(
        `w-full flex flex-col items-start justify-end order-1 p-6 lg:absolute lg:w-1/2 lg:h-[15%] lg:px-12 2xl:w-[30%]`
      )}
    >
      <span className="talk text-white-3 pb-2">{title}</span>
      <h1 className="shout text-white-3">{job}</h1>
    </div>
  );
};

export default Name;
