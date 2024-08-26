type defaultOptionsType = {
  queries: {
    refetchOnWindowFocus: boolean;
    refetchOnMount: boolean;
    retry: number;
    staleTime: number;
  };
};

const defaultOptions:defaultOptionsType = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
    staleTime: 60 * 1000,
  },
};

export default defaultOptions;
