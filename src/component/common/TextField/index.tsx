import clsx from "clsx";

export const TextField = ({
  label,
  placeHolder,
  className,
}: {
  label?: string;
  className?: string;
  placeHolder: string;
}) => (
  <>
    <div className={clsx("mb-3 xl:w-96", className)}>
      {label && (
        <label
          htmlFor={label}
          className="form-label inline-block mb-1.5 mt-0.5 font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        type="text"
        className="
        form-control
        block
        w-full
        px-3
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        id={label}
        placeholder={placeHolder}
      />
    </div>
  </>
);
