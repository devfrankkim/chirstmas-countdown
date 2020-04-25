const dDayXmas = document.getElementById("time__countdown");

function getTime() {
  const xmasDay = new Date("2020-12-25:00:00:00");
  const currentTime = new Date();
  const dDay = xmasDay - currentTime;
  const dayMS = 1000 * 60 * 60 * 24; // 1day
  const hourMS = 1000 * 60 * 60; // 1hour
  const minMS = 1000 * 60; // 1min
  const secMS = 1000; // 1sec
  const days = Math.floor(dDay / dayMS);
  const hours = Math.floor((dDay % dayMS) / hourMS);
  const minutes = Math.floor(((dDay % dayMS) % hourMS) / minMS);
  const seconds = Math.floor((((dDay % dayMS) % hourMS) % minMS) / secMS);

  dDayXmas.innerText = `${days < 10 ? `0${days}` : days}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s `;
}

function init() {
  setInterval(getTime, 1000);
}
init();
