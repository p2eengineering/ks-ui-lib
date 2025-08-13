import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive data table component with sorting, status badges, and action buttons. Perfect for displaying tabular data with interactive features.',
      },
    },
  },
  argTypes: {
    onSort: {
      action: 'sorted',
      description: 'Callback function when a column is sorted',
    },
    onEdit: {
      action: 'edit clicked',
      description: 'Callback function when edit button is clicked',
    },
    onDelete: {
      action: 'delete clicked',
      description: 'Callback function when delete button is clicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the table',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const defaultColumns = [
  { id: 'name', label: 'Name', sortable: false },
  { id: 'email', label: 'Email', sortable: true },
  { id: 'role', label: 'Role', sortable: true },
  { id: 'department', label: 'Department', sortable: true },
  { id: 'status', label: 'Status', sortable: false },
];

const defaultRows = [
  {
    id: '1',
    name: 'John Doe',
    data: {
      email: 'john.doe@example.com',
      role: 'Developer',
      department: 'Engineering',
    },
    status: 'success' as const,
  },
  {
    id: '2',
    name: 'Jane Smith',
    data: {
      email: 'jane.smith@example.com',
      role: 'Designer',
      department: 'Design',
    },
    status: 'pending' as const,
  },
  {
    id: '3',
    name: 'Bob Johnson',
    data: {
      email: 'bob.johnson@example.com',
      role: 'Manager',
      department: 'Product',
    },
    status: 'failed' as const,
  },
];

export const Default: Story = {
  args: {
    columns: defaultColumns,
    rows: defaultRows,
  },
};

export const WithAvatars: Story = {
  args: {
    columns: defaultColumns,
    rows: [
      {
        id: '1',
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        data: {
          email: 'john.doe@example.com',
          role: 'Developer',
          department: 'Engineering',
        },
        status: 'success' as const,
      },
      {
        id: '2',
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        data: {
          email: 'jane.smith@example.com',
          role: 'Designer',
          department: 'Design',
        },
        status: 'pending' as const,
      },
      {
        id: '3',
        name: 'Bob Johnson',
        data: {
          email: 'bob.johnson@example.com',
          role: 'Manager',
          department: 'Product',
        },
        status: 'failed' as const,
      },
    ],
  },
};

export const CustomColumns: Story = {
  args: {
    columns: [
      { id: 'name', label: 'Product Name', sortable: false },
      { id: 'category', label: 'Category', sortable: true },
      { id: 'price', label: 'Price', sortable: true },
      { id: 'stock', label: 'Stock', sortable: true },
      { id: 'status', label: 'Status', sortable: false },
    ],
    rows: [
      {
        id: '1',
        name: 'Laptop Pro',
        data: {
          category: 'Electronics',
          price: '$1,299',
          stock: '45',
        },
        status: 'success' as const,
      },
      {
        id: '2',
        name: 'Wireless Headphones',
        data: {
          category: 'Audio',
          price: '$199',
          stock: '12',
        },
        status: 'pending' as const,
      },
      {
        id: '3',
        name: 'Smart Watch',
        data: {
          category: 'Wearables',
          price: '$399',
          stock: '0',
        },
        status: 'failed' as const,
      },
    ],
  },
};

export const LargeDataset: Story = {
  args: {
    columns: [
      { id: 'name', label: 'Employee Name', sortable: false },
      { id: 'position', label: 'Position', sortable: true },
      { id: 'location', label: 'Location', sortable: true },
      { id: 'startDate', label: 'Start Date', sortable: true },
      { id: 'status', label: 'Status', sortable: false },
    ],
    rows: [
      {
        id: '1',
        name: 'Alice Cooper',
        data: {
          position: 'Senior Developer',
          location: 'San Francisco',
          startDate: '2020-03-15',
        },
        status: 'success' as const,
      },
      {
        id: '2',
        name: 'David Wilson',
        data: {
          position: 'Product Manager',
          location: 'New York',
          startDate: '2021-01-10',
        },
        status: 'pending' as const,
      },
      {
        id: '3',
        name: 'Emma Davis',
        data: {
          position: 'UX Designer',
          location: 'Austin',
          startDate: '2021-06-22',
        },
        status: 'success' as const,
      },
      {
        id: '4',
        name: 'Frank Miller',
        data: {
          position: 'DevOps Engineer',
          location: 'Seattle',
          startDate: '2020-11-08',
        },
        status: 'failed' as const,
      },
      {
        id: '5',
        name: 'Grace Lee',
        data: {
          position: 'Data Scientist',
          location: 'Boston',
          startDate: '2021-09-14',
        },
        status: 'success' as const,
      },
    ],
  },
};

export const NoSortableColumns: Story = {
  args: {
    columns: [
      { id: 'name', label: 'Name', sortable: false },
      { id: 'email', label: 'Email', sortable: false },
      { id: 'role', label: 'Role', sortable: false },
      { id: 'status', label: 'Status', sortable: false },
    ],
    rows: defaultRows,
  },
};

export const ImageExample: Story = {
  args: {
    columns: [
      { id: 'name', label: 'Name', sortable: false },
      { id: 'email', label: 'Email', sortable: true },
      { id: 'role', label: 'Role', sortable: true },
      { id: 'department', label: 'Department', sortable: true },
      { id: 'status', label: 'Status', sortable: false },
    ],
    rows: [
      {
        id: '1',
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        data: {
          email: 'john.doe@example.com',
          role: 'Developer',
          department: 'Engineering',
        },
        status: 'success' as const,
      },
      {
        id: '2',
        name: 'Jane Smith',
        data: {
          email: 'jane.smith@example.com',
          role: 'Designer',
          department: 'Design',
        },
        status: 'pending' as const,
      },
      {
        id: '3',
        name: 'Bob Johnson',
        data: {
          email: 'bob.johnson@example.com',
          role: 'Manager',
          department: 'Product',
        },
        status: 'failed' as const,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'This example matches the design with alternate row colors (#F1FAFF) and clean status badges.',
      },
    },
  },
};
