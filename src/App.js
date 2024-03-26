import React from 'react';
import './App.css';
//importacion de componentes----------------------------------------------------------------------------------
import { SelectUsuario } from './componentes/SelectUsuario';
import { ActBuscar } from './componentes/ActBuscar';
import { ActLista } from './componentes/ActLista';
import { ActCreateButton } from './componentes/ActCreateButton';
import { ActItem } from './componentes/ActItem';
import { ActResumen } from './componentes/ActResumen';


//Listas de Datos-----------------------------------------------------------------------------------------------
const listUsuarios = ["Alvaro", "Camila", "Juan"];
const listActividades = [
  {text:"Visita de Campo", completed: true},
  {text:"Realizar Informe", completed: false},
  {text:"Notificacion de Resultados", completed: true},
  {text:"Reunion de Grupo", completed: false},
  {text:"Entrega de archivos", completed: false},
];

//Funcion Inicio-----------------------------------------------------------------------------------------------------
function App() {
  return (
    <React.Fragment>

      <SelectUsuario usuario1={listUsuarios[0]}/>
      <ActResumen totales={5} completadas={1}/>
      <ActBuscar/>

      <ActLista>
        {listActividades.map(act => (
          <ActItem 
            key={act.text}
            text={act.text}
            completed={act.completed}
          />
        ))}

      </ActLista>

      <ActCreateButton />
      

    </React.Fragment>
  );
}

export default App;
