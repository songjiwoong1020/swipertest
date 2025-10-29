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
    <>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        locale="kr"
        events={events}
        height={"100%"}
        // contentHeight={"100px"}
      />
    </>
  );
}
