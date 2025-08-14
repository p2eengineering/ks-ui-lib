import React from "react";
import { FaSort, FaSortUp, FaSortDown, FaEdit, FaTrash } from "react-icons/fa";
import "./Table.scss";

export interface TableColumn {
  id: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

export interface TableRow {
  id: string;
  name: string;
  avatar?: string;
  data: Record<string, any>;
  status: string;
}

export interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  onSort?: (columnId: string, direction: "asc" | "desc") => void;
  onEdit?: (row: TableRow) => void;
  onDelete?: (row: TableRow) => void;
  className?: string;
  // Controlled sort state
  sortColumn?: string | null;
  sortDirection?: "asc" | "desc";
  onSortChange?: (columnId: string, direction: "asc" | "desc") => void;
}

const Table: React.FC<TableProps> = ({
  columns,
  rows,
  onSort,
  onEdit,
  onDelete,
  className = "",
  // Controlled sort state
  sortColumn = null,
  sortDirection = "asc",
  onSortChange,
}) => {
  const handleSort = (columnId: string) => {
    const column = columns.find((col) => col.id === columnId);
    if (!column?.sortable) return;

    let newDirection: "asc" | "desc" = "asc";
    if (sortColumn === columnId) {
      newDirection = sortDirection === "asc" ? "desc" : "asc";
    }

    onSortChange?.(columnId, newDirection);
    onSort?.(columnId, newDirection);
  };

  const getSortIcon = (columnId: string) => {
    if (sortColumn !== columnId) {
      return <FaSort />;
    }
    return sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />;
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { label: string; className: string }> = {
      success: { label: "Success", className: "table__status--success" },
      pending: { label: "Pending", className: "table__status--pending" },
      failed: { label: "Failed", className: "table__status--failed" },
      active: { label: "Active", className: "table__status--success" },
      inactive: { label: "Inactive", className: "table__status--failed" },
    };

    const config = statusConfig[status] || {
      label: status,
      className: "table__status--pending",
    };

    return (
      <span className={`table__status ${config.className}`}>
        {config.label}
      </span>
    );
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const componentClasses = ["table", className].filter(Boolean).join(" ");

  return (
    <div className={componentClasses}>
      <table className="table__content">
        <thead className="table__header">
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                className={`table__header-cell ${
                  column.sortable ? "table__header-cell--sortable" : ""
                }`}
                style={{ width: column.width }}
                onClick={() => column.sortable && handleSort(column.id)}
              >
                <div className="table__header-content">
                  <span className="table__header-label">{column.label}</span>
                  {column.sortable && (
                    <span className="table__sort-icon">
                      {getSortIcon(column.id)}
                    </span>
                  )}
                </div>
              </th>
            ))}
            <th className="table__header-cell table__header-cell--actions">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="table__body">
          {rows.map((row) => (
            <tr key={row.id} className="table__row">
              <td className="table__cell table__cell--name">
                <div className="table__name-cell">
                  <div className="table__avatar">
                    {row.avatar ? (
                      <img src={row.avatar} alt={row.name} />
                    ) : (
                      <span className="table__avatar-initials">
                        {getInitials(row.name)}
                      </span>
                    )}
                  </div>
                  <span className="table__name">{row.name}</span>
                </div>
              </td>
              {columns.slice(1, -1).map((column) => (
                <td key={column.id} className="table__cell">
                  {row.data[column.id] || "TD Value"}
                </td>
              ))}
              <td className="table__cell table__cell--status">
                {getStatusBadge(row.status)}
              </td>
              <td className="table__cell table__cell--actions">
                <div className="table__actions">
                  <button
                    type="button"
                    className="table__action-button table__action-button--edit"
                    onClick={() => onEdit?.(row)}
                    aria-label={`Edit ${row.name}`}
                  >
                    <FaEdit />
                  </button>
                  <button
                    type="button"
                    className="table__action-button table__action-button--delete"
                    onClick={() => onDelete?.(row)}
                    aria-label={`Delete ${row.name}`}
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
