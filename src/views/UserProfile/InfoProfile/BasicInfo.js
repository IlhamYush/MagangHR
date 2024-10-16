import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function BasicInfo() {
  const classes = useStyles();

  return (
    <div style={{ marginBottom: "15px" }}>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div style={{ display: "flex", justifyContent: "left" }}>
              <h4
                style={{
                  fontWeight: "bold",
                  marginBottom: "30px",
                  marginTop: "12px",
                }}
              >
                Basic Information
              </h4>
            </div>
          </GridItem>
          <hr
            style={{
              width: "100%",
              margin: "auto",
              borderTop: "1px solid #ddd",
            }}
          />
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Position"
              id="company-disabled"
              formControlProps={{
                fullWidth: true,
              }}
              // inputProps={{
              //   disabled: true,
              // }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Contract Start Date"
              id="username"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Second Contract"
              id="email-address"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Department"
              id="first-name"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Division"
              id="last-name"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Sub-Division"
              id="Department"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Salary"
              id="city"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Contract Status"
              id="country"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Attachment"
              id="postal-code"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>
      </CardBody>
    </div>
  );
}
