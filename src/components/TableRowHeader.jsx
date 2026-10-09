export const TableRowHeader = ({children, className = ""}) => {

    return (
              <div className={`flex justify-between border-b p-2${className}`}>{children}</div>

    )

}

export default TableRowHeader