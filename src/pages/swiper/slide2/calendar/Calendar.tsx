import styles from './Calendar.module.css';
import DayCell from './DayCell/DayCell';
import getDayData from '@/shared/utils/getDayData';

const Calendar = () => {
  const { firstDay, lastDate } = getDayData(new Date());

  return (
    <div className={styles.container}>
      <div className={styles.gridFirstRow}>일</div>
      <div className={styles.gridFirstRow}>월</div>
      <div className={styles.gridFirstRow}>화</div>
      <div className={styles.gridFirstRow}>수</div>
      <div className={styles.gridFirstRow}>목</div>
      <div className={styles.gridFirstRow}>금</div>
      <div className={styles.gridFirstRow}>토</div>
      {Array(firstDay)
        .fill(0)
        .map(() => (
          <div></div>
        ))}
      {Array(lastDate)
        .fill(0)
        .map((_, i) => (
          <DayCell i={i} />
        ))}
    </div>
  );
};

export default Calendar;
