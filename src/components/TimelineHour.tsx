import React from 'react';

interface TimelineHourProps {
  hour: number;
}

const TimelineHour: React.FC<TimelineHourProps> = ({ hour }) => {
  const formattedHour = hour <= 12 ? `${hour} AM` : `${hour - 12} PM`;
  
  return (
    <div className="relative h-[100px]">
      {/* Horizontal line for each hour */}
      <div className="absolute left-0 right-0 border-t border-gray-200 w-full" />
      
      {/* Hour label */}
      <span className="absolute -top-2 -left-12 text-xs font-semibold text-gray-600">
        {formattedHour}
      </span>
    </div>
  );
};

export default TimelineHour;