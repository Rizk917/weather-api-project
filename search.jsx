
<div className="searchBox">
  <input
    onChange={handleChange}
    value={message}
    type="text"
    placeholder="Type in a city name"
    className="text-city"
  />

  <button
    onClick={async (e) => {
      await getWeatherData();
      setLocation(message);
    }}
    className="button"
  >
    {" "}
    search
  </button>
</div>
