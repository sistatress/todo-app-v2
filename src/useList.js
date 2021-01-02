/***************** handle input items in List ****************/

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useInput from "./useInput";
import useCounter from "./useCounter";

const useList = () => {
  const { input, setInput } = useInput();
  const { decrementCounter, incrementCounter } = useCounter();
  const [list, setList] = useState([]);

  // const listSize = list.length;

  // useEffect(() => {
  //   setInput('');
  // })

  const createItem = (event) => {
    //console.log(`listItems: ${JSON.stringify(list)}`);
    const eventComing = event.key;
    //console.log(`[ createItem 1] event Coming ${eventComing}`);

    // No Enter event
    if (eventComing !== "Enter") {
      return;
    }

    // Enter event
    const inputValue = event.target.value;
    const id = uuidv4();
    const item = {
      itemId: id,
      itemValue: inputValue,
      counterValue: 0
    };

    setList([...list, item]); // Set counters state
    // setInput('');               // Clear User Input
    console.log(`useList: input : ${input}`);
  };

  const updateItem = (value, id) => {
    //console.log(`id : ${id}`)

    const itemIndex = list.findIndex(
      (itemElement) => itemElement.itemId === id
    );
    //console.log(`itemIndex ${itemIndex}`)

    const listItems = [...list];
    listItems[itemIndex] = { ...listItems[itemIndex], itemValue: value };
    setList([...listItems]);
  };

  const deleteItem = (id) => {
    // Copy of the counters array
    const listItems = [...list];

    // Delete item
    const newList = listItems.filter((item) => item.itemId !== id);

    // Set counters state
    setList(newList);
  };

  const addCounterValue = (id, value) => {
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
    console.log(`[incrementCounter] newCounterValue: ${newCounterValue}`);
    setList([...listItems]);
  };

  const removeCounterValue = (id, value) => {
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
    console.log(`listItems: ${JSON.stringify(listItems)}`);
    console.log(`[decrementCounter] newCounterValue: ${newCounterValue}`);
    setList([...listItems]);
  };

  return {
    list,
    setList,
    createItem,
    updateItem,
    deleteItem,
    addCounterValue,
    removeCounterValue
  };
};

export default useList;

// LIST SCHEMA
/*
      
    [{item1}, {item2}, {item3}, ...]
    item1 : [0] item2 : [1], item3 : [2], ...
    
    [
      {itemId : id0, value: inputValue, counterdefaultValue : 0}, // item1 : [0]
      {itemId : id1, value: inputValue, counterValue: defaultValue=0}, // item2 : [1]
      {itemId : id2, value: inputValue, counterValue: defaultValue=0}, // item3 : [2] 
      ...
    ]
  
*/
