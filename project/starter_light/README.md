![dontouchLogo](https://www.dontouch.ch/assets/svg/logo-dt.svg)

***
## SENIOR FRONTEND DEVELOPER (TS / SSR / VUE3 / NUXT3)
***

## Design

##### Il design da seguire per la prova è disponibile nelle directory ``/img`` o ``/pdf``.

![Screenshot](/sources/assets/Homepage.jpg)

### Strategie SSR obbligatorie da seguire per la realizzazione del test:

```bash
# Strategia SSR Standard
Nuxt3 con Vue3

# Strategia SSR Node/Vite: App con createSSRApp
SSR con Vue3
```
### Nota Importante
Durante il colloquio successivo al test, ti verrà chiesto di spiegare la motivazione della tua scelta strategica.

***

### Obiettivi del test (SSR)

Gli obiettivi del test sono divisi in "**mandatory**" (ovvero quello che ci si aspetta per raggiungere la definition of done del test) e "**nice to have**" (bonus nel caso si finisca prima del previsto)

- #### Mandatory (1/3 days)
- - Fetchare dalla [API di Rick And Morty](https://rickandmortyapi.com/documentation) dei personaggi e mostrarli come da layout, stampando le informazioni in maniera corretta.
- - Al click sulle frecce nella paginazione (precedente e successiva) si dovrà fetchare la pagina successiva della API e **aggiornare la UI** con i nuovi personaggi ottenuti.
- - Inserendo un testo nella barra di ricerca sarà possibile **filtrare** il personaggio ottenuto in base al nome.
- - Chiara divisione dei componenti e del codice riutilizzabile, utilizzando una folder structure leggibile.


- #### Nice to have (3/4 days)
- - Completare l'intera logica dei filtri, implementando anche quelli nella UI di riferimento.

![Screenshot](/sources/assets/HomepageFilters.jpg)

- - Completare l'intera UI seguendo il design proposto.
- - Creare una paginazione infinita così che i nuovi personaggi fetchati si vadano ad aggiungere a quelli già esistenti, scrollando il Documento nel punto giusto.
- - Versione Mobile e/o Tablet

***

### Note

- Sarebbe opportuno utilizzare **TypeScript**.
- Sarebbe opportuno utilizzare le ultime versioni di **Vue** e di **Nuxt** compatibili con **TypeScript**.
- Sarebbe opportuno effettuare vari commit ogni volta che si lavora ad una feature, utilizzando i [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).