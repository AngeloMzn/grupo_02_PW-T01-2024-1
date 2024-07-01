import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Week, Month, ScheduleComponent, ViewsDirective, ViewDirective, Inject, Resize, DragAndDrop, Day, Agenda, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerLicense } from "@syncfusion/ej2-base";
import {useSession} from "next-auth/react";

registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmpCeUx0THxbf1x0ZFBMYF9bQH5PIiBoS35RckVlW3Zfd3ZQRmhUVER+');

interface EventData {
    Id?: number;
    StartTime: Date;
    EndTime: Date;
    Subject: string;
    Location: string;
    Description: string;
    IsAllDay: boolean;
    StartTimezone?: string;
    EndTimezone?: string;
    RecurrenceRule?: string;
    RecurrenceID?: number;
    FollowingID?: number;
    UserEmail?: string; 
}

export default function CalendarComponent() {
    const [events, setEvents] = useState<EventData[]>([]);
    const { data: session } = useSession();
    useEffect(() => {
        fetchEvents().then(data => setEvents(data));
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/api/events');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar eventos:', error);
            toast.error('Erro ao carregar eventos. Tente novamente mais tarde.');
            return [];
        }
    };

    const handleActionBegin = async (args: any) => {
        if (args.requestType === 'eventCreate') {
            const eventData = {
                ...args.data[0],
                UserEmail: session?.user?.email
            };
            try {
                const response = await axios.post('/api/events', eventData);
                setEvents([...events, response.data]);
                toast.success('Evento criado com sucesso.');
            } catch (error) {
                console.error('Erro ao criar evento:', error);
                toast.error('Erro ao criar evento. Tente novamente mais tarde.');
            }
        } else if (args.requestType === 'eventChange') {
            const data = {
                ...args.changedRecords[0],
                id: args.changedRecords[0].Id,
            };
            try {
                const response = await axios.put(`/api/events/`, data);
                const updatedEvents = events.map(event =>
                    event.Id === data.Id ? response.data : event
                );
                setEvents(updatedEvents); 
                toast.success('Evento atualizado com sucesso.');
            } catch (error) {
                console.error('Erro ao atualizar evento:', error);
                toast.error('Erro ao atualizar evento. Tente novamente mais tarde.');
            }
        } else if (args.requestType === 'eventRemove') {
            try {
                const data: any = {Id: args.deletedRecords[0].Id}
                await axios.delete(`/api/events/`, {data});
                const updatedEvents = events.filter(event => event.Id !== args.deletedRecords[0].Id);
                setEvents(updatedEvents); 
                toast.success('Evento excluído com sucesso.');
            } catch (error) {
                console.error('Erro ao excluir evento:', error);
                toast.error('Erro ao excluir evento. Tente novamente mais tarde.');
            }
        }
    };

    const eventSettings: EventSettingsModel = {
        dataSource: events
    };

    return (
        <div className="mt-20 mb-20">
            <ToastContainer />

            {/* Componente Syncfusion Scheduler */}
            <ScheduleComponent
                width="1000px"
                height="550px"
                currentView="Month"
                selectedDate={new Date()}
                eventSettings={eventSettings}
                actionBegin={handleActionBegin} 
            >
                <ViewsDirective>
                    <ViewDirective option="Week" />
                    <ViewDirective option="Month" />
                    <ViewDirective option="Day" />
                    <ViewDirective option="Agenda" />
                </ViewsDirective>
                <Inject services={[Week, Month, Day, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>
    );
}
