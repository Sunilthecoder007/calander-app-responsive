import React, { useState, useEffect, useRef } from 'react';
import { Search, Home, Star, Instagram, Bell, MessageCircle, ChevronLeft, ChevronRight, ChevronDown, Calendar as CalendarIcon, MoreVertical, Check } from 'lucide-react';
import DayCalendar from './components/DayCalendar';

function App() {
  const [selectedDate, setSelectedDate] = useState('02-07-2024');
  const [selectedView, setSelectedView] = useState('Day');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle click outside of sidebar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Handle menu item click
  const handleMenuItemClick = () => {
    setIsSidebarOpen(false);
  };

  const scheduleItems = [
    { id: 1, title: 'Event-1', color: 'bg-green-500' },
    { id: 2, title: 'Event-2', color: 'bg-orange-500' },
    { id: 3, title: 'Event-3', color: 'bg-purple-500' },
    { id: 4, title: 'Event-4', color: 'bg-cyan-500' },
    { id: 5, title: 'Event-5', color: 'bg-violet-500' },
  ];

  const upcomingEvents = [
    { 
      id: 1, 
      title: 'Event-1', 
      description: 'Description', 
      time: '10:00 am',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    { 
      id: 2, 
      title: 'Event-2', 
      description: 'Description', 
      time: '12:00 am',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    { 
      id: 3, 
      title: 'Event-3', 
      description: 'Description', 
      time: '12:00 am',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    { 
      id: 4, 
      title: 'Event-4', 
      description: 'Description', 
      time: '12:00 am',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
  ];

  const timeSlots = Array.from({ length: 12 }, (_, i) => i + 7);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow py-3 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-full px-4 py-2.5 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <div className={`w-9 h-9 bg-orange-400 rounded-full ${isSearchExpanded ? 'md:block hidden' : ''}`}></div>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 bg-gray-100 rounded-lg w-56 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Mobile Search Bar - Expanded */}
          {isSearchExpanded && (
            <div className="absolute inset-x-0 top-0 bg-white p-4 md:hidden flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none"
                  autoFocus
                />
              </div>
              <button 
                onClick={() => setIsSearchExpanded(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Middle Section - Hidden on Mobile */}
          <div className={`hidden md:flex items-center gap-7 mx-auto ${isSearchExpanded ? 'md:block hidden' : ''}`}>
            <Home className="w-6 h-6 text-gray-700 cursor-pointer" />
            <Star className="w-6 h-6 text-[#00A3FF] cursor-pointer" />
            <Instagram className="w-6 h-6 text-gray-700 cursor-pointer" />
          </div>

          {/* Right Section */}
          <div className={`flex items-center gap-4 md:gap-7 ${isSearchExpanded ? 'md:flex hidden' : ''}`}>
            {/* Search Icon - Visible only on Mobile */}
            {!isSearchExpanded && (
              <div className="md:hidden cursor-pointer" onClick={() => setIsSearchExpanded(true)}>
                <Search className="w-5 h-5 text-gray-600" />
              </div>
            )}
            
            <div className="relative cursor-pointer">
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center">2</div>
              <Bell className="w-5 h-5 text-gray-600" />
            </div>
            <div className="relative cursor-pointer">
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center">3</div>
              <MessageCircle className="w-5 h-5 text-gray-600" />
            </div>
            
            {/* Profile Section */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Profile"
                className="w-7 h-7 rounded-full"
              />
              <span className="hidden md:inline text-gray-500 font-semibold text-sm">Jacob Botshh</span>
              <ChevronDown className="hidden md:block w-4 h-4 text-gray-400" />
            </div>

            {/* Menu Toggle - Visible only on Mobile */}
            <button 
              className="md:hidden p-1 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="pt-24 px-4 flex">
        {/* Sidebar */}
        <div 
          ref={sidebarRef}
          className={`fixed md:relative md:block left-0 top-[0px] h-[calc(100vh)] w-64 bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-6 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0 top-[72px]' : '-translate-x-full md:translate-x-0'
          } md:transform-none z-40`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleMenuItemClick}>
              <Home className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700 text-sm">Home</span>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2 cursor-pointer" onClick={handleMenuItemClick}>
                <CalendarIcon className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700 text-sm">Academi</span>
              </div>
              <div className="ml-7 space-y-2">
                <div className="text-[#00A3FF] text-sm font-semibold cursor-pointer" onClick={handleMenuItemClick}>Academi Calendar</div>
                <div className="text-gray-500 text-sm cursor-pointer" onClick={handleMenuItemClick}>My Calendar</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-3">My Schedule</h3>
            <div className="space-y-2">
              {scheduleItems.map(item => (
                <div key={item.id} className="flex items-center gap-2 cursor-pointer" onClick={handleMenuItemClick}>
                  <div className="flex items-center justify-center w-4 h-4 rounded">
                    <div className={`w-4 h-4 ${item.color} rounded-sm`}><Check className='text-white m-auto w-4 h-4' /></div>
                  </div>
                  <span className="text-gray-600 text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-3">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map(event => (
                <div key={event.id} className="flex gap-3 bg-white p-2 rounded border border-gray-100 cursor-pointer" onClick={handleMenuItemClick}>
                  <img src={event.image} alt={event.title} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{event.title}</h4>
                      <button className="text-gray-400">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">{event.description}</p>
                    <p className="text-xs text-gray-400">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 p-2 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <h2 className="text-lg md:text-xl font-semibold">Calendar</h2>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span>India</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg self-end md:self-auto">
              <CalendarIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full mb-4">
              <div className="flex items-center justify-between md:justify-start md:w-auto w-full">
                <button className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg">
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                </button>
                <span className="mx-2 md:mx-5 text-sm font-semibold">{selectedDate}</span>
                <button className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <div className="flex mx-auto rounded-lg p-0.5 bg-gray-100 md:bg-transparent w-full md:w-auto justify-center">
                {['Day', 'Week', 'Month', 'Year'].map(view => (
                  <button
                    key={view}
                    className={`px-3 py-1 rounded-md text-sm transition-colors flex-1 md:flex-none ${
                      selectedView === view ? 'bg-[#00A3FF] font-semibold text-white' : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedView(view)}
                  >
                    {view}
                  </button>
                ))}
              </div>
              
              <button className="text-gray-800 font-bold hover:bg-gray-100 px-3 py-1 rounded-lg w-full md:w-auto">
                Today
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <DayCalendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;