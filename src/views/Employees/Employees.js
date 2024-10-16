import React from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button";
import { makeStyles } from "@material-ui/core";
import { blackColor } from "assets/jss/material-dashboard-react";

//material-ui
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
// import { Height } from "@material-ui/icons";

const styles = {
    ButtonStyle: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "flex-end",
    },
}

const useStyles = makeStyles(styles)

export default function Employees() {
    const classes = useStyles();
    return (
        <div>
            <Card>
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
                            Employees Data
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
                        <GridItem xs={12} sm={12} md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div 
                                style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                border: '2px solid #E0E0E0', 
                                borderRadius: '8px', 
                                padding: '8px', 
                                maxWidth: '250px', 
                                marginTop: '25px'
                                }}
                            >
                                <SearchRoundedIcon style={{ marginRight: '8px' }} />
                                <input
                                type="text"
                                placeholder="Search"
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    width: '100%'
                                }}
                                />
                            </div>


                            <GridContainer>
                                <GridItem xs={12} sm={6} md={4}>
                        <div style={{ 
                                display: 'flex', 
                                justifyContent: 'flex-end', /* Memposisikan tombol ke kanan */
                                gap: '10px',
                     
                                marginTop: 'auto' /* Tambahkan margin atas agar tidak terlalu mepet */
                            }}>
                                {/* Add Employee Button */}
                                <Button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#FFFFFF',
                                    border: '2px solid #E0E0E0',
                                    borderRadius: '8px',
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    height: '43px'
                                }}
                                >
                                <AddRoundedIcon style={{ marginRight: '8px', color: blackColor }} />
                                <p style={{color: blackColor}}>Add Employee</p>
                                </Button>

                                {/* Filter Button */}
                                <Button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#FFFFFF',
                                    border: '2px solid #E0E0E0',
                                    borderRadius: '8px',
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    height: '43px'
                                }}
                                >
                                <FilterListRoundedIcon style={{ marginRight: '8px', color: blackColor }} />
                                <p style={{color: blackColor}}>
                                    Filter
                                </p>
                                </Button>
                            </div>

                       
                                </GridItem>
                            </GridContainer>
                            </div>
                        </GridItem>
                    </GridContainer>
                    
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Table
                                tableHeaderColor={blackColor}
                                // tableHead={["Name", "Status", "Divisi", "Department", "Role", "Action"]}
                                tableHead={[
                                    <th style={{fontWeight: "bold"}}>Name</th>,
                                    <th style={{fontWeight: "bold"}}>Status</th>,
                                    <th style={{fontWeight: "bold"}}>Divisi</th>,
                                    <th style={{fontWeight: "bold"}}>Department</th>,
                                    <th style={{fontWeight: "bold"}}>Role</th>,
                                    <th style={{fontWeight: "bold"}}>Action</th>,
                                ]}
                                tableData={[
                                    ["Ilham Yushronni", "Active", "Engineering", "Software Development", "Frontend Developer", "Edit"],
                                    ["Akmal Malika", "Active", "Engineering", "Software Development", "Software Developer", "Edit"],
                                    ["Lazuardi Fajar", "Active", "IT Support", "Technical Support", "IT Support Specialist", "Edit"]
                            ]} />
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        </div>
    );
}