import React, { useState, useRef, useMemo, useEffect } from 'react';
import './TimePicker.css'; // Import CSS file for styling
import { format, parse } from 'date-fns';
import { useClickOutsideListener } from './hooks';

interface TimePickerProps {
  id: string;
  timeFormat: '12' | '24';
  variant?: 'none' | 'standard';
  onChange: (time: number) => void;
}

const generateTimes = (): Date[] => {
  const times: Date[] = [];
  for (let hour = 0; hour < 24; hour++) {
    times.push(new Date(0, 0, 0, hour));
  }
  return times;
};

const renderTimeOptions = (times: Date[], timeFormat: '12' | '24', selectedValue: string): JSX.Element[] => {
  const options: JSX.Element[] = [];
  const formatter = timeFormat === '12' ? 'h:mm a' : 'H:mm';
  times.forEach(time => {
    const timeString = format(time, formatter);
    options.push(
      <option key={timeString} value={timeString}>
        {timeString === selectedValue && <span className="tick-icon">&#10003;</span>}
        {timeString}
      </option>
    );
  });
  return options;
};

const TimePicker: React.FC<TimePickerProps> = ({ timeFormat, variant, onChange }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>(''); // State to manage selected time
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const timePickerRef = useRef<HTMLDivElement>(null);
  const containerClassName = `time-picker ${variant}`;

  const times = useMemo(() => generateTimes(), []); // Generate times array once
  const options = renderTimeOptions(times, timeFormat, selectedTime); // Pass selectedTime to renderTimeOptions

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = () => {
    setIsPopoverOpen(true);
  };

  const handleTimeSelection = (time: string) => {
    setInputValue(time);
    setSelectedTime(time); // Update selected time
    setIsPopoverOpen(false);
    const selectedDate = parse(time, timeFormat === '12' ? 'h:mm a' : 'H:mm', new Date());
    const utcTimestamp = selectedDate.getTime();
    onChange(utcTimestamp);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  useClickOutsideListener(timePickerRef,handlePopoverClose);

  

  return (
    <div className={containerClassName} ref={timePickerRef}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder={timeFormat === '12' ? '10:00 AM' : '10:00'}
      />
      {isPopoverOpen && (
        <select
          ref={selectRef}
          className="time-options"
          style={{
            top: inputRef.current ? inputRef.current.offsetHeight + inputRef.current.offsetTop : 'auto',
            left: inputRef.current ? inputRef.current.offsetLeft : 'auto'
          }}
          size={6}
          onChange={(e) => handleTimeSelection(e.target.value)}
        >
          {options} {/* Render options */}
        </select>
      )}
    </div>
  );
};

export default TimePicker;


