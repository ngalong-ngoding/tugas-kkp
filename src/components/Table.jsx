import cn from "@/utils/cn";

const Table = ({ columns = [], data = [] }) => {
  return (
    <div className="rounded-lg">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map(({ header }) => (
              <th key={header} className={cn("p-2 text-left font-semibold")}>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((x, i) => {
            return (
              <tr key={i}>
                {columns.map((col) => {
                  return <td className="px-2 py-4 ">{col.cell(x[col.key])}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
