import { DateTime } from 'luxon';

/**
 * Validates a time string against a specified format.
 * @param inputString The input time string to validate.
 * @param formatString The format string to match against (e.g., 'h:mm a').
 * @returns The valid time string if input is valid, or null if invalid.
 */
export const validateTimeFormat = (inputString: string, formatString: string): string | null => {
  // Attempt to create a DateTime object using the input and format
  const dateTime = DateTime.fromFormat(inputString, formatString);

  // Check if the DateTime object is valid
  if (dateTime.isValid) {
    const validTimeString = dateTime.toFormat(formatString);
    console.log('Valid time format:', validTimeString);
    return validTimeString;
  } else {
    console.log('Invalid time format');
    return null; // Or handle invalid case as needed
  }
};

// Example usage
const inputString = '12:30 PM';
const formatString = 'h:mm a';
const validTime = validateTimeFormat(inputString, formatString);
console.log('Result:', validTime);
