En GitLab:

Consigue el token (Perfil > Preferencias > Token).
Crea el repositorio y copia el enlace de éste.
Para subir el proyecto local:

Instala el entorno Git.
Ve a la carpeta del proyecto que quieras subir y abre la terminal o línea de comandos en ese directorio.
En la terminal, escribe git init.
Una vez inicializado el entorno Git, utiliza git add . para añadir todos los archivos del proyecto.
Escribe git commit -m 'mensaje', utilizando comillas para rodear el mensaje.
Añade el enlace de tu repositorio de GitLab. Escribe git remote add origin url-de-tu-repo.
Escribe git push -u.
Si te da una advertencia sobre la rama master o similar, utiliza git push --set-upstream origin master.
Si te da una advertencia de seguridad o de SSL, ejecuta git config --global http.sslVerify false.
Si al hacer el commit no añades un mensaje y te lleva a un editor de texto, puedes salir escribiendo un mensaje y luego escribir :wq (write, quit).