---
title: Sync Paused Google Chrome Error
date: 2018-09-09T13:33:10-05:00
description: "Google chrome error sincronizacion pausada sync paused cuenta linux automaticamente al cerrarlo marca error"
keywords: ["sync-paused", "chrome"]
topics: ["Aportes"]
tags: ["Chrome"]
---

Error encontrado en Google Chrome hace unos dias
Me parecio desesperante tener que entrar a la cuenta de sincronizacion de chrome cada vez que lo cerraba por que me aparecia Sync Paused (sincronizacion pausada), al parecer en mi querido linux chrome se acaba de actualizar y por lo visto faltan algunos detalles, no tengo conocimiento si esto pase tambien en windows, pero supogo será lo mismo.

## Solucion al error Sync Paused chrome

- en una pestaña nueva en chrome colocamos lo siguiente

`chrome://flags/#account-consistency`

y en la parte que dice `enable` lo cambiamos por `Disable`
Cerramos chrome y lo volvemos a abrir, iniciamos sesión como de costumbre y checamos cerrando y abriendo para ver si ha surtido efecto.

A mi me funcionó muy bien, espero les haya servido.