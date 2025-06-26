import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <section className="header">
        <p className="time">
          10:24 <span className="timeZone">gmt</span>
        </p>

        <div className="searchBarWrapper">
          <input className="searchBar" placeholder="Search by name or id" />
          <button className="dropdown" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>

        <p className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="logo"
          >
            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
          </svg>
        </p>
      </section>

      <main className="main">
        <section className="mapContainer">
          <header className="mapHeader">
            <h2 className="secondary-header">Live location</h2>
            <div className="refresh">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <p className="timeSince">2s</p>
            </div>
          </header>

          <div className="map"></div>

          <div className="readings">
            <div className="velocityContainer">
              <div className="contentWrapper">
                <svg
                  viewBox="7 47 86 46"
                  xmlns="http://www.w3.org/2000/svg"
                  className="progress"
                >
                  <path
                    d="M 10,90 A 40,40 0 0 1 90,90"
                    fill="none"
                    stroke="#38d9a91a"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10,90 A 40,40 0 0 1 90,90"
                    fill="none"
                    stroke="#38d9a9"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="125.6"
                    strokeDashoffset="65"
                  />
                </svg>
                <p className="value">
                  7.8 <span className="unit">km/s</span>
                </p>
              </div>
              <p className="reading">Velocity</p>
            </div>

            <div className="altitudeContainer">
              <div className="contentWrapper">
                <svg
                  viewBox="7 47 86 46"
                  xmlns="http://www.w3.org/2000/svg"
                  className="progress"
                >
                  <path
                    d="M 10,90 A 40,40 0 0 1 90,90"
                    fill="none"
                    stroke="#DA77F21a"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10,90 A 40,40 0 0 1 90,90"
                    fill="none"
                    stroke="#DA77F2"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="125.6"
                    strokeDashoffset="20"
                  />
                </svg>
                <p className="value">
                  160 <span className="unit">km</span>
                </p>
              </div>
              <p className="reading">Altitude</p>
            </div>
          </div>
        </section>

        <section className="detailContainer">
          <div className="details"></div>

          <aside className="statistics">
            <div className="flyOver"></div>
            <div className="filters"></div>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
