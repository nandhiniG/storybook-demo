import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import { format } from 'date-fns-tz'; // Import format from date-fns-tz for time zone formatting

interface TimePickerProps {
  onChange: (time: string) => void;
}

const TimePickerComponent: React.FC<TimePickerProps> = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState<Date | null>(new Date());

  const handleTimeChange = (newTime: Date | null) => {
    setSelectedTime(newTime ? new Date(newTime) : null); // Parse newTime string to Date object
    if (newTime) {
      // Convert the selected time to IST time zone
      const selectedISTTime = format(newTime, 'HH:mm:ss', { timeZone: 'Asia/Kolkata' });
      onChange(selectedISTTime);
    }
  };

  return (
    <TimePicker
      value={selectedTime}
      onChange={handleTimeChange}
      clearIcon={null} // Disable clear icon
      disableClock // Disable clock to display only the time input
    />
  );
};

export default TimePickerComponent;
