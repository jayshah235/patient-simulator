import { memo, useMemo } from "react";
import { useTable } from "react-table";
import cn from "classnames";
import styles from "./style.module.scss";

const Table = (props) => {
  const {
    headerData,
    columnData,
    tableHeadClass,
    handleClick,
    handleRowClick,
    hanldeFinalClick,
    tableClassName,
    children,
  } = props;
  const columns = useMemo(() => headerData, [headerData]);
  const data = useMemo(() => columnData, [columnData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className={cn("tableContainer", tableClassName)}>
      {children}
      <table {...getTableProps()} className={styles.table} cellSpacing={0}>
        <thead className={styles.tableHeading}>
          {headerGroups?.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup?.headers?.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  key={index}
                  className={cn(styles.tableHeading, tableHeadClass)}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {rows?.length > 0 ? (
          <tbody {...getTableBodyProps()}>
            {rows?.map((row, index) => {
              prepareRow(row);
              return (
                <tr
                  {...row?.getRowProps()}
                  key={index}
                  className={styles.tableBodyRow}
                >
                  {row?.cells?.map((cell, index) => {
                    return (
                      <td {...cell.getCellProps()} key={index}>
                        {cell.render("Cell", {
                          onClick: handleClick,
                          onRowClick: handleRowClick,
                          onFinalClick: hanldeFinalClick,
                        })}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={12} className={styles.noReordFoundText}>
                No records found
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default memo(Table);
