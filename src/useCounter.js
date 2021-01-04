/***************** handle items'Counter in List ****************/

import useList from "./useList";

const useCounter = () => {
  const { list, setList } = useList();

  const incrementCounter = (value) => {
    return ++value;
  };

  const decrementCounter = (value) => {
    return --value;
  };

  const addCounterValue = (value, id) => {
    //console.log(`value: ${value} Id: ${id}`);

    const itemIndex = list.findIndex(
      (itemElement) => itemElement.itemId === id
    );

    const listItems = [...list];
    const newCounterValue = incrementCounter(value);

    //console.log(`listItems: ${JSON.stringify(listItems)}`);
    //console.log(`newCounterValue: ${newCounterValue}`);

    listItems[itemIndex] = {
      ...listItems[itemIndex],
      counterValue: newCounterValue
    };
    // console.log(`[incrementCounter] newCounterValue: ${newCounterValue}`);
    setList([...listItems]);
  };

  const removeCounterValue = (value, id) => {
    //console.log(`value: ${value} Id: ${id}`);

    const itemIndex = list.findIndex(
      (itemElement) => itemElement.itemId === id
    );

    const listItems = [...list];
    const newCounterValue = decrementCounter(value);

    listItems[itemIndex] = {
      ...listItems[itemIndex],
      counterValue: newCounterValue
    };
    // console.log(`listItems: ${JSON.stringify(listItems)}`);
    // console.log(`[decrementCounter] newCounterValue: ${newCounterValue}`);
    setList([...listItems]);
  };

  return { addCounterValue, removeCounterValue };
};

export default useCounter;
