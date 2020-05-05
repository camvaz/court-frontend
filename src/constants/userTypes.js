const ADMIN_TYPE = {
    route: "/admin",
    routes: {
        inicio: "/",
        torneos: "/torneos",
        usuarios: "/usuarios",
        resultados: "/resultados"
    },
    description: "Administrador",
    role: "Global Admin"
};

const RESPONSABLE_TORNEO_TYPE = {
    route: "/admin-torneos",
    description: "Responsable de torneos",
    role: "Tournament Manager"
};

const CAPTURADOR_TYPE = {
    route: "/capturador",
    description: "Capturador de resultados",
    role: "Results Capturer"
};

const SECRETARA_TYPE = {
    route: "/secretaria",
    description: "Secretaria",
    role: "Secretary"
};

const PARTICIPANTE_TYPE = {
    route: "/participante",
    description: "Participante",
    role: "Player"
};

export const userTypes = {
    ADMIN_TYPE,
    RESPONSABLE_TORNEO_TYPE,
    CAPTURADOR_TYPE,
    SECRETARA_TYPE,
    PARTICIPANTE_TYPE
};
