import React from 'react';
import TimelineHour from './TimelineHour';
import CalendarEvent from './CalendarEvent';

const events = [
  {
    id: 1,
    title: 'Event-1',
    startTime: '07:00 AM',
    endTime: '08:00 AM',
    backgroundColor: '#FFF7E6',
  },
  {
    id: 2,
    title: 'Event-2',
    startTime: '07:00 AM',
    endTime: '10:00 AM',
    backgroundColor: '#F0F4FF',
  },
  {
    id: 3,
    title: 'Event-3',
    startTime: '11:00 AM',
    endTime: '13:00 PM',
    backgroundColor: '#F0F7F0',
  },
  {
    id: 4,
    title: 'Event-4',
    startTime: '11:00 AM',
    endTime: '13:00 PM',
    backgroundColor: '#E6FFFF',
  },
  {
    id: 5,
    title: 'Event-5',
    startTime: '14:00 PM',
    endTime: '17:00 PM',
    backgroundColor: '#FFFFF0',
  },
  {
    id: 6,
    title: 'Event-6',
    startTime: '14:00 PM',
    endTime: '17:00 PM',
    backgroundColor: '#FFF0F0',
  },
];

const DayCalendar = () => {
  const hours = Array.from({ length: 12 }, (_, i) => i + 7); // 7 AM to 18 PM

  const calculateEventPosition = (startTime: string) => {
    const [hours, minutes] = startTime.split(':');
    const hour = parseInt(hours);
    const minute = parseInt(minutes);
    return (hour - 7) * 100 + (minute / 60) * 100;
  };

  const calculateEventHeight = (startTime: string, endTime: string) => {
    const [startHours, startMinutes] = startTime.split(':');
    const [endHours, endMinutes] = endTime.split(':');
    const start = parseInt(startHours) + parseInt(startMinutes) / 60;
    const end = parseInt(endHours) + parseInt(endMinutes) / 60;
    return (end - start) * 100;
  };

  return (
    <div className="mt-8 md:mt-16">
      <div className="relative ml-12 md:ml-16">
        {/* Timeline */}
        <div className="absolute left-0 top-0 h-full">
          {hours.map((hour) => (
            <TimelineHour key={hour} hour={hour} />
          ))}
        </div>

        {/* Events Container with Grid */}
        <div className="relative ml-0" style={{ height: '1200px' }}>
          {/* Grid lines */}
          <div className="absolute inset-0">
            {hours.map((hour) => (
              <React.Fragment key={hour}>
                {/* Hour line */}
                <div className="border-t border-gray-200 h-[50px] w-full" />
                {/* 30-minute line */}
                <div className="border-t border-gray-200 h-[50px] w-full" />
              </React.Fragment>
            ))}
          </div>

          {/* Events */}
          <div className="relative">
            {events.map((event, index) => {
              const top = calculateEventPosition(event.startTime.split(' ')[0]);
              const height = calculateEventHeight(
                event.startTime.split(' ')[0],
                event.endTime.split(' ')[0]
              );
              // Adjust event positioning for different screen sizes
              const left = window.innerWidth <= 768 
                ? (index % 2 === 0 ? 0 : '50%')
                : (index % 3 === 0 ? 0 : index % 3 === 1 ? '33.33%' : '66.66%');
              const width = window.innerWidth <= 768 
                ? 'calc(50% - 8px)'
                : 'calc(33.33% - 8px)';

              return (
                <CalendarEvent
                  key={event.id}
                  title={event.title}
                  startTime={event.startTime}
                  endTime={event.endTime}
                  backgroundColor={event.backgroundColor}
                  top={top}
                  height={height}
                  left={left}
                  width={width}
                />
              );
            })}
          </div>
          
          {/* Red line for current time */}
          <div 
            className="absolute w-full h-[2px] bg-red-500 z-10" 
            style={{ top: '400px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default DayCalendar;