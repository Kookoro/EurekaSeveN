import React, { FunctionComponent } from "react";
import { Calendar } from "antd";
import localeCN from "antd/lib/calendar/locale/zh_CN.js";
import "../../scss/calender.scss";
const HomePageCalendar: FunctionComponent = () => {
  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };
  return (
    <section>
      <div className="site-calendar-demo-card">
        <Calendar
          locale={localeCN}
          fullscreen={false}
          onPanelChange={onPanelChange}
        />
      </div>
    </section>
  );
};

export default HomePageCalendar;
