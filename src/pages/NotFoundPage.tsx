import { useMemo, useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";

export default function registropage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const result = useMemo(() => a + b + c, [a, b, c]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
      Calculadora de Sueldo Neto
      </Typography>

      <TextField
        label="Sueldo basico"
        type=""
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />

      <TextField
        label="Primas"
        type=""
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        sx={{ mb: 2 }}
      />
        <TextField
        label="Deducciones"
        type=""
        value={c}
        onChange={(e) => setC(Number(e.target.value))}
        sx={{ mb: 2 }}
      />
      <Typography sx={{ mt: 1 }}>
        Resultado: <strong>{result}</strong>
      </Typography>
    </Paper>
  );
}