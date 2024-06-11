import BoxMethod from '/src/components/MethodBox/BoxMethod.jsx';

# Ticket 🎟

Bem-vindo à nossa plataforma de tickets de suporte! Aqui você pode criar, acompanhar e resolver problemas ou solicitações de suporte de maneira eficiente e organizada. Nossa equipe está aqui para ajudá-lo a resolver qualquer problema que você possa enfrentar.

## Endpoints Ticket:

BaseUrl: `http://<YourIpv4>:<PortApplication>`

### Registrar um ticket Ticket:

*ENDPOINT para ADMIN criar os tickets baseado no dia e horário do evento. Para existir um ticket, precisa antes existir um evento*

<BoxMethod
    method='POST'
    endpoint='/ticket'
/>

> Type: `JSON`

**Atributos:**

```
initialDateTicket: Date,
finishDateTicket: Date,
initialTimeTicket: Time,
finishTimeTicket: Time
```

**Retorno:** 

Status code: `201 created`

~~~json
{
	"ticket_id": "Long",
	"initialDate": "Date",
	"finishDate": "Date",
	"initialTime": "Time",
	"finishTime": "Time",
	"date_created": "LocalDate",
	"timeCreated": "LocalTime",
	"qrCodeNumber": "Integer"
}
~~~


**POST (GETicket) Ticket:**

<BoxMethod
    method='POST'
    endpoint='/ticket/getTicket/{event_id}'
/>

**Retorno:** 

Status code: `201 created`

~~~json
{
  "ticket_id": "Long",
  "event_name": "String",
  "qrCodeNumber": "Integer",
  "author": "String",
  "date_created": "Date",
  "timeCreated": "Time"
}
~~~

**PATCH Ticket Image:**

<BoxMethod
    method='PATCH'
    endpoint='/ticket/{event_id}/{ticket_id}'
/>

> Type: `JSON`

**Atributos:**

```
images: List<String>
```

**Retorno:** 

Status code: `200 OK`

~~~json
{
  "ticket_id": "Long",
  "imageUrl": "List<String>",
  "author": "String",
  "date_created": "Date",
  "time_created": "Time"
}
~~~


**PATCH Confirm Ticket:**

<BoxMethod
    method='PATCH'
    endpoint='/ticket/{event_id}/{ticket_id}/confirm'
/>

**Retorno:** 

Status code: `200 OK`

~~~json
{
  "ticket_id": "Long",
  "author": "String",
  "isPresence": true,
  "date_created": "Date",
  "time_created": "Time"
}
~~~

**GET Ticket by User:**

<BoxMethod
    method='PATCH'
    endpoint="/ticket/myTickets"
/>

**Retorno:** 

Status code: `200 OK`

~~~json
[
  {
    "initial_date": "Date",
    "nameOfEvent": "String",
    "qrCodeTicket": "String",
    "responsible_area": "String",
    "imageUrl": "String"
  }
]
~~~