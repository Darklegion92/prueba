# API REST FULL CRUD (GET, POST, PUT, DELETE)

Manual de consumo del api

## END POINTS 🚀

# Obtener usuarios: 
    Tipo: GET
    Ruta: /users
    Formato de respuesta: JSON
    Respuesta code: 200
    Estructura de respuesta:{
        total:number, 
        data:[
            {_id:string, username:string,email:string,createdAt:Date,updatedAt:Date },
            {_id:string, username:string,email:string,createdAt:Date,updatedAt:Date },...
            ]
    }
    Error code: 500
    Estructura de error: {error:string}

# Obtener usuario: 
    Tipo: GET
    Ruta: /user/:id
    Formato de respuesta: JSON
    Respuesta code: 200
    Estructura de respuesta:{_id:string, username:string,email:string,createdAt:Date,updatedAt:Date}
    No encontrado code: 201
    Estructura no encontrado:{message:string}
    Error code: 500
    Estructura de error: {error:string}

# Crear usuario: 
    Tipo: POST
    Ruta: /user
    Formato de solicitud: JSON
    Estructura de solicitud:{password:string, username:string, email:string}
    Formato de respuesta: JSON
    Respuesta code: 200
    Estructura de respuesta:{_id:string, password:string, username:string,email:string,createdAt:Date,updatedAt:Date}
    Error code: 500
    Estructura de error: {error:string}

# Actualizar usuario: 
    Tipo: PUT
    Ruta: /user/:id
    Formato de solicitud: JSON
    Estructura de solicitud:{password:string, username:string, email:string}
    Formato de respuesta: JSON
    Respuesta code: 200
    Estructura de respuesta:{message:string}
    No encontrado code: 201
    Estructura no encontrado:{message:string}
    Error code: 500
    Estructura de error: {error:string}

# Actualizar usuario: 
    Tipo: DELETE
    Ruta: /user/:id
    Formato de respuesta: JSON
    Respuesta code: 200
    Estructura de respuesta:{message:string}
    No encontrado code: 201
    Estructura no encontrado:{message:string}
    Error code: 500
    Estructura de error: {error:string}
## DESPLIEGUE
### Pre-requisitos 📋

Instalar mongoDB


### Instalación 🔧

npm i o npm install
npx install

## Despliegue 📦

npm run dev

## Autores ✒️

* **José Rodriguez** - *Trabajo Inicial* - [villanuevand](https://github.com/Darklegion92)
