Diagramme de sequence
participant:Navigateur
Participant:Serveur

    Navigateur->>Serveur: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Serveur
    Serveur-->>Navigateur: Fichier HTML minimal
    deactivate Serveur

    Navigateur->>Serveur: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Serveur
    Serveur-->>Navigateur: Fichier CSS
    deactivate Serveur

    Navigateur->>Serveur: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Serveur
    Serveur-->>Navigateur: Fichier JavaScript de la SPA
    deactivate Serveur

    Note right of Navigateur: Le navigateur exécute le JavaScript
    Navigateur->>Serveur: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Serveur
    Serveur-->>Navigateur: Données au format JSON
    deactivate Serveur

    Note right of Navigateur: Le JavaScript construit l'interface
