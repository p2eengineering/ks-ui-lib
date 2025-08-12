import { useState, useRef } from 'react';

import { DayPicker } from 'react-day-picker';
import { Popover, Overlay } from 'react-bootstrap';
import './style.scss';
import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';

const DateRangePicker = () => {
  const [range, setRange] = useState(undefined);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleToggle = () => setShow(!show);

  return (
    <div className='date-range-picker'>
      <div className='trigger' ref={target} onClick={handleToggle}>
        <div>
          <span className='date-label'>From</span>

          {range?.from ? (
            <span className='date-value'>
              {format(range.from, 'LLL dd, y')}
            </span>
          ) : (
            <div className='date-placeholder'></div>
          )}
        </div>
        -
        <div>
          <span className='date-label'>To</span>
          {range?.to ? (
            <span className='date-value'>{format(range.to, 'LLL dd, y')}</span>
          ) : (
            <div className='date-placeholder'></div>
          )}
        </div>
        <CalendarDays />
      </div>
      <Overlay
        target={target.current}
        show={show}
        rootClose
        placement='auto'
        containerPadding={20}
        onHide={() => setShow(false)}
      >
        <Popover className='date-picker' id='popover-container'>
          <Popover.Header as='h3'>Select Dates</Popover.Header>
          <Popover.Body>
            <DayPicker
              mode='range'
              selected={range}
              onSelect={setRange}
              numberOfMonths={2}
            />
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default DateRangePicker;
