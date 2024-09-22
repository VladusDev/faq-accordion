import iconStar from "./assets/images/icon-star.svg";
import iconMinus from "./assets/images/icon-minus.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import { useState, useEffect } from "react";

function App() {
  const [open, setOpen] = useState(0);
  const [data, setData] = useState([]);

  const width = window.innerWidth;

  const baseURL = "https://fc62fa5e23725634.mokky.dev/questions";

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  });

  return (
    <>
      <div
        className={width >= 767 ? "header-wrapper" : "header-wrapper-mobile"}
      >
        <div className="faqs-block">
          <div className="faqs-wrapper">
            <div className="faqs-content">
              <div className="faqs-title">
                <img className="iconStar" src={iconStar} alt="Star" />
                <h1 className="faqs-title-text">FAQs</h1>
              </div>
              <div className="quest-list">
                <div className="quest-item">
                  {data.map((obj, index) => (
                    <div key={index + 1} className="quest-items">
                      <div
                        onClick={() => setOpen(index + 1)}
                        className="quest-title"
                      >
                        <h4>{obj.title}</h4>
                        <img
                          src={open === index + 1 ? iconMinus : iconPlus}
                          alt=""
                        />
                      </div>
                      <div
                        className={`quest-subtitle ${
                          open === index + 1 ? "active" : ""
                        }`}
                      >
                        {obj.subTitle}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
