const getDayData = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDateObj = new Date(year, month, 1);
  const firstDay = firstDateObj.getDay();
  const lastDateObj = new Date(year, month + 1, 0);
  const lastDate = lastDateObj.getDate();

  return { firstDay, lastDate };
};

export default getDayData;
