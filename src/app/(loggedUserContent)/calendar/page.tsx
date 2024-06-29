"use  client"
import {ScheduleComponent} from "@syncfusion/ej2-react-schedule";


// @ts-ignore
export default function calendar(){

    const data = null

    return(
        <>
            <ScheduleComponent eventSettings={data} ></ScheduleComponent>
        </>
    );
}