import React, { FunctionComponent, ReactNode } from "react";
import { Calendar } from "antd";
import localeCN from "antd/lib/calendar/locale/zh_CN.js";
import "./component-calender.scss";
import store from "../../../mobx/store";
import { useObserver, Observer, useLocalStore } from "mobx-react";
import _ from 'lodash'
import axios from "axios";
const HomePageCalendar = () => {
  const appstore = useLocalStore(() => store);
  const getList =  _.throttle(selectDateChanged,5000)
  const onPanelChange = (value) => {
    getList(value)
  }; 

  function selectDateChanged(value) {
    axios
      .post("/index/datelist", {})
      .then((res) => {})
      .catch((error) => {});
  }


  return (
    <section>
      <div className="site-calendar-demo-card">
        <div className="calender-title">
          {useObserver(() => (
            <div>
              <span className="calender-title-name">日历</span>| 共
              {appstore.price}篇记录
              
            </div>
        
          ))}
        </div>
        <Calendar
          locale={localeCN}
          fullscreen={false}
          onPanelChange={
            onPanelChange
          }
          dateCellRender={dateCellRender}
        />
      </div>
    </section>
  );
};

const dateCellRender = (value: { format: (arg0: string) => string }) => {
  const listData: Array<{ date: string; count: number }> = [
    {
      date: "2021-05-31",
      count: 1,
    },
    {
      date: "2021-08-03",
      count: 1,
    },
    {
      date: "2021-08-05",
      count: 4,
    },
    {
      date: "2021-08-07",
      count: 3,
    },
    {
      date: "2021-08-08",
      count: 2,
    },
    {
      date: "2021-08-11",
      count: 1,
    },
    {
      date: "2021-09-21",
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
