# Component Library Hooks Strategy Guide

## Overview

This guide explains the best strategies for handling React hooks in component libraries to avoid version conflicts and give developers full control.

## 🎯 **Strategy 1: Pure Controlled Components (Recommended)**

### **What it is:**
Components that receive all state as props and don't use any internal hooks.

### **Benefits:**
- ✅ **No React Version Conflicts** - Uses host app's React instance
- ✅ **Full Control** - Developers manage all state
- ✅ **Predictable** - Components are pure functions
- ✅ **Testable** - Easy to test with controlled inputs
- ✅ **Flexible** - Can be integrated with any state management

### **Implementation:**

```tsx
// ✅ GOOD: Pure controlled component
interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSelect?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  open = false,
  onOpenChange,
  onSelect
}) => {
  // No internal state - everything comes from props
  return (
    <div className="dropdown">
      <button onClick={() => onOpenChange?.(!open)}>
        {value || 'Select...'}
      </button>
      {open && (
        <div className="dropdown-menu">
          {options.map(option => (
            <div key={option.value} onClick={() => onSelect?.(option.value)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
```

### **Usage in Host App:**

```tsx
// Host application manages all state
const MyApp = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  
  return (
    <Dropdown
      options={options}
      value={selectedValue}
      open={dropdownOpen}
      onOpenChange={setDropdownOpen}
      onSelect={setSelectedValue}
    />
  );
};
```

---

## 🔧 **Strategy 2: Custom Hooks in Host App**

### **What it is:**
Provide custom hooks that developers can use in their applications.

### **Benefits:**
- ✅ **Reusable Logic** - Common patterns encapsulated
- ✅ **Host App Hooks** - Uses host app's React instance
- ✅ **Flexible** - Can be customized per use case

### **Implementation:**

```tsx
// ✅ GOOD: Custom hook for host app
export const useDropdown = (options: DropdownOption[]) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredOptions = useMemo(() => 
    options.filter(option => 
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    ), [options, searchTerm]
  );
  
  const handleSelect = useCallback((selectedValue: string) => {
    setValue(selectedValue);
    setOpen(false);
    setSearchTerm('');
  }, []);
  
  return {
    open,
    setOpen,
    value,
    setValue,
    searchTerm,
    setSearchTerm,
    filteredOptions,
    handleSelect
  };
};
```

### **Usage:**

```tsx
// Host app uses the hook
const MyApp = () => {
  const dropdown = useDropdown(options);
  
  return (
    <Dropdown
      options={dropdown.filteredOptions}
      value={dropdown.value}
      open={dropdown.open}
      onOpenChange={dropdown.setOpen}
      onSelect={dropdown.handleSelect}
      searchTerm={dropdown.searchTerm}
      onSearchChange={dropdown.setSearchTerm}
    />
  );
};
```

---

## 🚫 **Strategy 3: Avoid (What We Fixed)**

### **What to Avoid:**
Components with internal hooks that bundle React.

### **Problems:**
- ❌ **React Version Conflicts** - Multiple React instances
- ❌ **Bundle Bloat** - React bundled in component library
- ❌ **Less Control** - Harder to integrate with app state
- ❌ **Testing Issues** - Components not pure

### **Example of What NOT to Do:**

```tsx
// ❌ BAD: Internal hooks in component library
const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [open, setOpen] = useState(false); // ❌ Internal state
  const [value, setValue] = useState('');  // ❌ Internal state
  
  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        {value || 'Select...'}
      </button>
      {open && (
        <div>
          {options.map(option => (
            <div key={option.value} onClick={() => setValue(option.value)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
```

---

## 📋 **Best Practices Summary**

### **✅ DO:**
1. **Make components pure and controlled**
2. **Accept all state as props**
3. **Provide custom hooks for host apps**
4. **Use TypeScript for better DX**
5. **Document controlled vs uncontrolled usage**

### **❌ DON'T:**
1. **Use internal hooks in components**
2. **Bundle React in component library**
3. **Mix controlled and uncontrolled patterns**
4. **Assume state management preferences**

### **🎯 Recommended Pattern:**

```tsx
// Component Library
interface ComponentProps {
  // Data
  options?: any[];
  value?: any;
  
  // State
  open?: boolean;
  loading?: boolean;
  
  // Callbacks
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: any) => void;
  onLoad?: () => void;
  
  // Styling
  className?: string;
  style?: React.CSSProperties;
}

// Host App
const MyApp = () => {
  const [state, setState] = useState({});
  
  return (
    <Component
      {...state}
      onOpenChange={(open) => setState(prev => ({ ...prev, open }))}
      onValueChange={(value) => setState(prev => ({ ...prev, value }))}
    />
  );
};
```

---

## 🔄 **Migration Guide**

### **From Internal Hooks to Controlled:**

1. **Identify internal state**
2. **Convert to props**
3. **Add callback props**
4. **Update documentation**
5. **Provide migration examples**

### **Example Migration:**

```tsx
// Before (with internal hooks)
const Dropdown = ({ options }) => {
  const [open, setOpen] = useState(false);
  return <div>...</div>;
};

// After (controlled)
const Dropdown = ({ options, open, onOpenChange }) => {
  return <div>...</div>;
};
```

---

## 📚 **Additional Resources**

- [React Component Patterns](https://reactpatterns.com/)
- [Controlled vs Uncontrolled Components](https://react.dev/learn/forms#controlled-components)
- [Custom Hooks Best Practices](https://react.dev/learn/reusing-logic-with-custom-hooks)

---

This strategy ensures your component library is flexible, maintainable, and free from React version conflicts while giving developers full control over their application state.
