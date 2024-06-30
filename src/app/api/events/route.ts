import { NextResponse } from 'next/server';
import db from "../../../../core/db";

export async function GET() {
    try {
        const events = await db.event.findMany();
        return NextResponse.json(events);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao recuperar eventos' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newEvent = await db.event.create({
            data: {
                Id: data.Id,
                StartTime: new Date(data.StartTime),
                EndTime: new Date(data.EndTime),
                Subject: data.Subject,
                Location: data.Location,
                Description: data.Description,
                IsAllDay: data.IsAllDay,
                StartTimezone: data.StartTimezone,
                EndTimezone: data.EndTimezone,
                RecurrenceRule: data.RecurrenceRule,
            },
        });

        return NextResponse.json(newEvent, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao criar evento' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const data = await request.json();

        await db.event.delete({
            where: { Id: Number(data.Id) },
        });
        return NextResponse.json({ message: 'Evento excluído com sucesso' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao excluir evento' }, { status: 500 });
    }
}
export async function PUT(request: Request) {
    try {
        const data = await request.json();

        if (!data.Id || isNaN(Number(data.Id))) {
            return NextResponse.json({ error: 'Valid ID is required' }, { status: 400 });
        }

        const updatedEvent = await db.event.update({
            where: { Id: Number(data.Id) },
            data: {
                Id: Number(data.Id),
                StartTime: new Date(data.StartTime),
                EndTime: new Date(data.EndTime),
                Subject: data.Subject,
                Location: data.Location,
                Description: data.Description,
                IsAllDay: data.IsAllDay,
                StartTimezone: data.StartTimezone,
                EndTimezone: data.EndTimezone,
                RecurrenceRule: data.RecurrenceRule,
            }
        });

        if (!updatedEvent) {
            return NextResponse.json({ error: 'Event not found' }, { status: 404 });
        }

        return NextResponse.json(updatedEvent, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error updating event' }, { status: 500 });
    }
}
