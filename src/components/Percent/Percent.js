import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

const useStyles = makeStyles(styles);

const Flow = () => {
    const [simpleSelect, setSimpleSelect] = React.useState("");
    const classes = useStyles();
    const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };
  return (
    <div>
        <GridItem xs={12} sm={6} md={8} lg={4}>
            <FormControl
            fullWidth
            className={classes.selectFormControl}
            style={{width:'4vw', marginRight:'-6vw', marginTop:"-1.3vw"}}
            >
            <InputLabel
                htmlFor="simple-select"
                className={classes.selectLabel}
     
            >
            Явц
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
                disabled
                classes={{
                    root: classes.selectMenuItem
                }}
                >
                10%
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="2"
                >
                20%
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="3"
                >
                30%
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="4"
                >
                40%
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="5"
                >
                50%
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="6"
                >
                60%
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="7"
                >
                70%
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="8"
                >
                80%
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="9"
                >
                90%
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="9"
                >
                90%
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="9"
                >
                100%
                </MenuItem>
            </Select>
            </FormControl>
        </GridItem>
    </div>
  )
}

export default Flow