# El Baratón

Rappi: Frontend Developer Challenge

El resultado del Challenge se puede ver en [El-baraton](https://el-baraton-1.firebaseapp.com)

### Pasos previos para ver el proyecto

   - Tener instalado [XAMPP](https://www.apachefriends.org/es/index.html)

   - Una vez instalado, ubicar la carpeta en la dirección donde lo instaló, y abrir la carpeta "htdocs"

   - Colocar la carpeta "el-baraton" dentro de "htdocs"
	
   - Ejecutar un servidor local con XAMPP

   - En el navegador de su preferencia, ir a "127.0.0.1/el-baraton/public/"

   - Listo

### Información adicional
	
   - Este challenge fue realizado con:
   		- AngularJS 1.6.10
   		- JQuery 3.3.1
   		- Bootstrap 3
   		- Font-awesome 4.7
		- slick.js
		- noUiSlider 10.0.0
		- jquery.zoom.js 1.7
		- ngStorage 0.3.10

   - Como base para los estilos de la página, se usó una plantilla gratuita llamada E-Shop, obtenida de [colorlib](https://colorlib.com/wp/free-bootstrap-ecommerce-website-templates/)

   - Las imágenes fueron sacadas de google images

   - Se usó Firebase como hosting para mostrar el resultado del proyecto ([El-baraton](https://el-baraton-1.firebaseapp.com))

   - En el proyecto se puede observar las funcionalidades básicas de un e-commerce:

   		- Mostrar productos diferentes dependiendo en qué categoría estés
		
   		- Distintos tipos de filtrado de productos

   		- Ordenar de distintas maneras el listado de productos

   		- Agregar productos a carrito de compras

   		- Buscar producto por nombre

   		- Modificar la cantidad de productos que el cliente quiera

### Sobre la resolución del problema 
	
   - Toda la funcionalidad del proyecto fue hecha bajo AngularJS

   - Se usaron controladoradores para cada vista, así como para la barra de navegación y el carrito superior. Esto con el fin de tener un buen control de las variables en cada sección

   - La navegación entre páginas es controlado con angular-route

   - Para filtrar, ordenar y buscar los productos, se usaron los **filter** de AngularJS

   - Se usó local storage para el almacenamiento de los productos del carrito y así no perder la información al recargar la página

   - Se usó el concepto de servicios para tener mismas funcionalidades en varios controladores




