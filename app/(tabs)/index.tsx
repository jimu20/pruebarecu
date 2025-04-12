import { Image, StyleSheet, Platform, View } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css'

import Form from 'react-bootstrap/Form';
import Formulariocasilla from '@/components/formulariocasilla';
import Botoninicio from '@/components/botoninicio';
import Botonesredes from '@/components/botonesredes';
import './App.css';
import Logo from '@/components/Logo';

export default function HomeScreen() {

return ( 

<>
    <div>
      <Logo />
    </div>
 
    <div className= "inse">
      <div style={{paddingBottom: '30px' }}>
      <Formulariocasilla  label="Usuario" />
      </div>
      <Formulariocasilla label="Contraseña" />
    </div>

    <div>
      <Botoninicio /> 
    </div>

    <div>
      <Botonesredes />
    </div>
</>

 );
}
