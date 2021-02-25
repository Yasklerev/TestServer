Intrucciones:
    Base de datos Mysql
    Script de la base de datos en el archivo: "database.sql"
    npm install 
    npm i typescript

    Cambiar datos en el archivo keys.ts por los datos de conexión que correspondan.

    npm run build para ejecutar los cambios.

    npm run dev para poner en marcha el sistema.

    api:
        GET http://localhost:3000/listOneOwner/:id Obtener un propietario.
        GET http://localhost:3000/listAllOwners Obtener todos los propietarios.
        POST http://localhost:3000/createOwner Crear un nuevo propietario.
        PUT http://localhost:3000/updateOwner Modificar un propietario.
        DELETE http://localhost:3000/deleteOwner/:id Eliminar un propietario.