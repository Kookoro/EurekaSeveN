import React, { ReactNode, useEffect, useState } from "react";
import { Calendar } from "antd";
import localeCN from "antd/lib/calendar/locale/zh_CN.js";
import "./component-calender.scss";
import store from "../../../mobx/store";
import { useObserver, useLocalStore } from "mobx-react";

import _ from "lodash";
import axios from "axios";
import ArticlesList from "../component-articleEditor/component-articleEditor";

interface ArticlesUpload {
  sdate?: string;
  ncount?: number;
}

function getArticlesUpload() {
  return new Promise((result) => {
    axios
      .get("/index/datelist")
      .then((res) => {
        if (res.status === 200) {
          result(res.data);
        }
      })
      .catch((error) => {});
  });
}

let data = [] as any;

const HomePageCalendar = () => {
  const appstore = useLocalStore(() => store);
  const [isLoading, setLoaded] = useState(true);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    getArticlesUpload().then((result: any) => {
      data = result.details;
      console.log(data);
      setLoaded(false);
      setTotal(result.ntotalArt);
    });
  }, []);
  const onPanelChange = () => {};
  return (
    <section>
      <div className="site-calendar-demo-card">
        <div className="calender-title">
          {useObserver(() => (
            <div>
              <span className="calender-title-name">日历</span>| 共{total}篇记录
            </div>
          ))}
        </div>
        {isLoading ? null : (
          <Calendar
            locale={localeCN}
            fullscreen={false}
            onPanelChange={onPanelChange}
            dateCellRender={dateCellRender}
          />
        )}
      </div>
    </section>
  );
};

const dateCellRender = (value) => {
  function matchLevel(val) {
    let level = 0;
    if (val > 0 && val <= 4) {
      level = 1;
    } else if (val > 4 && val <= 8) {
      level = 2;
    } else if (val > 8 && val <= 16) {
      level = 3;
    } else if (val > 16 && val < Infinity) {
      level = 4;
    }

    return level;
  }

  const getDay = (): ReactNode | null => {
    let flag: boolean = false;
    let level: number = 0;
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].sdate === value.format("YYYY-MM-DD")) {
        flag = true;
        level = data[i].ncount;
      }
    }
    return flag ? (
      <div className={`calendar-mark-${matchLevel(level)}`}></div>
    ) : null;
  };
  return <div>{getDay()}</div>;
};

export default HomePageCalendar;
