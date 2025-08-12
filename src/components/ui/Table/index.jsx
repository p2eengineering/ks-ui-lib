import { Table } from 'react-bootstrap';
import { useTable, useSortBy } from 'react-table';

const CustomTable = ({ columns, data, className }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Table
      {...getTableProps()}
      className={className}
      style={{ marginTop: '20px' }}
    >
      <thead className='thead-light'>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map((column) => {
              return (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className='table-header'
                  style={{
                    textAlign: 'center',
                  }}
                  key={column.id}
                >
                  {column.render('Header')}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, idx) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              key={row.id}
              className={idx % 2 === 0 ? 'odd' : 'even'}
            >
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    textAlign: 'center',
                    border: 'none',
                    background: 'transparent',
                  }}
                  key={cell.column.id}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CustomTable;
