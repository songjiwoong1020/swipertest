import styles from './DayCell.module.css';

const DayCell = ({ i }) => {
  return (
    <div className={styles.container}>
      {i + 1}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>풋살</div>
        <button>1</button>
        <button>1</button>
      </div>
    </div>
  );
};

export default DayCell;
