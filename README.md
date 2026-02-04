
## Arquitectura de Software 

### ACTIVIDAD 3

#### INTEGRANTES 

- DOMINGUEZ CARDENAS OSCAR ADRIAN




# Arquitectura de Microservicios – Sistema Editorial

##  Descripción
Proyecto académico que implementa una arquitectura basada en microservicios para la gestión de autores y publicaciones, utilizando Node.js, TypeScript, Docker y BPMN.

---

##  Arquitectura del Sistema
El sistema está compuesto por:
- Microservicio Authors
- Microservicio Publications
- Frontend (React)
- Bases de datos MySQL
- Docker Compose para orquestación

### Diagrama de arquitectura:
![Arquitectura](docs/arquitectura.png)

---

##  Ejecución del Proyecto

### Levantar el sistema

docker compose up --build
![Ejecucion](docs/docker1.png)
![Ejecucion](docs/docker2.png)

### Crear autor
![Crear autor](docs/crearAutor.png)

### Crear publicación
![Crear publicación](docs/crearPublicacion.png)

### Listar autores
![Listar autores](docs/listarAutor.png)

### Listar publicaciones
![Listar publicaciones](docs/listarPublicacion.png)

### Buscar autor con authorId correcto
![authorId correcto](docs/datosInc1.png)

### Prueba: ingresar datos incompletos 1
![datos incompletos 1](docs/datosInc1.png)

### Prueba: ingresar datos incompletos 2
![datos incompletos 2](docs/datosInc2.png)

### Prueba: ingresar datos incompletos 3
![datos incompletos 3](docs/datosInc3.png)

### Prueba: Obtener autor por ID inexistente
![autor por ID inexistente](docs/authorIdI.png)

### Crear publicación con la id de un autor inexistente.
![Publications id autor inexistente](docs/publicacionIDI.png)


### Buscar Endpoint inexistente en publicaciones 
![Endpoint inexistente en publicaciones](docs/EndpointP.png)


##  Ejecución del Proyecto en el Frontend


### Evidenciamos en el navegador nuestro “crear autor”:

![crear autor frontend](docs/crearAF.png)

### Creado correctamente

![crear autor frontend](docs/crearAF1.png)

### listado

![crear autor frontend](docs/crearAF2.png)



### Crear Publicaciones desde el Frontend 

![Crear Publications Frontend](docs/crearPF.png)

### Creado correctamente

![Crear Publications Frontend](docs/crearPF1.png)

### no se crear Publicaciones por campos imcompletos

![Crear Publications Frontend](docs/crearPF2.png)

### Listar publicaciones en el frontend
![Listar publicaciones F](docs/listarPuF.png)

### Listar autores  en el frontend
![Listar autores F](docs/listarAutorF.png)



## Modelo BPMN del Proceso Editorial

![BPMN Editorial](docs/bpmn.png)

### Si aprueba: preparar publicación → publicar → fin (publicado) 
![BPMN Editorial](docs/bpmn1.png)

### Si rechaza: notificar rechazo → fin (rechazado)
![BPMN Editorial](docs/bpmn2.png)
