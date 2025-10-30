import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useQuery } from '@tanstack/react-query'
import type { EventClickArg } from "@fullcalendar/core";
import type { EventHoveringArg } from "@fullcalendar/core";
import { useState } from 'react';

import './calendarStyle.css';

const events = [
  { title: 'Meeting', start: new Date() },
  { start: new Date(2025, 9, 5, 16, 10), end: new Date(2025, 9, 5, 18, 10),
    description:'test'
   }
]

// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds) 

export const Calendar = () => {

  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuEvent, setMenuEvent] = useState<any>(null);
  const [menuPos, setMenuPos] = useState<{x: number, y: number} | null>(null);

  const eventClick = (info: EventClickArg) => {
    setSelectedEvent({
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      description: info.event.extendedProps.description,
    });
    setIsModalOpen(true);
  }

  const eventMouseEnter = (arg: EventHoveringArg) => {
    const x = arg.jsEvent.clientX;
    const y = arg.jsEvent.clientY;
    setMenuEvent({
      title: arg.event.title,
      description: arg.event.extendedProps.description,
      start: arg.event.start,
      end: arg.event.end,
    });
    setMenuPos({x, y});
  }

  const eventMouseLeave = (_arg: EventHoveringArg) => {
    setMenuEvent(null);
    setMenuPos(null);
  }

  // const { data } = useQuery({
  //   queryKey: ['queryTest'],
  //   queryFn: async () => {
  //     const response = await fetch('http://keonhee.synology.me/rest/dsfootball/checkAuthNumber', {method:'POST'})
  //     console.log(response.json());
  //     return await response.json()
  //   },
  // })
  return (
    <div style={{width: "55%", height: "80%"}}>
      {isModalOpen && selectedEvent && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
        }}>
          <div style={{ background: 'white', padding: 24, borderRadius: 8, minWidth: 300, minHeight: 140 }}>
            <h2>{selectedEvent.title}</h2>
            <p style={{marginBottom:8}}>
              <b>시작</b>: {selectedEvent.start?.toLocaleString() || '-'}<br/>
              <b>종료</b>: {selectedEvent.end?.toLocaleString() || '-'}<br/>
              {selectedEvent.description && (<>
                <b>설명</b>: {selectedEvent.description}
              </>)}
            </p>
            <button style={{float:'right'}} onClick={() => setIsModalOpen(false)}>닫기</button>
          </div>
        </div>
      )}
      {menuEvent && menuPos && (
        <div style={{position:'fixed', zIndex: 2000, top: menuPos.y+10, left: menuPos.x+10, background:'white', borderRadius:8, boxShadow: '0 2px 8px rgba(0,0,0,.15)', padding: '12px 16px', minWidth:160}}>
          <div><b>{menuEvent.title}</b></div>
          {menuEvent.start && <div style={{fontSize:12, color:'#555'}}>시작: {menuEvent.start.toLocaleString()}</div>}
          {menuEvent.end && <div style={{fontSize:12, color:'#555'}}>종료: {menuEvent.end.toLocaleString()}</div>}
          {menuEvent.description && <div style={{fontSize:12, marginTop:2, color:'#888'}}>설명: {menuEvent.description}</div>}
          <div style={{marginTop: 8}}><button onClick={() => {setIsModalOpen(true); setSelectedEvent(menuEvent);}}>자세히</button></div>
        </div>
      )}
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        locale="kr"
        // height={'auto'}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next",
        }}
        events={events}
        // contentHeight={"100px"}
        eventClick={eventClick}
        eventMouseEnter={eventMouseEnter}
        eventMouseLeave={eventMouseLeave}
        displayEventEnd={true}
        expandRows={true}
      />
    </div>
  );
}