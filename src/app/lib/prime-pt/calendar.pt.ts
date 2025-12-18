import { DatePickerPassThrough } from "primeng/datepicker";

export const CalendarPt: DatePickerPassThrough = {
    panel: 'grid! grid-cols-15!',
    calendarContainer: 'col-span-13! [&>.p-datepicker-calendar]:p-0!',
    buttonbar: 'col-span-15!',
    header: 'col-span-13! border-r! border-gray-300!',
};