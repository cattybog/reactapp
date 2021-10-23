// <<<<<<< HEAD
// import { Input, TextField } from "@mui/material";
// import Button from "@restart/ui/esm/Button";
// import React, { Component, useState, Fragment, useRef} from "react";
// import { Container } from "react-bootstrap";
// import {v4 as uuidv4} from "uuid";
// import { ListadoTareas } from "./ListadoTareas";

// export function Tareas(props) {
//   const [tareas, setTareas] = useState ([{ id: '01', titulo: "Ecuaciones diferenciales",
//   categoria: "Ecuaciones", creacion: "22-10-2021: 14:31",
//   limite: "22-10-2021: 23:59", recurso : null, notificacion: true}])

//   const tareatituloRef = useRef();

//   const handleTareaAdd = () => {
//     const titulo = tareatituloRef.current.value;
//     if ( titulo == '' ) return;
    
//     setTareas ( (prevTarea) => {
//         return [...prevTarea, {id: uuidv4(), titulo, categoria:null,
//            creacion:null, limite:null, recurso:null, notificacion:false }]
//     })
//   }

//   return (
//     <Fragment>
//       <Container style={{display: "flex", flexDirection: "column", width:250+"px"}}>
//         <ListadoTareas tareas={tareas} />
//         <TextField variant="filled" ref={tareatituloRef} placeholder="Título de la tarea"/>
//         <Input type="datetime-local"/>
//         <Button onClick={handleTareaAdd}>+</Button>
//         <Button>-</Button>
//       </Container>
//     </Fragment>
//     );
// }
import React, { Component } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        variant = "fullWidth"
      >
        <Tab value="one" label="Ecuaciones diferenciales" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
        <Tab value="Cuarto" label="Item 4" />
      </Tabs>
    </Box>
  );
}