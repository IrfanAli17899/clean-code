export const formattedDate = (date = new Date()) => {
    return new Intl.DateTimeFormat('en-US').format(date);
};