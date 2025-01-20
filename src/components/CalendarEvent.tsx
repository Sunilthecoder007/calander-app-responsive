import React from 'react';

interface CalendarEventProps {
  title: string;
  startTime: string;
  endTime: string;
  backgroundColor: string;
  top: number;
  height: number;
  left?: number | string;
  width?: string;
}

const CalendarEvent: React.FC<CalendarEventProps> = ({
  title,
  startTime,
  endTime,
  backgroundColor,
  top,
  height,
  left = 0,
  width = '200px',
}) => {
  return (
    <div
      className="absolute rounded-lg p-1.5 md:p-2 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer"
      style={{
        top: `${top}px`,
        height: `${height}px`,
        left: typeof left === 'string' ? left : `${left}px`,
        width,
        backgroundColor,
      }}
    >
      <h3 className="font-medium text-xs md:text-sm mb-0.5 md:mb-1 truncate">{title}</h3>
      <p className="text-[10px] md:text-xs text-gray-600 truncate">
        {startTime} - {endTime}
      </p>
    </div>
  );
};

export default CalendarEvent;