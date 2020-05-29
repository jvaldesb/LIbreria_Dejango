# **API LIbreria_Django 🏁**
___________________________________
>API desarrollada por Julián Valdés

## INFORMACIÓN

Este repositorio es un pequeño sistemas compuesto por una API desarrollado en Django y un Front en Boostrap 4 y JQuery: cuenta con todos los métodos como **GET**, **HEAD**, **POST**, **PUT**, **DELETE** entre otras. Por temas de tiempo, el desarrollo se usaron metodos abstractos.

## DESPLIGUE

### BIBLIOTECAS Y LENGUAJES
- Python 3.8
- Django 2.2.9
- DRF 3.11.0
- djoser 2.0.3
- DRF-SimpleJWT 4.4.0

```
pip install Django==2.2.9
pip install djangorestframewor==3.11.0
pip install djangorestframewor-simplejwt==4.4.0
pip install djoser==2.0.3
```

## PUNTOS FINALES

* ### Crear usuario
Use este punto final para registrar un nuevo usuario.

**URL**: ``/api/v1/auth/users/``
**METODOS**: ``POST, HEAD, OPTIONS`` 
```
{
    "username": "",
    "password": "",
    "email": "",
}
```

* ### Iniciar sesión (crear JWT)
Use este punto final para iniciar sesión

**URL**: ``/api/v1/auth/jwt/create/`` 
**METODOS**: ``POST, HEAD, OPTIONS`` 
```
{
    "username": "",
    "password": "",
}
```

* ### Actualizar sesión (refrescar JWT)
Use este punto final para refrescar sesión

**URL**: ``/api/v1/auth/jwt/refresh/`` 
**METODOS**: ``POST, HEAD, OPTIONS`` 
```
{
    "refresh": "",
}
```

* ### Libros
Use este grupo de metodos para crear, eliminar, actualizar, y renderizar un libro

**URL**: ``/api/v1/book/``
**ALLOW**: ``POST, GET, PUT, DELETE, HEAD, OPTIONS`` 
```
HTTP 200 OK
Allow: GET, POST, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "name": "Book Viewset List",
    "description": "",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "title": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Titulo",
                "max_length": 120
            },
            "publication_date": {
                "type": "date",
                "required": true,
                "read_only": false,
                "label": "Fecha de publicación"
            },
            "description": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Descripción"
            },
            "cover": {
                "type": "url",
                "required": true,
                "read_only": false,
                "label": "Portada del libro",
                "max_length": 200
            }
        }
    }
}
```

* ### Comentarios
Use este grupo de metodos para crear, eliminar, actualizar, y renderizar un comentario

**URL**: ``/api/v1/comment/`` 
**METODOS**: ``POST, GET, PUT, DELETE, HEAD, OPTIONS`` 
```
{
    "name": "Comment Viewset List",
    "description": "",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "text": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Texto",
                "max_length": 1000
            },
            "create_date": {
                "type": "date",
                "required": true,
                "read_only": false,
                "label": "Fecha de publicación"
            },
            "book_id": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Book id"
            },
            "user_id": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "User id"
            }
        }
    }
}
```
* ### Usuarios
Use este grupo de metodos para eliminar, actualizar, y renderizar un Usuario

**URL**: ``/api/v1/user/<id>`` 
**METODOS**: ``GET, PUT, DELETE, HEAD, OPTIONS`` 
```
{
}
```


* ### Open Libra
Use este metodo para consumir Open Libra y mostrar los libros de un autor 

**URL**: ``/api/v1/open_libra?autor=<Nombre Autor>`` 
**METODOS**: ``GET`` 
```
{
}
```


>Por cuestiones de tiempo el desarrollo quedo estancado en un 70%.
