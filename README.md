# MIR - Products Fake

Este proyecto fue realizado como parte del programa TOP para Desarrollador Web Full-Stack JavaScript de MakeItReal - Tiempo Completo.

## Tecnologías/Herramientas utilizadas

- HTML, CSS
- JavaScript
- React.js
- React Router v6
- Redux Toolkit
- Styled-components
- FontAwesome(React)

## Desarrollo de preguntas

1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

   Las ceremonias mas importantes son 4:

- Sprint planning; Planificación de tareas en el termino de ese sprint(product backlog)
- Dayly Scrum: Reunión diaria, donde comounicamos los avances individuales.
- Sprint Review; Reunión para evaluar resultados de los sprints. A su vez se revisa los avances de cada integrante e interacción con el equipo en ese mismo sprint.
- Sprint Restrospective: Reunión donde se ve el resultado de todo el proyecto, así como el análisis de los problemas que se presentaron. Básicamente es donde se da feedback de todo en conjunto.

2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
   Los Wireframes se entienden como el mockup o diseño de la estructura de cada página de la futura app. Para realizarlo dependerá del equipo de trabajo en el área de diseño o el que tu estes adaptado, empezando desde hoja y lápiz a mano hasta utilizar herramientas varias como Figma, AdobeXD, inVision, etc.

3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
   La diferencia entre estos 3 tipos de variables es el scope(apunte/alcance). La razón por la cual se agrego el let y const es porque var puede ser utilizado de forma global con la sustitución y se pueden sobreescribir variables. Let arregla el problema del var y actualmente es su sustituto y el más seguro de usar en cuanto a variables que van a cambiar pero que se mantendran en su scope. Const fue creado con el objetivo de no poder reasignar el valor de la variables, es decir, se mantendrá constante. Esto asegura la sobreescritura de la misma. Sin embargo, debemos de tener cuidado al momento de sobreescribir objetos o listas, ya que solo te restringe la reasignación del objeto o array entero mas no lo que vive dentro de ese array/objeto.

4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
   Los que conozco son:

- git switch -c rama-1
- git branch rama-1
- git checkout rama-1
- git checkout -b rama-1 (Igual que el checkout, pero con el -b te cambies directamente a esta)

5. Explicar la diferencia entre git merge y git rebase.
   Ambas nos sirven para fusionar ramas, pero, merge creará un commit indicando que hubo una fusión o adición en caso hubo algo nuevo en cualquiera de las ramas. El rebase unifica las ramas y no quedará rastro de la rama alterna con la que fusionaste, esto se verá reflejado en los commits de igual manera.

6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
   Git pull incorpora todos los cambios que existan en el repositorio a la rama en la cual se le haga el git pull. El Pull Request(PR) es solicitud de unir una rama a otra. Esta se hace directamente del repositorio en GitHub(por ejemplo) y dependerá de políticas del proyecto para su aprobación.

7. ¿Qué es el Virtual DOM?
   Podemos ver al Virtual DOM como una copia light del DOM. El propósito de su implementación en React fue para evitar la renderización de todo el DOM de JavaScript, la cual puede ser hasta 10 veces más lento. Es entonces que todos los objetos que existan en el Virtual DOM serán comparados con un "snapshot" del Virtual DOM que se realizó antes y ces así como puede saber exactamente que es lo que ha cambiado y solo los objetos que cambiaron, serán los únicos en ser renderizados finalmente en el DOM.

8. Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

Código CSS

```
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.c-section {
   padding: 30px 50px;

  display: flex;
  flex-direction: column;
  gap: 35px;
}

.c-section__title {
  background-color: #0E0E0E;
  border-top: 12px solid #5A5F73;
  color: #F7F5F7;
  padding: 20px 0;
  text-align: center;
}

.c-services {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.c-services__item {
  background-color: #F7F5F7;
  width: 48.7%;
  padding: 25px 20px;
  transition: all 0.3s;

  display: flex;
  flex-direction: column;
  gap: 25px;
}

.c-services__item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
}

.c-services__item h3 {
  margin-left: 40px;
}
```
