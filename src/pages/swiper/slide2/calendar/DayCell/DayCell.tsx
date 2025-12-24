import { useDayCell } from '@/pages/Swiper/Slide2/hooks/useDayCell';
import styles from './DayCell.module.css';

const DayCell = ({ i }) => {
  const { handleEventBtnClick, handleEventBtnListClick } = useDayCell();
  return (
    <div className={styles.container}>
      {i + 1}
      {i % 5 === 0 ? (
        <div className={styles.eventCell}>
          <div>풋살</div>
          <button onClick={handleEventBtnClick} className={styles.eventBtn}>
            참여하기
          </button>
          <button onClick={handleEventBtnListClick} className={styles.eventListBtn}>
            참여자: O명
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DayCell;

const style = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
};

const style2 = {
  position: 'relative',
  backgroundColor: '#fff',
  maxWidth: '90dvw',
  maxHeight: '90dvh',
  overflowY: 'auto',
  padding: '2rem',
  borderRadius: '12px',
};
