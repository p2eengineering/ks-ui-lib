# Table Component

A comprehensive data table component with sorting, status badges, and action buttons. Perfect for displaying tabular data with interactive features and modern styling.

## Features

- **Sortable Columns**: Click column headers to sort data
- **Status Badges**: Color-coded status indicators (Success, Pending, Failed)
- **Action Buttons**: Edit and delete buttons for each row
- **Avatar Support**: Circular avatars with fallback initials
- **Responsive Design**: Adapts to different screen sizes
- **Hover Effects**: Interactive row highlighting
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **TypeScript Support**: Fully typed with TypeScript interfaces

## Usage

```tsx
import Table from './components/Table/Table';

function App() {
  const columns = [
    { id: 'name', label: 'Name', sortable: false },
    { id: 'email', label: 'Email', sortable: true },
    { id: 'role', label: 'Role', sortable: true },
    { id: 'status', label: 'Status', sortable: false },
  ];

  const rows = [
    {
      id: '1',
      name: 'John Doe',
      data: {
        email: 'john.doe@example.com',
        role: 'Developer',
      },
      status: 'success',
    },
  ];

  return (
    <Table
      columns={columns}
      rows={rows}
      onSort={(columnId, direction) => console.log('Sort:', columnId, direction)}
      onEdit={(row) => console.log('Edit:', row)}
      onDelete={(row) => console.log('Delete:', row)}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `TableColumn[]` | - | Array of column definitions |
| `rows` | `TableRow[]` | - | Array of data rows |
| `onSort` | `(columnId: string, direction: 'asc' \| 'desc') => void` | - | Callback when column is sorted |
| `onEdit` | `(row: TableRow) => void` | - | Callback when edit button is clicked |
| `onDelete` | `(row: TableRow) => void` | - | Callback when delete button is clicked |
| `className` | `string` | `''` | Additional CSS classes to apply |

## TableColumn Interface

```tsx
interface TableColumn {
  id: string;           // Unique identifier for the column
  label: string;        // Display text for the column header
  sortable?: boolean;   // Whether the column can be sorted
  width?: string;       // Optional width for the column
}
```

## TableRow Interface

```tsx
interface TableRow {
  id: string;                    // Unique identifier for the row
  name: string;                  // Display name (shown with avatar)
  avatar?: string;               // Optional avatar image URL
  data: Record<string, any>;     // Column data keyed by column ID
  status: 'success' | 'pending' | 'failed'; // Status for the row
}
```

## Examples

### Basic Table
```tsx
const columns = [
  { id: 'name', label: 'Name', sortable: false },
  { id: 'email', label: 'Email', sortable: true },
  { id: 'role', label: 'Role', sortable: true },
];

const rows = [
  {
    id: '1',
    name: 'John Doe',
    data: {
      email: 'john@example.com',
      role: 'Developer',
    },
    status: 'success',
  },
];

<Table columns={columns} rows={rows} />
```

### With Avatars
```tsx
const rows = [
  {
    id: '1',
    name: 'John Doe',
    avatar: '/path/to/avatar.jpg',
    data: { email: 'john@example.com', role: 'Developer' },
    status: 'success',
  },
];
```

### With Custom Actions
```tsx
const handleEdit = (row) => {
  console.log('Editing:', row.name);
  // Open edit modal or navigate to edit page
};

const handleDelete = (row) => {
  if (confirm(`Are you sure you want to delete ${row.name}?`)) {
    console.log('Deleting:', row.name);
    // Delete the row
  }
};

<Table
  columns={columns}
  rows={rows}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
```

### With Sorting
```tsx
const [sortedRows, setSortedRows] = useState(rows);

const handleSort = (columnId, direction) => {
  const sorted = [...rows].sort((a, b) => {
    const aValue = a.data[columnId];
    const bValue = b.data[columnId];
    
    if (direction === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });
  
  setSortedRows(sorted);
};

<Table
  columns={columns}
  rows={sortedRows}
  onSort={handleSort}
/>
```

## Status Badges

The table automatically renders status badges with appropriate colors:

- **Success**: Light green background with green text
- **Pending**: Light orange background with orange text  
- **Failed**: Light red background with red text

## Styling

The component uses the design system tokens and can be customized through CSS classes. The main classes are:

- `.table` - Main container
- `.table__header` - Header section
- `.table__header-cell` - Individual header cells
- `.table__row` - Data rows
- `.table__cell` - Individual data cells
- `.table__status` - Status badge
- `.table__action-button` - Action buttons

## Accessibility

- Full keyboard navigation support
- Proper ARIA labels for all interactive elements
- Screen reader friendly
- Focus management
- High contrast support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
