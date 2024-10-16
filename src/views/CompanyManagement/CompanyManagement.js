import React, {useState, useEffect} from "react";
import { Box, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";

export default function CompanyManagement() {
    const [departement_name, setdepartement_name] = useState('');
    const [departement_head, setDepartement_head] = useState('');
    const [division_name, setDivision_name] = useState('');
    const [subdivision_name, setSubdivision_name] = useState('');
    // const [position_name, setPosition_name] = useState('');

    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState(0);

    const handleSubmitGeneric = async (endpoint, bodyData, successMessage) => {
        await fetch("http://192.168.43.98:8080/api/${endpoint}", {
            body: JSON.stringify(bodyData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((response) => {

            if(!response.ok){
                throw new Error(`HTTP ERROR! Status: ${response.status}`);
            }
            return response.json();

        })
        .then((data) => {
            console.log(successMessage, data);
            alert(successMessage);
            setPosts((posts) => [data, ...posts]);

            // Kondisi Menentukan API yang akan Berjalan
            if (endpoint === 'addDepartement') {
                setdepartement_name('');
                setDepartement_head('');
            } else if (endpoint === 'addDivision') {
                setDivision_name('');
            };
        })
        .catch((err) => {
            console.error("HTTP ERROR! Status:", err.message);
            alert(`${err.message || "Unknown Error"}`);
        });
    }

    const handleSubmitDepartment = (e) => {
        e.preventDefault();
        if(!departement_name || !departement_head){
            alert("Departement dan Kepala Departemen Diperlukan")
            return;
        };
        handleSubmitGeneric('addDepartement', {departement_name, departement_head}, "Data Departement Berhasil Didaftarkan");
    };

    const handleSubmitDivision = (e) => {
        e.preventDefault();
        if (!division_name) {
            alert("Mohon untuk mengisi divisi");
            return;
        };
        handleSubmitGeneric('addDivision', {division_name}, "Data Divisi Berhasil Dimasukkan");
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div>
            <Card>
                <CardBody>
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    >
                        <Tab label="Department" />
                        <Tab label="Division" />
                        <Tab label="Sub Division" />
                        <Tab label="Position" />
                    </Tabs>
                    
                    <GridContainer>
                        <hr
                        style={{
                        width: "100%",
                        margin: "auto",
                        borderTop: "1px solid #ddd",
                        }}
                        />
                    </GridContainer>

                    <TabPanel value={value} index={0}>
                        <form onSubmit={handleSubmitDepartment}>
                            <GridContainer>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}> {/* Mengubah tata letak menjadi kolom dengan jarak antar elemen */}  
                                {/* Name Department */}
                                <div>

                                    <p 
                                        htmlFor="DepartmentName" 
                                        style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}
                                    >
                                        Department Name
                                    </p>
                                    
                                    <div 
                                        style={{ 
                                            display: 'flex', 
                                            alignItems: 'center',  
                                            borderRadius: '8px', 
                                            width: '350px',
                                            gap: '10px',
                                            border: '2px solid #E0E0E0',
                                            padding: '8px',
                                        }}
                                    >
                                        <input
                                            id="department-pick"
                                            type="text"
                                            placeholder="Create Department"
                                            inputProps={{
                                                value: departement_name,
                                                onChange: (e) => setDepartement(e.target.value)
                                            }}
                                            style={{
                                                border: 'none',
                                                outline: 'none',
                                                width: '100%',
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Add Name Department Head */}
                                <div style={{ display: "flex", flexDirection: "column" }}>

                                    <p 
                                        htmlFor="Division" 
                                        style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}
                                    >
                                        Department Head
                                    </p>
                                    
                                    <div 
                                        style={{ 
                                            display: 'flex', 
                                            alignItems: 'center',  
                                            borderRadius: '8px', 
                                            maxWidth: '800px',  
                                            gap: '10px',  
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                border: '2px solid #E0E0E0', 
                                                borderRadius: '8px', 
                                                padding: '8px', 
                                                width: '350px',  // Sesuaikan lebar input
                                            }}
                                        >
                                            <input
                                                id="DepartHead-input"
                                                type="text"
                                                placeholder="Choose Department Head"
                                                inputProps={{
                                                    value: departement_head,
                                                    onChange: (e) => setDepartment_head(e.target.value),
                                                }}
                                                style={{
                                                    border: 'none',
                                                    outline: 'none',
                                                    width: '100%',
                                                }}
                                            />
                                        </div>

                                        {/* Button untuk Add Division */}
                                        <Button 
                                            color="primary"
                                            type="submit"
                                            style={{
                                                padding: '8px 16px',
                                                borderRadius: '8px',
                                                height: '37px',
                                            }}
                                        >
                                            Add
                                        </Button>
                                    </div>

                                    <div style={{marginTop: "15px"}}>
                                        <p>Create your Department to manage your company.</p>
                                    </div>
                                </div> 
                            </div>
                            </GridContainer>
                        </form>
                    </TabPanel>

                    {/* Division Form (Tab 1) */}
                    <TabPanel value={value} index={1}>
                        <form onSubmit={handleSubmitDivision}>
                            <GridContainer>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}> {/* Mengubah tata letak menjadi kolom dengan jarak antar elemen */}  
                                {/* Name Department */}
                                <div>

                                    <p 
                                        htmlFor="DepartmentName" 
                                        style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}
                                    >
                                        Department Name
                                    </p>
                                    
                                    <div 
                                        style={{ 
                                            display: 'flex', 
                                            alignItems: 'center',  
                                            borderRadius: '8px', 
                                            width: '350px',
                                            gap: '10px',
                                            border: '2px solid #E0E0E0',
                                            padding: '8px',
                                        }}
                                    >
                                        <input
                                            id="department-pick"
                                            type="text"
                                            placeholder="Choose Department"
                                            style={{
                                                border: 'none',
                                                outline: 'none',
                                                width: '100%',
                                            }}
                                        />
                                    </div>

                                </div>

                                {/* Add Name Division */}
                                <div style={{ display: "flex", flexDirection: "column" }}>

                                    <p 
                                        htmlFor="Division" 
                                        style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}
                                    >
                                        Division Name
                                    </p>
                                    
                                    <div 
                                        style={{ 
                                            display: 'flex', 
                                            alignItems: 'center',  
                                            borderRadius: '8px', 
                                            maxWidth: '800px',  
                                            gap: '10px',  
                                        }}
                                    >

                                        <div 
                                            style={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                border: '2px solid #E0E0E0', 
                                                borderRadius: '8px', 
                                                padding: '8px', 
                                                width: '350px',  // Sesuaikan lebar input
                                            }}
                                        >
                                            <input
                                                id="Division-input"
                                                type="text"
                                                placeholder="Create Division"
                                                inputProps={{
                                                    value: division_name,
                                                    onChange: (e) => setDivision_name(e.target.value),
                                                }}
                                                style={{
                                                    border: 'none',
                                                    outline: 'none',
                                                    width: '100%',
                                                }}
                                            />
                                        </div>

                                        {/* Button untuk Add Division */}
                                        <Button 
                                            color="primary"
                                            type="submit"
                                            style={{
                                                padding: '8px 16px',
                                                borderRadius: '8px',
                                                height: '37px',
                                            }}
                                        >
                                            Add
                                        </Button>

                                    </div>

                                    <div style={{marginTop: "15px"}}>
                                        <p>Create your Division to manage your company.</p>
                                    </div>

                                </div> 
                            </div>
                            </GridContainer>
                        </form>
                    </TabPanel>

                    {/* Sub Division Form (Tab 2) */}
                    <TabPanel value={value} index={2}>
                        <form onSubmit={(e) => handleSubmit(e, subdivision_name, 'subdivision')}>
                            <GridContainer>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}> {/* Mengubah tata letak menjadi kolom dengan jarak antar elemen */}  
                                {/* Name Division */}
                                <div>

                                    <p 
                                        htmlFor="division" 
                                        style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}
                                    >
                                        Division Name 
                                    </p>
                                    
                                    <div 
                                        style={{ 
                                            display: 'flex', 
                                            alignItems: 'center',  
                                            borderRadius: '8px', 
                                            width: '350px',  // Sesuaikan lebar input dengan desain
                                            gap: '10px',
                                            border: '2px solid #E0E0E0',
                                            padding: '8px',
                                        }}
                                    >
                                        <input
                                            id="division-input"
                                            type="text"
                                            placeholder="Choose Division"
                                            style={{
                                                border: 'none',
                                                outline: 'none',
                                                width: '100%',
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Add Name Sub Division */}
                                <div style={{ display: "flex", flexDirection: "column" }}>

                                    <p 
                                        htmlFor="SubDivision" 
                                        style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}
                                    >
                                        Sub Division Name
                                    </p>
                                    
                                    <div 
                                        style={{ 
                                            display: 'flex', 
                                            alignItems: 'center',  
                                            borderRadius: '8px', 
                                            maxWidth: '800px',  
                                            gap: '10px',  
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                border: '2px solid #E0E0E0', 
                                                borderRadius: '8px', 
                                                padding: '8px', 
                                                width: '350px',  // Sesuaikan lebar input
                                            }}
                                        >
                                            <input
                                                id="subdivision-input"
                                                type="text"
                                                placeholder="Create Sub Division"
                                                style={{
                                                    border: 'none',
                                                    outline: 'none',
                                                    width: '100%',
                                                }}
                                            />
                                        </div>

                                        {/* Button untuk Add Sub Division */}
                                        <Button color="primary"
                                            style={{
                                                padding: '8px 16px',
                                                borderRadius: '8px',
                                                height: '37px',
                                            }}
                                        >
                                            Add
                                        </Button>
                                    </div>

                                    <div style={{marginTop: "15px"}}>
                                        <p>Create your Sub Division to manage your company.</p>
                                    </div>
                                </div> 
                            </div>
                            </GridContainer>
                        </form>
                    </TabPanel>

                    {/* Position Form (Tab 3) */}
                    <TabPanel value={value} index={3}>
                        {/* <Typography variant="h6">Create Position</Typography> */}
                        <GridContainer>

                        <div style={{ display: "flex", flexDirection: "column" }}>  {/* Mengubah tata letak menjadi kolom */}
                            <p 
                                htmlFor="position-input" 
                                style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}
                            >
                                Position Name
                            </p>
                            
                            <div 
                                style={{ 
                                    display: 'flex', 
                                    alignItems: 'center',  // Mengatur agar input dan button sejajar
                                    borderRadius: '8px', 
                                    maxWidth: '800px',     // Lebih lebar agar ada ruang untuk input dan button
                                    gap: '10px',           // Jarak antara input dan button
                                }}
                            >
                                <div 
                                    style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        border: '2px solid #E0E0E0', 
                                        borderRadius: '8px', 
                                        padding: '8px', 
                                        width: '350px',     // Membuat input mengambil ruang yang tersedia
                                    }}
                                >
                                    <input
                                        id="position-input"
                                        type="text"
                                        placeholder="Create Position"
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            width: '100%'
                                        }}
                                    />
                                </div>

                                {/* Button untuk Add Position */}
                                <Button color="primary"
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: '8px',
                                        height: '37px',
                                    }}
                                >
                                    Add Position
                                </Button>
                            </div>

                            <div style={{marginTop: "15px", marginBottom: "-20px"}}>
                                <p>Create your Department to manage your Company</p>
                            </div>

                        </div>  
                        </GridContainer>
                    </TabPanel>
                </CardBody>
            </Card>
        </div>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }