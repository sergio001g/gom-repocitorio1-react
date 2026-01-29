
import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
};

export default function ProductsPage() {
  const [items, setItems] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        setItems(data.results || []);
      } catch (e) {
        setError("No se pudo cargar la información.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Listado de Usuarios (API Rick & Morty)
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Foto</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Edad no existe por eso pongo status </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((p) => (
              <TableRow key={p.id} hover>
                <TableCell>{p.id}</TableCell>

                <TableCell>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 8,
                      objectFit: "cover",
                    }}
                  />
                </TableCell>

                <TableCell>{p.name}</TableCell>
                <TableCell>{p.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
}
