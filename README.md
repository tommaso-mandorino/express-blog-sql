# Esercizio "Blog con Express e SQL"

## Obiettivo
Prendiamo le API precedentemente create per il vostro blog ed aggiungiamo la persistenza tramite la connessione a un DB.

### Milestone 1
1. Importiamo il db in allegato su MySQL Workbench.
2. Installiamo il client mysql2 con `npm i mysql2` nell’app Express.
3. Creiamo un file di configurazione per connettere il database.
4. Inseriamo un console.log nella logica di connessione e proviamo ad avviare l’applicazione per verificare che non ci siano errori.

### Milestone 2
1. Facciamo sì che l’API di INDEX restituisca la lista di post recuperata dal database in formato JSON.
2. Verifichiamo su Postman che la risposta sia corretta.

### Milestone 3
1. Facciamo sì che l’API di SHOW restituisca il post desiderato in formato JSON.
2. Verifichiamo su Postman che la risposta sia corretta.

### Milestone 4
1. Facciamo sì che l’API di DESTROY permetta di eliminare un post dal database.
2. Verifichiamo su Postman che la chiamata non dia errore e risponda 204.
3. Verifichiamo su MySQL Workbench che il post venga effettivamente rimosso.

### Bonus:
Completiamo le altre operazioni crud per la creazione e aggiornamento di una risorsa:
1. Facciamo si che l'API di STORE permetta il salvataggio di un nuovo post.
2. Facciamo si che l'API di UPDATE permetta la modifica di un post esistente.