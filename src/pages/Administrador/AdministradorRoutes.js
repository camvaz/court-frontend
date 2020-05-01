import React from "react";
import { userTypes } from "../../constants/userTypes";
import importantRoutes from "../../constants/importantRoutes";

const { dashboard } = importantRoutes;
const { route, routes } = userTypes.ADMIN_TYPE;

const Inicio = React.lazy(() => import("./components/Inicio/Inicio"));
const Resultados = React.lazy(() =>
    import("./components/Resultados/Resultados")
);
const Torneos = React.lazy(() => import("./components/Torneos/Torneos"));
const Usuarios = React.lazy(() => import("./components/Usuarios/Usuarios"));

export const adminRoutes = [
    {
        route: `${dashboard}${route}${routes.inicio}`,
        component: Inicio
    },
    {
        route: `${dashboard}${route}${routes.resultados}`,
        component: Resultados
    },
    {
        route: `${dashboard}${route}${routes.torneos}`,
        component: Torneos
    },
    {
        route: `${dashboard}${route}${routes.usuarios}`,
        component: Usuarios
    }
];
