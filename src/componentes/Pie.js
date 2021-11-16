import * as React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://kittenbook.software/">
        OmegaWare
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Compañía",
    description: ["Equipo", "Acerca de", "Contacto", "Ubicaciones"],
  },
  {
    title: "Kittenbook",
    description: ["¿Qué es?", "Precios"],
  },
  {
    title: "Legal",
    description: ["Política de privacidad", "Términos de uso"],
  },
];

const rutasDiccionario = {
  Equipo: "/equipo",
  "Acerca de": "/acercade",
  Contacto: "/contacto",
  Ubicaciones: "/ubicaciones",
  "¿Qué es?": "/producto",
  Precios: "/precios",
  "Política de privacidad": "/politicaprivacidad",
  "Términos de uso": "/tos",
};

export default function Pie() {
  return (
    <React.Fragment>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link
                      href={rutasDiccionario[item]}
                      variant="subtitle1"
                      color="text.secondary"
                      underline={"none"}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </React.Fragment>
  );
}
