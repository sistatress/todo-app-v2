import React from "react";
import Counter from "./Counter";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { Grid, IconButton, Input } from "@material-ui/core";
import { useEffect } from "react";
import { animated } from "react-spring";

const Item = ({
  item,
  style,
  list,
  updateItem,
  deleteItem,
  incrementCounter,
  decrementCounter
}) => {
  useEffect(() => {
    const mounted = { current: true };
    if (mounted) {
      console.log(`item ${item.itemId} mounted!`);
      //   console.log(`_item props: ${JSON.stringify(item)}`);
      //   console.log(`
      //     itemID: ${item.itemId}
      //     itemValue: ${item.itemValue}
      //     counterValue: ${item.counterValue}`);
    }

    return () => {
      mounted.current = false;
      console.log(`item ${item.itemId} unmounted!`);
    };
  }, []);

  return (
    <animated.div key={item.itemId} style={style}>
      <div className="list-items">
        <Grid
          container
          direction="row"
          spacing={2}
          className="grid-list-container"
        >
          <Grid item xs={7}>
            <Input
              value={item.itemValue}
              onChange={(e) => updateItem(e.target.value, item.itemId)}
              id={item.itemId}
              className="input-items"
            />
          </Grid>
          <Grid item xs={4}>
            <Counter
              id={item.itemId}
              list={list}
              value={item.counterValue}
              addCounterValue={incrementCounter}
              removeCounterValue={decrementCounter}
            />
          </Grid>
          <Grid item xs={1} className="grid-item-delete-button">
            <IconButton
              color="secondary"
              size="small"
              aria-label="delete"
              className="delete-button"
              onClick={() => deleteItem(item.itemId)}
            >
              <DeleteRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </animated.div>
  );
};

export default Item;
