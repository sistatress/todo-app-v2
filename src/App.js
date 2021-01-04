import React, { useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import "./App.css";
import List from "./Components/List";
// import InputUI from "./Components/InputUI";
import NavBar from "./Components/NavigationBar";
import { Grid, Input } from "@material-ui/core";
import useList from "./Components/useList";
import useInput from "./Components/useInput";
import Container from "@material-ui/core/Container";

export default function App() {
  const { input, clearInput, handleInput } = useInput();

  const {
    list,
    getListSize,
    createItem,
    updateItem,
    deleteItem,
    addCounterValue,
    removeCounterValue
  } = useList();

  useEffect(() => {
    clearInput();
  }, [list]);

  const isListEmpty = getListSize() > 0 ? true : false;
  // console.log(`listItems: ${JSON.stringify(list)}`);
  // console.log(`App: input: ${input}`);
  return (
    <div className="App">
      <Grid container spacing={3}>
        {/* Navigation Bar */}
        <Grid item={true} xs={12}>
          <NavBar />
        </Grid>
        <Grid className="main-grid">
          <Grid item={true} xs={12}>
            {isListEmpty && (
              <List
                list={list}
                updateItem={updateItem}
                deleteItem={deleteItem}
                incrementCounter={addCounterValue}
                decrementCounter={removeCounterValue}
              />
            )}
          </Grid>
          {/* user-input */}
          <Container className="user-input" direction="column">
            <Grid
              container
              item={true}
              xs={12}
              justify="center"
              alignItems="center"
            >
              <Input
                value={input}
                autoFocus={true}
                onChange={(e) => handleInput(e.target.value)}
                onKeyPress={(event) => createItem(event)}
              />
            </Grid>
          </Container>
        </Grid>
        {/* <Grid item xs={1}>
          <div>rigth xs=2</div>
        </Grid> */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>Footer xs=12</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
