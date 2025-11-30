import { queryOptions } from '@tanstack/react-query';
import { getEventList } from './client';

export const queries = {
  getEventList: (eventDate: string) =>
    queryOptions({
      queryKey: ['getEventList'],
      queryFn: () => getEventList(eventDate),
    }),
};
