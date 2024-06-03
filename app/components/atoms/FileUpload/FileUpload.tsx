import React, { useState } from "react";
import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import styles from "./styles/Hanker.module.scss";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const FileInput = ({ name, label, ...rest }: FileInputProps) => {
  const [filename, setFilename] = useState("");

  const isRequired = rest.required ? "* Field is required" : "";
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setFilename(file ? file.name : "");
  };

  return (
    <div className={twMerge(`relative w-full flex flex-col pb-6`)}>
      <label
        htmlFor={name}
        className={twMerge(`w-full label-text text-ink pt-12 pb-4`)}
      >
        {label}
      </label>
      <input
        type="file"
        name={name}
        onChange={handleFileChange}
        className={twMerge(
          `w-full talk text-ink-dark bg-transparent p-2 border-b-4 border-ink indent-4 outline-none hover:border-accent focus:border-accent transition-all ease-in-out duration-200 sm:indent-2 cursor-pointer`,
          styles.fileUpload
        )}
        {...rest}
      />
      {filename && (
        <span className={twMerge(`whisper text-ink-light pt-3`)}>
          Uploaded file: {filename}
        </span>
      )}
      {!filename && (
        <span className="whisper text-ink-light pt-3">{isRequired}</span>
      )}
    </div>
  );
};

export default FileInput;
