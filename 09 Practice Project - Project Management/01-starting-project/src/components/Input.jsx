import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { labelText, isTextArea, ...props },
  ref
) {
  const classes =
    "caret-black w-full p-1 border-b-2 rounder-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none foucs:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {labelText}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
  s;
});

export default Input;
