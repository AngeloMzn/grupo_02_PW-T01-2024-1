'use client'
import {
    Week, Month, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, EventSettingsModel, Inject, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import {timelineResourceData} from "@/app/(loggedUserContent)/calendar/datasSource";
import CalendarComponent from "@/components/Calendar/CalendarComponent";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function calendar() {
    return (
        <>
            <div className={"flex justify-center items-center bg-black bg-opacity-50 mt-10"}>
                <CalendarComponent />
            </div>
        </>
    )
}