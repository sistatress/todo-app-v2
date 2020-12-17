import React from "react";
// import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import "./App.css";
import List from "./Components/List";
import InputUI from "./Components/InputUI";
import NavBar from "./Components/NavigationBar";
import { Grid } from "@material-ui/core";
import useList from "./useList";
import useInput from "./useInput";

export default function App() {
  // const [list, setList] = useState([]);
  // const [input, setInput] = useState("");

  const { input, handleInput } = useInput();
  //const {decrementCounter,incrementCounter } = useCounter();

  const {
    list,
    createItem,
    updateItem,
    deleteItem,
    addCounterValue,
    removeCounterValue
  } = useList();

  const isList = list.length > 0 ? true : false;
  console.log(`listItems: ${JSON.stringify(list)}`);
  console.log(`App: input: ${input}`);
  return (
    <div className="App">
      <Grid container spacing={3}>
        {/* Navigation Bar */}
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid className="main-grid" item={false} lg={12}>
          <Grid container direction="column" justify="space-between">
            {isList && (
              <List
                isList={isList}
                list={list}
                updateItem={updateItem}
                deleteItem={deleteItem}
                incrementCounter={addCounterValue}
                decrementCounter={removeCounterValue}
              />
            )}
          </Grid>
          {/* user-input */}
          <Grid item lg={8}>
            <div className="user-input">
              <InputUI
                value={input}
                handleInput={handleInput}
                createItem={createItem}
              />
            </div>
          </Grid>
        </Grid>
        {/* <Grid item xs={1}>
          <Paper className={classes.paper}>rigth xs=2</Paper>
        </Grid> */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>Footer xs=12</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
