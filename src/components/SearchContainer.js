import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(32),
      height: theme.spacing(8),
    },
    zIndex: 500,
    position: "fixed",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState([]);

  //   useEffect(() => {
  //       console.log(searchInput);
  //   })

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Autocomplete
          style={{ padding: 5 }}
          disableClearable
          options={["1", "2"]}
          open={searchInput.length >= 1}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{ ...params.InputProps, type: "search" }}
              onChange={handleOnChange}
            />
          )}
        />
      </Paper>
    </div>
  );
}
