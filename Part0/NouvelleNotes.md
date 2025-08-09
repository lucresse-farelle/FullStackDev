Diagramme de Sequence
participant Utilisateur
participant Navigateur
participant Serveur

    Utilisateur->>Navigateur: Tape une nouvelle note
    Utilisateur->>Navigateur: Clique sur "Sauvegarder"

    Note right of Navigateur: Le code JavaScript intercepte l'événement
    Navigateur->>Serveur: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate Serveur
    Note right of Serveur: Le serveur enregistre la note dans la base de données
    Serveur-->>Navigateur: Statut HTTP 201 (Created) ou 302 (Redirection)
    deactivate Serveur

    Note right of Navigateur: Le navigateur ne se recharge pas
    Note right of Navigateur: Le JavaScript met à jour la page avec la nouvelle note
