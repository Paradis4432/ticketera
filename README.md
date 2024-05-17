la biblia: https://github.com/adrianhajdin/project_next_14_ai_prompt_sharing
la nueva biblia: https://github.com/RiskyMH/EmailThing/tree/main/app
que se puede usar para simular post y get requests?

## TODO high prio

- [ ] generacion de codigos qr por entradas. verificar que el usuario esta logeado. como crear un qr que
- [ ] secure most to all endpoints

## TODO mid prio

- [ ] hay un sector en el must read del obsidian "metrics" tiene un par de links sobre charts y cosas
  la idea es armar un dashboard que se pueda armar con las metricas que se quieran,
  ex: https://spark.lucko.me/k3g3sWguAo
  se puede ver el grafico que permite seleccionar entre las distintas opciones, eso seria lo ideal

## TODO

- [ ] middleware para verificar que el usuario esta
  logeado https://nextjs.org/docs/pages/building-your-application/routing/middleware
- [ ] revisar que endpoitns se pueden convertir a dynamics
- [ ] stress test mysql, no tiene auto reconnect y no esta usando pooling, creo. goal: undefined
- [ ] me gustaria tener un sistema de ids para errores, ej: "E00001". documentarlos
- [ ] documentar los endpoints
- [ ] cuidado con open endpoints sin validacion, cuialquiera puede simplemente hacer requests a la api, limitar por
  cuenta. usar algun token

## TODO low prio

- [ ] mejorar los mensajes de los endpoints, son muy basicos y no dicen mucho

## Facu

branch "tablas" -> tablas -> PR to dev -> branch de tablas "dashboard" -> PR to dev 

- [x] tablas para metrics of sales and of users
- [x] dashboard /profile/events -> validacion de user
- [ ] dashboard /profile/events/id/metrics -> validacion de user -> pide metrics of sales y of users
- [x] dashboard /profile/tickets -> validacion de user -> list of tickets

## Lucas

- [ ] validation for arguments via body or params, use zod?
- [ ] ver como hacer pagos con mercado pago y primsa

## For testing

- [ ] Docker
- [ ] Google login usando la biblia
- [ ] emails y notificaciones, que usar, server secundario? aws?
- [-] login por cuenta de google, logout, etc. en "la biblia" muestra como hacer para preparar
  esto

### 1. Descargar Docker Desktop

- Descarga e instala [Docker Desktop](https://www.docker.com/products/docker-desktop/) para tu sistema operativo.

### 2. Descargar imagen de MySQL

- Ejecuta el siguiente comando para iniciar los servicios en modo "detached" (en segundo plano):
    ```bash
    docker pull mysql:oracle
    ```2

### 3. Iniciar los servicios

- Ejecuta el siguiente comando para iniciar los servicios en modo "detached" (en segundo plano):
    ```bash
    docker compose up -d
    ```

### 4. Detener los servicios

- Para detener y eliminar los contenedores, utiliza el siguiente comando:
    ```bash
    docker compose down
    ```

## Notas adicionales

```yaml
  docker-compose.yml 
```  

crea automaticamente un volumen para que los datos en la base de datos persista,
en el caso de querrer borrar los datos se debe borrar el volumen y volver a correr el comando de docker compose up