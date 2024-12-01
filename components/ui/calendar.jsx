"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { isToday, isAfter, isBefore, addHours, startOfDay, endOfDay } from "date-fns";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Calendar({
  className,
  classNames = {},
  showOutsideDays = true,
  onDateTimeChange,
  ...props
}) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = React.useState(null);

  // Disable past dates
  const isDateDisabled = (date) => {
    return isBefore(date, startOfDay(today));
  };

  // Time slots between 12:30 PM to 2:00 AM
  const generateTimeSlots = (date) => {
    const startTime = new Date(date);
    startTime.setHours(12, 30, 0); // 12:30 PM

    const endTime = addHours(startTime, 13.5); // 2:00 AM of the next day

    const slots = [];
    let currentTime = startTime;
    while (isBefore(currentTime, endTime)) {
      slots.push(new Date(currentTime));
      currentTime = addHours(currentTime, 0.5); // Increment by 30 minutes
    }
    return slots;
  };

  // Handler for date selection
  const handleDateChange = (date) => {
    if (!date) return;
    setSelectedDate(date);
    const validTimeSlots = generateTimeSlots(date);

    if (onDateTimeChange) {
      onDateTimeChange({
        date,
        timeSlots: validTimeSlots,
      });
    }
  };

  return (
    <div>
      {/* Calendar UI */}
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        disabled={isDateDisabled}
        onSelect={handleDateChange}
        classNames={{
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: cn(
            "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
            "[&:has([aria-selected].day-range-end)]:rounded-r-md",
            "[&:has([aria-selected].day-outside)]:bg-accent/50",
            "[&:has([aria-selected])]:bg-accent",
            "first:[&:has([aria-selected])]:rounded-l-md",
            "last:[&:has([aria-selected])]:rounded-r-md"
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
          ),
          day_range_end: "day-range-end",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside:
            "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            " aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: () => <ChevronLeft className="h-4 w-4" />,
          IconRight: () => <ChevronRight className="h-4 w-4" />,
        }}
        {...props}
      />

      {/* Render valid time slots */}
      {selectedDate && (
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Available Time Slots:</h3>
          <ul className="space-y-2">
            {generateTimeSlots(selectedDate).map((slot, index) => (
              <li key={index} className="text-sm">
                {slot.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Calendar.displayName = "Calendar";