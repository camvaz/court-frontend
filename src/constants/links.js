export default [
    {
        usuario: "administrador",
        role: "Global Admin",
        opciones: [
            {
                nombre: "Inicio",
                url: "/"
            },
            {
                nombre: "Torneos",
                url: "/torneos"
            },
            {
                nombre: "Usuarios",
                url: "/admin/usuarios"
            },
            {
                nombre: "Resultados",
                url: "/resultados"
            }
        ]
    },
    {
        usuario: "administrador de torneos",
        role: "Tournament Manager",
        opciones: [
            {
                nombre: "Inicio",
                url: "/"
            },
            {
                nombre: "Organizar Torneo",
                url: ""
            },
            {
                nombre: "Organizar Participantes",
                url: ""
            },
            {
                nombre: "Administrar Resultados",
                url: ""
            }
        ]
    },
    {
        usuario: "capturador de resultados",
        role: "Results Capturer",
        opciones: [
            {
                nombre: "Inicio",
                url: "/"
            },
            {
                nombre: "Organizar Torneos",
                url: ""
            }
        ]
    },
    {
        usuario: "secretaria",
        role: "Secretary",
        opciones: [
            {
                nombre: "Inicio",
                url: "/"
            },
            {
                nombre: "Torneos",
                url: "/torneos"
            },
            {
                nombre: "Agregar Participantes",
                url: "/agregar-participantes"
            }
        ]
    },
    {
        usuario: "participante",
        role: "Player",
        opciones: [
            {
                nombre: "Inicio",
                url: "/"
            },
            {
                nombre: "Participar",
                url: ""
            },
            {
                nombre: "Visualizar Resultados",
                url: ""
            },
            {
                nombre: "Ver jugadores",
                url: ""
            }
        ]
    }
];
