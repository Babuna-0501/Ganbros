import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Button from "@material-ui/core/Button";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import Status from "components/Status/Status";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import styles from "assets/jss/material-dashboard-pro-react/components/buttonStyle.js";

const useStyles = makeStyles(styles);
const sstyles = {
  customCardContentClass: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};
export default function RegularTables() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 style={{color: "#000"}} className={classes.cardIconTitle}>Хүсэлт гаргасан хэрэглэгч</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Email", "Утас"]}
              tableData={[
                ["Батдорж", "batdorj@mail.com", "+976-99999999",  <Button color="#eee" className={classes.marginRight}>
                Захиалга харах
              </Button>],
                ["Батдорж", "batdorj@mail.com", "+976-99999999" ,<Button color="#eee" className={classes.marginRight}>
                Захиалга харах
              </Button>],
                ["Батдорж", "batdorj@mail.com", "+976-99999999" ,<Button color="#eee" className={classes.marginRight}>
                Захиалга харах
              </Button>],
                ["Батдорж", "batdorj@mail.com", "+976-99999999",<Button color="#eee" className={classes.marginRight}>
                Захиалга харах
              </Button>],
                ["Батдорж", "batdorj@mail.com", "+976-99999999" , <Button color="#eee" className={classes.marginRight}>
                Захиалга харах
              </Button>],
                ["Батдорж", "batdorj@mail.com", "+976-99999999", <Button color="#eee" className={classes.marginRight}>
                Захиалга харах
              </Button>]
              ]}
              coloredColls={[3]}
              colorsColls={["primary"]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card plain>
          <CardHeader color="rose" icon plain>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 style={{color: "#000"}} className={classes.cardIconTitle}>
            Худалдан авалт хийсэн хэрэглэгч
            </h4>
          </CardHeader>
          <CardBody plain>
            <Table
              hover
              tableHead={["ID", "Name", "E-mail", "Утас"]}
              tableData={[
                ["1", "Батдорж", "batdorj@mail.com", "+976-99999999", <Status/> ],
                ["2", "Батдорж", "batdorj@mail.com", "+976-99999999",  <Status/>],
                ["3", "Батдорж", "batdorj@mail.com", "+976-99999999",  <Status/>],
                [
                  "4",
                  "Батдорж",
                  "batdorj@mail.com",
                  "+976-99999999",
                  ,  <Status/>
                ],
                [
                  "5",
                  "Батдорж",
                  "batdorj@mail.com",
                  "+976-99999999",
                  ,  <Status/>
                ],
                ["6", "Батдорж", "batdorj@mail.com", "+976-99999999",  <Status/>]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
