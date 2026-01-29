import { Paper, Typography } from "@mui/material";


export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
      Bienvenido a Mi App!
      </Typography>
      
      <Typography color="text.secondary">
      Aplicación de ejemplo usando Bootstrap que simula un frontend para migrar a React + Ant Design
      </Typography>
       
      <Typography color="text.secondary">
      Usuario       Calculo sueldo         Bono 
      </Typography>
      <Typography color="text.secondary">
      Bienvenido al sistema de usuarios y nómina.
      </Typography>
      <Typography color="text.secondary">
      Recuerda completar todos los campos antes de calcular.
      </Typography>
    </Paper>
  );
}