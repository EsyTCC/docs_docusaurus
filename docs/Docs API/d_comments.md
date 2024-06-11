import BoxMethod from '/src/components/MethodBox/BoxMethod.jsx';

# Comentários 📋

Seus comentários são importantes para nós! Queremos garantir que cada interação com nossos serviços seja positiva e produtiva. Por favor, compartilhe suas opiniões e sugestões conosco para que possamos continuar a melhorar.

* Comentário é baseado nos endpoints de avaliação (Assessment)

## Endpoint Comentários:

BaseUrl: `http://<YourIpv4>:<PortApplication>`

### Pegar Comentário:

<BoxMethod
    method='GET'
    endpoint='/assessment/comments/{event_id}'
/>


**Retorno:**

Statos code: `200 OK`

~~~json
[
	{
		"comment_id": "Long",
		"author": "String",
		"description_comment": "String",
		"date_created": "Date",
		"assessment": "Integer"
	}
]
~~~