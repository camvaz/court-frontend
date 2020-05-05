import React from "react";
import { userTypes } from "../../constants/userTypes";

const { route, routes } = userTypes.ADMIN_TYPE;

const Inicio = React.lazy(() => import("./components/Inicio/Inicio"));
const Resultados = React.lazy(() =>
    import("./components/Resultados/Resultados")
);
const Torneos = React.lazy(() => import("./components/Torneos/Torneos"));
const Usuarios = React.lazy(() => import("./components/Usuarios/Usuarios"));

export const adminRoutes = [
    {
        route: `${route}${routes.inicio}`,
        component: Inicio
    },
    {
        route: `${route}${routes.resultados}`,
        component: Resultados
    },
    {
        route: `${route}${routes.torneos}`,
        component: Torneos
    },
    {
        route: `${route}${routes.usuarios}`,
        component: Usuarios
    }
];
