import React from "react";

type InputProps = {
  title: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ title, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="" className="text-xl">
        {title}
      </label>
      <input
        type="text"
        className="border rounded text-xl p-2 focus:border-violet-700"
        {...props}
      />
    </div>
  );
}

export default Input;
