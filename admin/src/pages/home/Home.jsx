import React, { useEffect, useMemo, useState, useRef } from "react";
import { userRequest } from "../../requestMethods";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import ResizeObserver from "resize-observer-polyfill";
import debounce from "lodash/debounce";

export default function Home() {
  const containerRef = useRef(null);
  const [contentRect, setContentRect] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const resizeObserver = new ResizeObserver(
      debounce((entries) => {
        // Handle the debounced resize event here
        const firstEntry = entries[0];
        setContentRect(firstEntry.contentRect);
      }, 200) // Adjust the debounce delay as needed
    );

    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);




  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home" ref={containerRef}>
      <FeaturedInfo />
      <div style={{ width: "100%", height: "400px" }}>
      {userStats.length > 0 && (
  <div style={{ width: "100%", height: "400px" }}>
    <Chart
      data={userStats}
      title="User Analytics"
      grid
      dataKey="Active User"
    />
  </div>
)}

      </div>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
