const customizeDateAndTime = (time, options) => {
  // We need to use a try-catch here to support IE11!

  try {
    return options
      ? new Intl.DateTimeFormat("fa-FA", options).format(time)
      : new Intl.DateTimeFormat("fa-FA").format(time);
  } catch (err) {
    return options
      ? new Intl.DateTimeFormat("en-GB", options).format(time)
      : new Intl.DateTimeFormat("en-GB").format(time);
  }
};

const dateTimeCustom = (date) => {
  const day = customizeDateAndTime(date * 1000, {
    day: "numeric",
  });

  const month = customizeDateAndTime(date * 1000, {
    month: "short",
  });
  const monthNum = customizeDateAndTime(date * 1000, {
    month: "numeric",
  });

  const year = customizeDateAndTime(date * 1000, {
    year: "numeric",
  });
  const time = customizeDateAndTime(date * 1000, {
    hour: "numeric",
    minute: "numeric",
  });

  const hour = customizeDateAndTime(date * 1000, {
    hour: "numeric",
  });

  const minute = customizeDateAndTime(date * 1000, {
    minute: "numeric",
  });
  const weekDay = customizeDateAndTime(date * 1000, {
    weekday: "long",
  });

  const dateDate = year + "/" + monthNum + "/" + day;
  const dateTime = hour + ":" + minute;

  
  return {
    day,
    month,
    year,
    time,
    hour,
    minute,
    weekDay,
    monthNum,
    dateDate,
    dateTime,
  };
};

export default {
  dateTimeCustom,
};
