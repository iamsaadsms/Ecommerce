import React from "react";
import './Navtabs.css';

const Navtabs = () => {
    const tabs = [
        {
            title: "Home"
        },
        {
            title: "New Arrivals"
        },
        {
            title: {
                drop: "Products",
                items: ["Oil", "Brushes", "Polish", "Paint"]
            }
        },
        {
            title: "Sale"
        }
    ];

    return (
        <div className="Navtabs">
            {tabs.map((tab, index) => (
                <div className="tab" key={index}>
                    {typeof tab.title === "string" ? (
                        <span className="nav-tab">{tab.title}</span>
                    ) : (
                        <div className="dropdown">
                            <span className="nav-tab dropdown-title">{tab.title.drop}</span>
                            <div className="dropdown-content">
                                {tab.title.items.map((item, idx) => (
                                    <span key={idx} className="dropdown-item">{item}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Navtabs;
