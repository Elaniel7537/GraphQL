AHORA SE TIENE

.- Manejo de buenas practicas con Atomic Design.  
.- Conexion con Apollo Client - GraphQL (Dejo como observación que no había trabajado con estas coexciones antes, es buena la experiencia.).  
.- Listar Usuarios - GraphQL.  
.- Listar Posts de un usuario seleccionado.  
.- Webpack Less, escalable por modulos, buenas practicas como flexbox.  
.- Next js, create-app-next.  
.- Implementación de Ant Design (muy buen manejador de diseño que se acompla bastante al desarrollar).  

OBSERBACIONES <br/>
Tengo una consulta con respecto al listar los post, tiene que ver algo con la cache que maneja las conexiones con Apollo Cliente, que al consultar una segunda vez esta no se dispara. <br/>

QUEDA PENDIENTE <br/>
Actualizar un usuario. <br/>

EXTRA <br/>
Listar Albunes y traer imagenes <br/>

Comandos de ejecución: <br/>

yarn dev  - modo desarrollo  
yarn build - empaquetado  
yarn start - modo servidor  

<br/>


DESAFÍO:


Este desafío técnico tiene por objetivo conocer cómo escribes código en el contexto de una aplicación react que debe comunicarse con una API GraphQL. Para contarnos lo que sabes, crea una aplicación siguiendo estos lineamientos:


Utiliza los datos de https://graphqlzero.almansi.me.

Elige una lista de datos (album, comment, photo, post, todo o user)
Crea una interfaz para realizar operaciones CRUD para esa entidad particular. 


Considera también mostrar la lista de esa entidad. Por ejemplo, si elige “album”, tu app debe ser capaz de mostrar la lista de todos los álbumes, y realizar las operaciones CRUD sobre ellos.


Tu interfaz puede contar con una o varias páginas, según estimes conveniente.


Requerimientos:

Aplicación react (nextjs, create-react-app u otro a elección) sin hooks.

NO usar framework CSS, sino implementar un diseño sencillo desde cero. No se evaluará a nivel de diseño visual, sino que la forma de organizar clases, componentes y código SCSS. (Queremos ver cómo organizas el código pensando en que la aplicación será más grande)

Disponibiliza tu aplicación en un repositorio git (con todos sus commits, queremos ver tu proceso de desarrollo y entrega)

Utiliza buenas prácticas de desarrollo


Extras:

Permite que la vista de los detalles de la entidad que elegiste sea SEO-friendly

Si sabes usar hooks, puedes escribir UNO de tus componentes utilizándolos, dejando debidamente documentado que ese es distinto.

Escribe un test unitario para un componente
