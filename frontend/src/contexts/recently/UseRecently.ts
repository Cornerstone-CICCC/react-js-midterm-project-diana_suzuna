import { useContext } from 'react';
import { RecentProducts } from './RecentlyContext';

export const useRecently = () => {
  const contex = useContext(RecentProducts);
  if (!contex)
    throw Error('useRecently must be used inside the RecentlyContextProvider.');
  return contex;
};
