const EmptyState = ({ col = 1, icon: Icon, title = "", desc = "" }) => {
  return (
    <tr>
      <td className="px-5 py-16" colSpan={col}>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <Icon size={24} strokeWidth={1.5} className="text-slate-400" />
            </div>
          </div>
          <p className="font-semibold text-slate-700">{title}</p>
          <p className="mt-1 text-sm text-slate-400">{desc}</p>
        </div>
      </td>
    </tr>
  );
};

export default EmptyState;
