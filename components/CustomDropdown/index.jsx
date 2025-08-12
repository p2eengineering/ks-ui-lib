import { useState } from 'react';

import { Dropdown } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

import './style.scss';

const CustomDropdown = ({ label, items, onChange, toggleIcon }) => {
  const [selected, setSelected] = useState(items[0]);
  const SelectedIcon = selected?.icon;
  const ToggleIcon = toggleIcon;

  const handleSelect = (eventKey) => {
    const selectedItem = items.find((item) => item.value === eventKey);
    if (selectedItem) {
      setSelected(selectedItem);
      onChange?.(selectedItem);
    }
  };

  return (
    <div className='custom-dropdown-container'>
      {label ? <span className='label'>{label}</span> : null}
      <Dropdown onSelect={handleSelect} className='custom-dropdown'>
        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
          <span>
            {selected?.label}
            {selected?.icon && <SelectedIcon />}
          </span>
          {toggleIcon ? (
            <ToggleIcon />
          ) : (
            <FaChevronDown className='dropdown-arrow' />
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {items?.map((item) => {
            const ItemIcon = item.icon;
            return (
              <Dropdown.Item key={item.value} eventKey={item.value}>
                {item.label}
                {item.icon && <ItemIcon className='dropdown-icon' />}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CustomDropdown;
