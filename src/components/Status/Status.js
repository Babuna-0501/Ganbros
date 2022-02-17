import React from 'react'
import GridItem from "components/Grid/GridItem.js";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";


const useStyles = makeStyles(styles);
const styles = {
    customCardContentClass: {
      paddingLeft: "0",
      paddingRight: "0"
    },
    cardIconTitle: {
      ...cardTitle,
      marginTop: "0px",
      marginBottom: "0px"
    }
  };
function Status() {
    const [simpleSelect, setSimpleSelect] = React.useState("");
    const classes = useStyles();
  
    const handleSimple = event => {
      setSimpleSelect(event.target.value);
    };
  return (
    <div><GridItem xs={10} sm={12} md={12} lg={12}>
    <FormControl
      fullWidth
      className={classes.selectFormControl}
    >
      <InputLabel
        htmlFor="simple-select"
        className={classes.selectLabel}
      >
        Төлөв сонгох
      </InputLabel>
      <Select
        MenuProps={{
          className: classes.selectMenu
        }}
        classes={{
          select: classes.select
        }}
        value={simpleSelect}
        onChange={handleSimple}
        inputProps={{
          name: "simpleSelect",
          id: "simple-select"
        }}
      >
        <MenuItem
          classes={{
            root: classes.selectMenuItem,
            selected: classes.selectMenuItemSelected
          }}
          value="2"
        >
         Ачигдсан
        </MenuItem>
        <MenuItem
          classes={{
            root: classes.selectMenuItem,
            selected: classes.selectMenuItemSelected
          }}
          value="3"
        >
          Саатсан
        </MenuItem>
        <MenuItem
          classes={{
            root: classes.selectMenuItem,
            selected: classes.selectMenuItemSelected
          }}
          value="4"
        >
          Амжилттай хүргэгдсэн
        </MenuItem>
      </Select>
    </FormControl>
    </GridItem></div>
  )
}

export default Status