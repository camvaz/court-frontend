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
                nombre: "Torneos",
                url: "/torneos"
            },
            {
                nombre: "Ingresar Participantes",
                url: "/agregar-participantes"
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
                nombre: "Capturar Resultados",
                url: "/torneos"
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
