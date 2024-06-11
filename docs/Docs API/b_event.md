import BoxMethod from '/src/components/MethodBox/BoxMethod.jsx';

# Evento 🎉

Junte-se a nós para uma experiência única e memorável no nosso evento especial! Na plataforma EsyBosch, você pode criar e personalizar seu próprio evento de forma fácil e rápida. Adicione fotos incríveis, uma descrição envolvente e todos os detalhes importantes, como data, local, entre outros.

## Endpoints Event:

BaseUrl: `http://<YourIpv4>:<PortApplication>`

### Registrar Evento:

<BoxMethod
    method='POST'
    endpoint='/event'
/>

> Type: `Multipartform`

**Atributos:**

```
nameOfEvent: String
responsivle_area: String
access_event: String
description: String
images: file (Optional)
localEvent: String
initialDate: Date
finishDate: Date
initialTime: Time
finishTime: Time
```

**Retorno:** 

Status code: `201 created`

~~~json
{
	"event_id": "Long",
	"nameOfEvent": "String",
	"responsible_area": "String",
	"access_event": "String",
	"description": "String",
	"imgUrl": "List<String> url",
	"localEvent": "String",
	"initialDate": "Date",
	"finishDate": "Date",
	"initialTime": "Time",
	"finishTime": "Time",
	"date_created": "LocalDate",
	"time_created": "LocalTime",
	"author": "String"
}
~~~

### Pegar eventos:

**GET All Events:**

<BoxMethod
    method='GET'
    endpoint='/event/events'
/>

**Retorno:** 

Status code: `200 OK`

~~~json
[
    {
		"event_id": "Long",
		"nameOfEvent": "String",
		"responsible_area": "String",
		"access_event": "String",
		"description": "String",
		"localEvent": "String",
		"initialDate": "Date",
		"finishDate": "Date",
		"initialTime": "Time",
		"finishTime":"Time",
		"imgUrl": "List<String> url"
	}
]
~~~



**GET Find by ID:**

<BoxMethod
    method='GET'
    endpoint='/event/{event_id}'
/>

**Retorno:** 

Status code: `200 OK`

~~~json
{
	"event_id": "Long",
	"nameOfEvent": "String",
	"responsible_area": "String",
	"access_event": "String",
	"description": "String",
	"imgUrl": "List<String> url",
	"localEvent": "String",
	"initialDate": "Date",
	"finishDate": "Date",
	"initialTime": "Time",
	"finishTime": "Time",
	"date_created": "LocalDate",
	"time_created": "LocalTime",
	"author": "String"
}
~~~


**GET Event name:**

<BoxMethod
    method='GET'
    endpoint='/event/name'
/>

**Retorno:** 

Status code: `200 OK`

~~~json
{
	"event_id": "Long",
	"nameOfEvent": "String"
}
~~~


**GET My events:**

<BoxMethod
    method='GET'
    endpoint='/event/myEvent'
/>

**Retorno:** 

Status code: `200 OK`

*Baseado no seu token da azure (Na qual faz a requisição)*

~~~json
[
  {
    "event_id": "Long",
    "nameOfEvent": "String",
    "initialDate": "Date",
    "initialTime": "Time",
    "local": "String",
    "responsible_are": "String"
  }
]
~~~


**GET Event Feed:**

<BoxMethod
    method='GET'
    endpoint='/event/feed'
/>

**Retorno:** 

Status code: `200 OK`

~~~json
{
	"event_id": "Long",
	"nameOfEvent": "String",
	"initialDate": "Date",
	"initialTime": "Time",
	"finishTime": "Time",
	"description": "String",
	"local": "Time",
	"responsible_area": "String",
	"imgUrl": "List<String> Url"
}
~~~

**GET Card Event:**

<BoxMethod
    method='GET'
    endpoint='/event/card'
/>

**Retorno:** 

Status code: `200 OK`

~~~json
{
	"event_id": "Long",
	"initialDate": "Date",
	"nameOfEvent": "String",
	"description": "String"
}
~~~

**PUT Update event:**

<BoxMethod
	method='PUT'
	endpoint='/event/update/{event_id}'
/>

> Type: `Multipartform`

**Atributos:**

```
responsible_area: String
description: String
localEvent: String
initialDate: Date
finishDate: Date
initialTime: Time
finishTime: Time
```

**Retorno:** 

Status code: `200 OK`

~~~json
{
  "event_id": "Long",
  "nameOfEvent": "String",
  "responsible_area": "String",
  "description": "String",
  "imgUrl": "List<String>",
  "localEvent": "String",
  "initialDate": "Date",
  "finishDate": "Date",
  "initialTime": "Time",
  "finishTime": "Time",
  "date_created": "Date",
  "time_created": "Date",
  "author": "String"
}
~~~


