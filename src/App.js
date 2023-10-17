import React from "react";
import { Icon } from "@iconify/react";
function MyComponent() {
  const navigations = [
    { label: "Dashboard", icon: "ph:key-bold" },
    { label: "Product", icon: "ph:cube-bold" },
    { label: "Customers", icon: "bx:user" },
    { label: "Income", icon: "fluent:keyboard-mouse-16-regular" },
    { label: "Promote", icon: "lucide:badge-percent" },
    { label: "Help", icon: "mdi:comment-help-outline" },
  ];

  const upperSection = [
    {
      icon: "fluent:tasks-app-28-regular",
      label: "Earning",
      earning: 198,
      profit: 37.8,
      class: 'earning'
    },
    {
      icon: "fluent-mdl2:reservation-orders",
      label: "Orders",
      earning: 198,
      profit: 37.8,
      class: 'orders'
    },
    {
      icon: "ic:baseline-account-balance",
      label: "Balance",
      earning: 198,
      profit: 37.8,
      class: 'balance'
    },
    {
      icon: "basil:bag-outline",
      label: "Total Sales",
      earning: 198,
      profit: 37.8,
      class: 'total-sales'
    },
  ];

  return (
    <div className="main-layout">
      <div className="navigation">
        <div className="navigation-header">
          <h3 className="navigation-item">
            <Icon icon="material-symbols:hexagon-outline" />
            <span>Dashboard</span>
          </h3>
        </div>
        <div className="flex-grow">
          {navigations.map((nav) => (
            <div key={nav.label} className="navigation-item">
              <Icon icon={nav.icon} />
              <span className="flex-grow">{nav.label}</span>
              <Icon icon="mingcute:right-fill" />
            </div>
          ))}
        </div>
      </div>
      <div className="main-body">
        <header>
          <h4>Hello Shahrukh</h4>
          <Icon icon="fluent:hand-wave-16-regular" />
          <span className="flex-grow">,</span>
          <input type="search" placeholder="Search" />
        </header>
        <main>
          <section className="upper-section">
            {upperSection.map((data) => (
              <div key={data.label} className="upper-item">
                <Icon icon={data.icon} className={data.class + " upper-icon"} />
                <div>
                  <div>{data.label}</div>
                  <h3>${data.earning}k</h3>
                  <div>
                    <span>{data.profit + "% "}</span>
                    <span>this month</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default MyComponent;
