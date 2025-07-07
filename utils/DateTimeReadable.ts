import {
  differenceInDays, formatDistance, format, nextTuesday, isTuesday,
} from 'date-fns';

export function dateTimeReadable(dateTimeString: string) {
  const publishedAt = new Date(dateTimeString);
  const now = new Date();
  const difference = differenceInDays(now, publishedAt);

  if (difference < 7) {
    return formatDistance(publishedAt, now, { addSuffix: true });
  }
  return format(publishedAt, 'PP');
}

export function userTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function tuesday(skip = false) {
  const stdTimezoneOffset = () => {
    const jan = new Date(0, 1);
    const jul = new Date(6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  };

  const isDstObserved = (date: Date) => date.getTimezoneOffset() < stdTimezoneOffset();

  const today = new Date();
  let nextTue: Date;
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();

  if (skip) {
    nextTue = nextTuesday(nextTuesday(today));
  } else {
    nextTue = nextTuesday(today);
  }

  let time = format(nextTue, 'MM/dd/yyyy');

  let tuesdayUtc: Date;

  if (isDstObserved(new Date(time))) {
    tuesdayUtc = new Date(`${time} 6:00:00 PM UTC`);

    if (isTuesday(today) && (today < (new Date(`${todayYear}/${todayMonth}/${todayDate} 7:00:00 PM UTC`)))) {
      time = `${todayYear}/${todayMonth}/${todayDate}`;
      tuesdayUtc = new Date(`${todayYear}/${todayMonth}/${todayDate} 6:00:00 PM UTC`);
    }
  } else {
    tuesdayUtc = new Date(`${time} 7:00:00 PM UTC`);
    if (isTuesday(today) && (today < (new Date(`${todayYear}/${todayMonth}/${todayDate} 8:00:00 PM UTC`)))) {
      time = `${todayYear}/${todayMonth}/${todayDate}`;
      tuesdayUtc = new Date(`${time} 7:00:00 PM UTC`);
    }
  }

  return `${time},\n${tuesdayUtc.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}
