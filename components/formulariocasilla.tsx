import Form from 'react-bootstrap/Form';

interface FormulariocasillaProps {
  label?: string;
}
function Formulariocasilla({ label = 'Password' }: FormulariocasillaProps) {
  return (
    <>
    
      <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
  
 
    </>
  );
}

export default Formulariocasilla;