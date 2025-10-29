import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useQuery } from '@tanstack/react-query'

const events = [
  { title: 'Meeting', start: new Date() }
]

export const Calendar = () => {

  // const { data } = useQuery({
  //   queryKey: ['queryTest'],
  //   queryFn: async () => {
  //     const response = await fetch('http://keonhee.synology.me/rest/dsfootball/checkAuthNumber', {method:'POST'})
  //     console.log(response.json());
  //     return await response.json()
  //   },
  // })
  return (
    <div style={{width: "55%", height: "95%"}}>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        locale="kr"
        events={events}
        // contentHeight={"100px"}
      />
    </div>
  );
}
