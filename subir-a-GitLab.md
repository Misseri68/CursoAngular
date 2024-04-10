## En GitLab:

1. Consigue el token (`Perfil` > `Preferencias` > `Token`).
2. Crea el repositorio y copia el enlace de éste.

## Para subir el proyecto local:

1. Instala el entorno Git.
2. Ve a la carpeta del proyecto que quieras subir y abre la terminal o línea de comandos en ese directorio.
3. En la terminal, escribe `git init`.
4. Una vez inicializado el entorno Git, utiliza `git add .` para añadir todos los archivos del proyecto.
5. Escribe `git commit -m 'mensaje'`, utilizando comillas para rodear el mensaje. Esto es como presentar lo que quieres cambiar y subir para luego usar push y subirlo.
6. Añade el enlace de tu repositorio de GitLab. Escribe `git remote add origin url-de-tu-repo`.
7. Escribe `git push -u`.
   - Si te da una advertencia sobre la rama `master` o similar, utiliza `git push --set-upstream origin master`.
   - Si te da una advertencia de seguridad o de SSL, ejecuta `git config --global http.sslVerify false`.
	 Si al hacer el commit no añades un mensaje y te lleva a un editor de texto, puedes salir escribiendo un mensaje y luego escribir `:wq` (write, quit).


-Ari