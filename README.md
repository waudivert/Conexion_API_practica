# Explorador de contenido aleatorio

## Integrantes

- Walkyria Nicole Audivert Lino

## Descripción

Aplicación web desarrollada con ASP.NET Core MVC, HTML, CSS y JavaScript que consume cuatro APIs públicas para mostrar contenido aleatorio sin recargar completamente la página.

Las APIs utilizadas son:

- DummyJSON para citas.
- Dog CEO para imágenes de perros.
- CATAAS para imágenes de gatos.
- Useless Facts para datos curiosos.

## Instrucciones de ejecución

1. Abrir la solución en Visual Studio.
2. Ejecutar el proyecto.
3. La página principal carga automáticamente contenido de las cuatro APIs.
4. Utilizar el botón de cada sección para solicitar nuevo contenido.

## Preguntas de reflexión

### 1. ¿Qué es un endpoint y cuál utilizaste para cada API?

Un endpoint es una dirección específica de una API a la que se realiza una solicitud para obtener información.

Los endpoints utilizados fueron:

- Citas: `https://dummyjson.com/quotes/random`
- Perros: `https://dog.ceo/api/breeds/image/random`
- Gatos: `https://cataas.com/cat?json=true`
- Datos curiosos: `https://uselessfacts.jsph.pl/api/v2/facts/random?language=en`

### 2. ¿Qué diferencia existe entre recibir JSON y recibir directamente una imagen?

El JSON contiene datos estructurados que se pueden procesar con JavaScript. Una imagen, en cambio, es un archivo visual que puede mostrarse directamente mediante su URL. Por eso usamos el endpoint JSON de CATAAS para obtener primero la información de la imagen.

### 3. ¿Qué función cumplen await y response.json()?

`await` permite esperar el resultado de una operación asíncrona sin bloquear toda la página. `response.json()` convierte la respuesta recibida en un objeto JavaScript para poder acceder a sus campos.

### 4. ¿Por qué se debe verificar response.ok además de utilizar try/catch?

Porque `fetch` no genera automáticamente un error cuando el servidor responde con ciertos códigos HTTP de error. `response.ok` permite comprobar si la respuesta fue exitosa y lanzar un error si no lo fue.

### 5. ¿Cómo lograste actualizar una sección sin recargar toda la página?

Cada función obtiene los elementos correspondientes mediante el DOM y modifica únicamente su contenido. Las solicitudes se realizan con `fetch`, por lo que no es necesario recargar toda la página.
