import { useMemo, useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";

export default function MultiplyPage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const result = useMemo(() => a * b, [a, b]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
      Bono Vacacional
      </Typography>

      <TextField
        label="Sueldio Diario"
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />

      <TextField
        label="5 Dias"
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        Resultado: <strong>{result}</strong>
      </Typography>
    </Paper>
  );
}