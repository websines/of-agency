import React from "react";

type TextContent = {
  title: string;
  desc: string;
};

const TextBox = ({ title, desc }: TextContent) => {
  return (
    <div className="flex flex-col items-start justify-start mt-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="font-medium text-md w-[80%] my-2">{desc}</p>
    </div>
  );
};

export default TextBox;
