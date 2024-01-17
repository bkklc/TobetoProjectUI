import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import trLocale from "@fullcalendar/core/locales/tr";
import { DateSelectArg } from "@fullcalendar/core/index.js";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";


type Props = {};

const CalendarComponent = (props: Props) => {
  const [events, setEvents] = useState<any>([
    { title: "Meeting", start: new Date() },
  ]);

  function handleDateSelect(selectInfo: DateSelectArg) {
    let title = prompt("Please enter a new title for your event");
    if (!title) return;
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // seçilen tarihten seçimi kaldır
    setEvents([...events, { title: title, ...selectInfo }]);
  }

  useEffect(() => {
    console.log(events);
  }, [events]);

  
  return (
    <Col md={8} lg={9} >

      <div className=" p-5">
        <FullCalendar
          locales={[trLocale]}
          locale="tr"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "today prev next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          weekends={true}
          events={events}
          select={(arg) => handleDateSelect(arg)} // tarihlerden herhangi birisi seçildiğinde tetiklenir.
          eventContent={renderEventContent} // tarihlerin gösterileceği fonksiyon, aslında bir component
          eventClick={(arg) => console.log(arg)} // tarihin içindeki eventlere tıklandığında tetiklenir
          eventsSet={(arg) => console.log(arg)} // ay,hafta,gün gibi seçimlerde tetiklenir.
        />
      </div>

    </Col>
  );
};

function renderEventContent(eventInfo: any) {
  return (
    <>


      
        <div className="d-flex flex-column ms-4 my-1">
          <span>{eventInfo.timeText}</span>
          <span className="text-truncate">{eventInfo.event.title}</span>
          <span className="text-truncate">Ahmet Çetinkaya</span>
        </div>
      



    </>
  );
}

export default CalendarComponent;
