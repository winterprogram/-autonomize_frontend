export const Dropdown = ({
  items,
  label,
}: {
  items: Array<{ key: string; value: string }>;
  label: string;
}) => (
  <>
    <div>
      <label
        className="block mb-2 text-md font-medium text-gray-900"
        htmlFor={label}
      >
        {label}
      </label>

      <select
        name={label}
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {items.map((item) => (
          <option key={item.key} value={item.value}>
            {item.key}
          </option>
        ))}
      </select>
    </div>
  </>
);
