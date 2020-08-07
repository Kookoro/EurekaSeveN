import React, { FunctionComponent, ReactNode } from "react";
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
        <div className="calender-title">
          <span>共0篇文章</span>
        </div>
        <Calendar
          locale={localeCN}
          fullscreen={false}
          onPanelChange={onPanelChange}
          dateCellRender={dateCellRender}
        />
      </div>
    </section>
  );
};

const dateCellRender = (value) => {
  const listData = [
    {
      date: "2020-07-31",
      count: 1,
    },
    {
      date: "2020-08-03",
      count: 1,
    },
    {
      date: "2020-08-05",
      count: 4,
    },
    {
      date: "2020-08-07",
      count: 3,
    },
    {
      date: "2020-08-08",
      count: 2,
    },
    {
      date: "2020-08-11",
      count: 1,
    },
  ];
  const getDay = (): ReactNode | null => {
    let flag: boolean = false;
    let level: number = 0;
    for (let i: number = 0; i < listData.length; i++) {
      if (listData[i].date === value.format("YYYY-MM-DD")) {
        flag = true;
        level = listData[i].count;
      }
    }
    return flag ? <div className={`calendar-mark-${level}`}></div> : null;
  };
  return <div>{getDay()}</div>;
};

export default HomePageCalendar;
