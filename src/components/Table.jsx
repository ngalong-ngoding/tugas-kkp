import cn from "@/utils/cn";

const Table = ({
  columns = [],
  data = [],
  emptyState = null,
  className = "",
}) => {
  return (
    <div className="overflow-x-auto">
      <table className={cn("w-full border-collapse  text-left", className)}>
        <thead className="bg-slate-800 text-white">
          <tr>
            {columns.map(({ header }) => (
              <th
                key={header}
                className=" whitespace-nowrap px-5 py-4 text-xs font-semibold uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {data.length > 0
            ? data.map((value, i) => (
                <tr key={i} className="transition-colors hover:bg-slate-50">
                  {columns.map(({ cell, key }) => (
                    <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-slate-800">
                      {cell(value[key], value)}
                    </td>
                  ))}
                </tr>
              ))
            : emptyState}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
