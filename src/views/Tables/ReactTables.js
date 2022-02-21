import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import Flow from "components/Flow/Flow.js";
import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

import product1 from "assets/img/or1.jpeg";
import product2 from "assets/img/sandal1.jpeg";
import product3 from "assets/img/n-taviur1.jpeg";

const useStyles = makeStyles(styles);

export default function ExtendedTables() {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  const fillButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button color={prop.color} className={classes.actionButton} key={key}>
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  const simpleButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button
        color={prop.color}
        simple
        className={classes.actionButton}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  const roundButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button
        round
        color={prop.color}
        className={classes.actionButton + " " + classes.actionButtonRound}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Бүтээгдэхүүний захиалга</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHead={[
                "",
                "PRODUCT",
                "BRAND",
                "Desc",
                "PRICE",
                "QTY",
                "AMOUNT",
                ""
              ]}
              tableData={[
                [
                  <div className={classes.imgContainer} key="key">
                    <img src={product1} alt="..." className={classes.img} />
                  </div>,
                  <span key="key">
                    <a href="#jacket" className={classes.tdNameAnchor}>
                     GAME
                    </a>
                    <br />
                  </span>,
                  "Alberta",
                  <Flow/>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>₮</small> 3.500.000
                  </span>,
                  <span key="key">
                    1{` `}
                    <div className={classes.buttonGroup}>
                    </div>
                  </span>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>₮</small> 3.500.000
                  </span>,
                  <Button simple className={classes.actionButton} key="key">
                    <Close className={classes.icon} />
                  </Button>
                ],
                [
                  <div className={classes.imgContainer} key="key">
                    <img src={product2} alt="..." className={classes.img} />
                  </div>,
                  <span key="key">
                    <a href="#jacket" className={classes.tdNameAnchor}>
                      SAMO{" "}
                    </a>
                    <br />
                  </span>,
                  "Poltrona Frau Style & Design Centre",
                  <Flow/>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>₮</small> 1.200.000
                  </span>,
                  <span key="key">
                    2{` `}
                    <div className={classes.buttonGroup}>
                    </div>
                  </span>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>₮</small> 2.400.000
                  </span>,
                  <Button simple className={classes.actionButton} key="key">
                    <Close className={classes.icon} />
                  </Button>
                ],
                [
                  <div className={classes.imgContainer} key="key">
                    <img src={product3} alt="..." className={classes.img} />
                  </div>,
                  <span key="key">
                    <a href="#LLOYD" className={classes.tdNameAnchor}>
                      LLOYD
                    </a>
                    <br />
                  </span>,
                  "Poltrona Frau - Jean-Marie Massaud",
                  <Flow/>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>₮</small> 2.100.000
                  </span>,
                  <span key="key">
                    1{` `}
                    <div className={classes.buttonGroup}>
                    </div>
                  </span>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>₮</small> 2.100.000
                  </span>,
                  <Button simple className={classes.actionButton} key="key">
                    <Close className={classes.icon} />
                  </Button>
                ],
                {
                  total: true,
                  colspan: "5",
                  amount: (
                    <span key="key">
                      <small>₮</small>7.000.000
                    </span>
                  )
                },
                {
                  purchase: true,
                  colspan: "4",
                  col: {
                    colspan: 6,
                    text: (
                      <Button color="info" round>
                        Зөвшөөрөх{" "}
                        <KeyboardArrowRight className={classes.icon} />
                      </Button>
                    )
                  }
                }
              ]}
              tableShopping
              customHeadCellClasses={[
                classes.center,
                classes.description,
                classes.description,
                classes.right,
                classes.right,
                classes.right
              ]}
              customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
              customCellClasses={[
                classes.tdName,
                classes.customFont,
                classes.customFont,
                classes.tdNumber,
                classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                classes.tdNumber
              ]}
              customClassesForCells={[1, 2, 3, 4, 5, 6]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
