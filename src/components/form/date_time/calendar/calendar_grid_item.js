import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const EuiCalendarGridItem = ({
  children,
  className,
  isInTheCurrentMonth,
  isSelected,
  isStartDate,
  isEndDate,
  isToday,
  disabled,
  ...rest
}) => {
  const classes = classNames(
    'euiCalendarGridItem',
    {
      'euiCalendarGridItem-isInTheCurrentMonth': isInTheCurrentMonth,
      'euiCalendarGridItem-isToday': isToday,
      'euiCalendarGridItem-isSelected': isSelected,
      'euiCalendarGridItem-isStartDate': isStartDate,
      'euiCalendarGridItem-isEndDate': isEndDate,
    },
    className
  );

  return (
    <div
      className={classes}
      {...rest}
    >
      <button className="euiCalendarGridItem__button" disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

EuiCalendarGridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isInTheCurrentMonth: PropTypes.bool,
  isSelected: PropTypes.bool,
  isToday: PropTypes.bool,
};

EuiCalendarGridItem.defaultProps = {
  isInTheCurrentMonth: false,
  isSelected: false,
  isToday: false,
  isStartDate: false,
  isEndDate: false,
};
