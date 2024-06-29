'use client'
import {
    Week,
    Month,
    ScheduleComponent,
    ViewsDirective,
    ViewDirective,
    EventSettingsModel,
    Inject,
    Resize,
    DragAndDrop,
    Day
} from '@syncfusion/ej2-react-schedule';
import {timelineResourceData} from "@/app/(loggedUserContent)/calendar/datasSource";
import {height} from "@mui/system";

import {registerLicense} from "@syncfusion/ej2-base";
registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmpCeUx0THxbf1x0ZFBMYF9bQH5PIiBoS35RckVlW3Zfd3ZQRmhUVER+');

export default function CalendarComponent() {
    const eventSettings: EventSettingsModel = { dataSource: timelineResourceData }

    return (
        <div className={"mt-20 mb-20"}>
            <ScheduleComponent width='1000px' height='550px' currentView='Month' selectedDate={new Date()} eventSettings={eventSettings} >
            <ViewsDirective>
            <ViewDirective option='Week' />
            <ViewDirective option='Month' />
            <ViewDirective option='Day' />
                    </ViewsDirective>
                <Inject services={[Week, Month, Day, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>
)
}