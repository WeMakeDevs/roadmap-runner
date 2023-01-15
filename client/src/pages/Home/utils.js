export function getDayofYear(date) {
  var now = new Date(date);
  var start = new Date(now.getFullYear(), 0, 0);
  var diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
}

export function getProgressByDayNumber(progress) {
  let levelsData = {};
  let data = {};
  let progressArr = [];

  for (let prog of progress) {
    if (prog.completedId) {
      progressArr.push(...prog.completedId);
    }
  }

  for (let prog of progressArr) {
    const day = getDayofYear(prog.date);

    if (data[day]) {
      data[day] += 1;
    } else {
      data[day] = 1;
    }
  }

  for (let i = 0; i < 365; i++) {
    if (data[i] === 1) {
      levelsData[i] = 1;
    } else if (data[i] === 2 || data.obj === 3) {
      levelsData[i] = 2;
    } else if (data[i] > 3) {
      levelsData[i] = 3;
    } else {
      levelsData[i] = 0;
    }
  }

  levelsData[14] = 1;

  return levelsData;
}
