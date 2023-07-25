# Cloud Functions

Servicio para cargar Registros en base de datos.

## Installation

- Ingresar al directorio **api-chatboot/functions**
- Modificar el archivo dentro de **api-chatboot/config/credentials.json** y agregar la cuenta de servicios para conexión con **Firestore**

* [NodeJS LTS](https://nodejs.org/es)
* [Editor de texto](https://code.visualstudio.com/download)
* [Instalar firebase CLI](https://firebase.google.com/docs/cli?hl=es-419)
* [Opción con functions-framework](https://cloud.google.com/functions/docs/functions-framework?hl=es-419)

```bash
npm i
```

## Usage

Una vez instaladas las dependencias

```bash
## Comando recomendado para emular las cloud functions
npm run serve

## Comando para correr las cloud functions a nivel de shell
npm start

```

- Alternativa con **functions-framework** se requiere instalar

```bash
npm i @google-cloud/functions-framework
```

- Una vez instalado ejecutar el comando 1 o 2

```bash
## 1)Emular function agregarRegistros

FUNCTION_TARGET=agregarRegistros \
npx @google-cloud/functions-framework

## 2)Emular function agregarPuntaje

FUNCTION_TARGET=agregarPuntaje \
npx @google-cloud/functions-framework

```

### Ejecutar un llamado POST a:

- http://localhost:8080/**agregarPuntaje o agregarRegistros**

## Deployment

- Debes tener instalado Firebase CLI
- Iniciar sesión en tu terminar con **firebase login**
- Inicializar el proyecto con **firebase init**
- Seleccionar el proyecto de GCP
- Seleccionar Cloud Functions
- Realizar deploy con el comando **firebase deploy**

## License

[MIT](https://choosealicense.com/licenses/mit/)
