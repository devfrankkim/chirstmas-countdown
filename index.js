const dDayXmas = document.getElementById("time__countdown");

function getTime() {
  const xmasDay = new Date("2020-12-25:00:00:00");
  const currentDate = new Date();

  const dDay = xmasDay.getTime() - currentDate.getTime();

  const days = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dDay / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((dDay / (1000 * 60)) % 60);
  const seconds = Math.floor((dDay / 1000) % 60);

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
