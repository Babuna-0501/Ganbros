import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
        <GridItem xs={12} sm={6} md={12} lg={12}>
            <FormControl
            fullWidth
            className={classes.selectFormControl}
            style={{width:'10vw'}}
            >
            <InputLabel
                htmlFor="simple-select"
                className={classes.selectLabel}
     
            >
                Захиалгын явц
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
                Сонгох
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="2"
                >
                Хэмжээ авах
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="3"
                >
                Төлөвлөлтийн зураг
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="4"
                >
                Үнийн санал
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="5"
                >
                Гэрээ хийх
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="6"
                >
                Хяналтын хэмжилт
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="7"
                >
                Цахилгаан барааны шийдэл
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="8"
                >
                Сан, цахилгааны шийдэл
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="9"
                >
                Үйлдвэрлэл
                </MenuItem>
                <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="10"
                >
                Суурилуулалт
                </MenuItem>
                    <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="11"
                >
                Засвар үйлчилгээ
                </MenuItem>
                    <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
                value="12"
                >
                Баталгаат хугацаа
                </MenuItem>
            </Select>
            </FormControl>
        </GridItem>,
    </div>
  )
}

export default Flow