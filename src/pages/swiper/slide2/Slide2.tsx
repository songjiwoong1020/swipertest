import { useQuery } from '@tanstack/react-query';
import Calendar from './Calendar/Calendar';
import { queries } from '@/apis/queries';

const Slide2 = () => {
  const { data } = useQuery(queries.getEventList());

  return (
    <>
      <Calendar />
    </>
  );
};

export default Slide2;
