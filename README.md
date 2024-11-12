# Validador de Número de Cédula de Nicaragua (nicaraguan-dni-validator)

- [Validador de Número de Cédula de Nicaragua (nicaraguan-dni-validator)](#validador-de-número-de-cédula-de-nicaragua-nicaraguan-dni-validator)
  - [Instalación](#instalación)
  - [Funciones](#funciones)
    - [`validate(id: string, verbose?: boolean): boolean || object{}`](#validateid-string-verbose-boolean-boolean--object)
    - [`listDepartments(): string[]`](#listdepartments-string)
    - [`listMunicipalities(department: string): object[]`](#listmunicipalitiesdepartment-string-object)
  - [Uso](#uso)
    - [Ejemplos](#ejemplos)
      - [Función principal (modo silencioso, por defecto)](#función-principal-modo-silencioso-por-defecto)
      - [Función principal (modo verbose)](#función-principal-modo-verbose)
        - [Ejemplos de mensajes de error con `verbose: true`](#ejemplos-de-mensajes-de-error-con-verbose-true)
      - [Funciones adicionales](#funciones-adicionales)
  - [Información sobre el Desarrollador](#información-sobre-el-desarrollador)
    - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)

Este es un paquete que sirve para validar números de cédula de Nicaragua., verificando la validez en función de los códigos de municipio, la fecha de nacimiento y una letra final calculada utilizando el algoritmo de módulo 23.

- Valida números de cédula (16 dígitos con guiones o 14 dígitos sin guiones).
- Verificar los códigos de municipio con una lista predefinida.
- Validar el formato de la fecha de nacimiento (ddmmyy).
- Calcular la letra final basada en los números de la cédula para verificar que sea correcta.
- También, cuenta con 2 funciones adicionales:
  - Mostrar una lista de los departamentos
  - Mostrar listado de los municipios (todos o filtrado por departamento).

- `nicaraguan-dni-validator` cuenta con 2 modos:
  - Modo `silencioso`, en el cual retornara `true` o `false` en caso que sea valida o no la cédula proporcionada. Este modo es el que se encuentra por defecto.
  - Modo `verbose`, en el cual retornara un objeto con 2 claves, la primera de tipo `boolean` para indicar si es valida o no, y la segunda clave, de tipo `string`, que contiene un mensaje relacionado a la validación.

## Instalación

Para instalar el paquete, usa npm:

```bash
npm install nicaraguan-dni-validator
```

## Funciones

### `validate(id: string, verbose?: boolean): boolean || object{}`

Valida el numero de cédula proporcionado.

Según el modo, devuelve `true` o `false`, o, puede incluir un objeto que agrega un mensaje relacionado a la validación.

**Parámetros:**

- `id` (string, obligatorio): La cédula a validar.

- `verbose` (boolean, opcional): Modo verbose. Si es true, devuelve un objeto con el estado de validación y un mensaje explicativo. Si es false o no se proporciona, solo devuelve true o false.

### `listDepartments(): string[]`

Devuelve una lista de todos los departamentos en Nicaragua.

### `listMunicipalities(department: string): object[]`

Devuelve una lista de municipios para el departamento especificado. Si no se proporciona un departamento o si el departamento no existe, devuelve ub objeto que contiene el código de municipio, el nombre del municipio, y el departamento al que pertenece ese municipio.

**Parámetros:**

- `department` (string, opcional): El nombre del departamento.

## Uso

Importar el paquete en tu archivo y llama a la función `validate` pasando como argumento la cédula a validar.

Opcionalmente, puedes activar el parámetro `verbose` para recibir mensajes detallados.

### Ejemplos

#### Función principal (modo silencioso, por defecto)

```javascript
import { validate } from 'nicaraguan-dni-validator'

const isValid = validate('001-280201-0000X'); // Modo silencioso (por defecto)
console.log(isValid); // true o false
```

#### Función principal (modo verbose)

```javascript
import { validate } from 'nicaraguan-dni-validator'

const result = validate('001-280201-0000X', true); // Activar modo verbose con el segundo parámetro

console.log(result); // { valid: true, message: 'La cédula es válida.' }
```

##### Ejemplos de mensajes de error con `verbose: true`

- `validate('999-280201-0000X', true)` devuelve:

```json
{ 
  valid: false, 
  message: 'El código de Municipio 999 no es válido.' 
}
```

- `validate('001-990201-0000X', true)` devuelve:

```json
{ 
  valid: false, 
  message: 'La fecha de nacimiento no es válida.' 
}
```

- `validate('001-280201-0000Z', true)` devuelve:

```json
{ 
  valid: false, 
  message: 'La letra proporcionada Z es incorrecta.' 
}
```

#### Funciones adicionales

```javascript
import { listDepartments, listMunicipalities } from 'nicaraguan-dni-validator'

// Listar todos los departamentos
const departamentos = listDepartments();
console.log(departamentos);

// Listar los municipios de un departamento
const municipios = listMunicipalities('Managua');
console.log(municipios);
```

## Información sobre el Desarrollador

Este paquete es mantenido por [Juan José Zeledón Benavides](https://www.linkedin.com/in/juanjzb/)

Para contribuciones o reportar problemas, puedes comunicarte a través de los siguientes medios:

- [Github: juanjzb](https://github.com/juanjzb)
- [email: zb.juanjose@gmail.com](mailto:zb.juanjose@gmail.com)

### Contribuciones

Para contribuir a este proyecto, haz un `fork` del proyecto, crea una nueva rama con tus cambios, y envía la `pull request`.

El enlace del repositorio es: `https://github.com/juanjzb/nicaraguan-dni-validator.git`

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
