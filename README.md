# login-MYSQL-EXPRESS-JWT 

Es una pequeña aplicacion de logeo usando MYSQL como motor de base de datos
junto a EXPRESS para las peticions HTTP y JWT para control de la sesiones usando
Tokens 


### Pre-requisitos 📋

```
Express ^4.x
Mysql ^2.x
Jsonwebtoken ^8.x
```

### Instalación 🔧

1ero necesitas importar el script a tu base de datos
```
mysql -u 'yourUserName' -p  'databasename' < ./proyect/scrip.db

```
2do entrar ala caperta config/appConfig y cambiar los datos como el host
database, etc. que se adapten a tu usuario de mysql

```
config/appConfig.js

```
y finalmente instalar las dependencias
```
npm install 

```

## Ejecutando las pruebas ⚙️

Para realizar las pruebas necesitas crear un usuario en primeras instancias la
estructura es:
```
{
  nick_name:'pepe',
  passwd:'grillo',
  birthdate:'1995-5-5',
  gender:'male',
  name:'pepito',
  last_name:'fernandez',
  mail:'pepe@example.com'

}
```
y ponerlo en el BODY junto al metodo
```
POST  https://localhost:3333/api/signup
```


### Analice las pruebas end-to-end 🔩


```
POST http://localhost:3333/api/signup
GET http://localhost:3333/api/signin
GET http://localhots:3333/api/session
```


## Versionado 📌

v1.0


## Licencia 📄

Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE.md](LICENSE.md) para detalles



