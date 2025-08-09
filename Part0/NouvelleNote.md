Diagram de sequence
participant Utilisateur
participant Navigateur
participant Serveur

    Utilisateur->>Navigateur: click sur le bouton save
    Navigateur->>Serveur:HTTP POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate Serveur
    Serveur->>Navigateur:https://studies.cs.helsinki.fi/exampleapp/new_note
    Navigateur->>Serveur:HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Serveur->>Navigateur:302 Found
    Navigateur->>Serveur:HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    desactivate Serveur

    Navigateur->>Serveur: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate Serveur
    Serveur-->>Navigateur: Code HTML avec la nouvelle note
    deactivate Serveur

    Navigateur->>Serveur: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Serveur
    Serveur-->>Navigateur: Fichier CSS
    deactivate Serveur

    Navigateur->>Serveur: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate Serveur
    Serveur-->>Navigateur: Fichier JavaScript
    deactivate Serveur

    Note right of Navigateur: Le navigateur affiche la page.
