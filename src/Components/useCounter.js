/***************** handle items'Counter in List ****************/

const useCounter = () => {
  
  const incrementCounter = (value) => {
    return ++value;
  };

  const decrementCounter = (value) => {
    return --value;
  };

  return { incrementCounter, decrementCounter };
};

export default useCounter;
