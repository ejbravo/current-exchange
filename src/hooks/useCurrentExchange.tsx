import { useEffect, useState } from 'react';
import axios from 'axios';

export interface ICurrentExchange {
  [key: string]: number;
  date: number;
  eur: number;
  usd: number;
  jpy: number;
  gbp: number;
}

const useCurrentExchange = (reload: boolean) => {
  // const [metadata, setMetadata] = useState();
  const [currentExchange, setCurrentExchange] = useState<ICurrentExchange[]>();

  useEffect(() => {
    const getCurrentExchange = async () => {
      try {
        const url = `http://${window.location.hostname}:5000/api/current-exchange`;
        const { data } = await axios.get(url);
        const { currentExchange } = data;
        // setMetadata(metadata);
        setCurrentExchange(currentExchange);
      } catch (error) {
        console.warn(error);
      }
    };
    setCurrentExchange(undefined);
    getCurrentExchange();
  }, [reload]);

  return { currentExchange };
};

export { useCurrentExchange };
