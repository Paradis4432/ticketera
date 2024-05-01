la biblia: https://github.com/adrianhajdin/project_next_14_ai_prompt_sharing

que se puede usar para simular post y get requests?

- ...

## TODO

- [ ] revisar que endpoitns se pueden convertir a dynamics
- [ ] stress test mysql, no tiene auto reconnect y no esta usando pooling, creo. goal: undefined
- [ ] me gustaria tener un sistema de ids para errores, ej: "E00001". documentarlos
- [ ] documentar los endpoints
- [ ] index for mysql tables
- [ ] validation for arguments via body or params, use zod?
- [ ] cuidado con open endpoints sin validacion, cuialquiera puede simplemente hacer requests a la api, limitar por
  cuenta. usar algun token

## TODO mid prio

- [ ] hay un sector en el must read del obsidian "metrics" tiene un par de links sobre charts y cosas
  la idea es armar un dashboard que se pueda armar con las metricas que se quieran,
  ex: https://spark.lucko.me/k3g3sWguAo
  se puede ver el grafico que permite seleccionar entre las distintas opciones, eso seria lo ideal

## TODO high prio

- [ ] ver como hacer pagos con mercado pago y primsa
- [ ] emails y notificaciones, que usar, server secundario? aws?
- [ ] generacion de codigos qr por entradas. verificar que el usuario esta logeado. como crear un qr que 
- [ ] login por cuenta de google, logout, cambio de contraseña, etc. en "la biblia" muestra como hacer para preparar
  esto

## TODO low prio

- [ ] mejorar los mensajes de los endpoints, son muy basicos y no dicen mucho