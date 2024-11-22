import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Progress = ({ value, max, size, color }) => {
  const percentage = Math.min((value / max) * 100, 100);

  const containerClasses = classNames(
    'relative w-full bg-gray-200 rounded-full overflow-hidden',
    {
      'h-2': size === 'sm',
      'h-4': size === 'md',
      'h-6': size === 'lg',
    }
  );

  console.log("hello test")

  const barClasses = classNames(
    'absolute left-0 top-0 h-full transition-all duration-300',
    {
      'bg-blue-500': color === 'blue',
      'bg-green-500': color === 'green',
      'bg-red-500': color === 'red',
    }
  );

  return (
    <div className={containerClasses}>
      <div
        className={barClasses}
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  );
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['blue', 'green', 'red']),
};

Progress.defaultProps = {
  max: 100,
  size: 'md',
  color: 'blue',
};

export default Progress;
