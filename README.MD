# Circuit Breaker

## Requisitos previos
- **Node JS**

## Atributos de calidad

- Sensibilidad: La sensibilidad de un **circuit breaker** determina la corriente mínima a la que se abrirá. Una sensibilidad adecuada es importante para proteger los equipos y las personas de daños causados por sobrecargas o cortocircuitos.
- Velocidad de disparo: La velocidad de disparo de un circuito breaker determina el tiempo que tarda en abrirse. Una velocidad de disparo adecuada es importante para proteger los equipos y las personas de daños causados por sobrecorrientes de alta magnitud.
- Capacidad de interrupción: La capacidad de interrupción de un circuito breaker determina la máxima corriente que puede interrumpir de forma segura. Una capacidad de interrupción adecuada es importante para proteger los equipos y las personas de daños causados por cortocircuitos.


## Ventajas

- **Protección contra sobrecargas**: Los **circuit breakers** están diseñados para abrirse automáticamente cuando se detecta una corriente excesiva. Esto ayuda a proteger los equipos y las personas de daños causados por sobrecargas o cortocircuitos.
- **Seguridad**: Los **circuit breakers** ayudan a prevenir incendios y otros accidentes eléctricos.
- **Confiabilidad**: Los **circuit breakers** están diseñados para funcionar de forma segura y confiable durante muchos años.
- **Eficiencia**: Los **circuit breakers** ayudan a reducir el consumo de energía al evitar que los equipos funcionen con una corriente excesiva.

## Desventajas

- **Costo**: Los **circuit breakers** pueden ser costosos, especialmente los circuitos breakers de alta capacidad de interrupción o los circuitos breakers diseñados para aplicaciones específicas.
- **Mantenimiento**: Los circuitos breakers deben ser inspeccionados y mantenidos de forma regular para garantizar su funcionamiento adecuado.

## ¿ Cuándo usarlo ?

Este patrón se utiliza cuando queremos evitar una dependencia de recursos, como
Una solicitud HTTP o una consulta de base de datos se sobrecarga. Así que no continúes
recibir más solicitudes si no vas a poder satisfacerlas. Si nuestro objetivo es reducir la
tiempo de espera del sistema en caso de sobrecarga, este patrón puede ser la solución que
Buscamos Es ideal cuando necesitamos un sistema resistente a sobrecargas.

