// Helper to generate Google Calendar links
export function generateGoogleCalendarUrl({
  title,
  description,
  location,
  startDate, // "20261210T044500Z"
  endDate,   // "20261210T080000Z"
}: {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details: description,
    location: location,
    dates: `${startDate}/${endDate}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// Download .ics file
export function downloadIcsFile({
  title,
  description,
  location,
  startIso,
  endIso,
}: {
  title: string;
  description: string;
  location: string;
  startIso: string;
  endIso: string;
}) {
  const formatIcsDate = (dateStr: string) => {
    return new Date(dateStr).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Srinivas and Pallavi Wedding//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description.replace(/\n/g, '\\n')}
LOCATION:${location}
DTSTART:${formatIcsDate(startIso)}
DTEND:${formatIcsDate(endIso)}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${title.replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
