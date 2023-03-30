# Utilisation de l'image Docker officielle Nginx
FROM nginx:latest

# Création d'un répertoire de travail pour l'application
WORKDIR /usr/share/nginx/html/

# Copie de tous les fichiers du répertoire courant dans le répertoire de travail de l'application
COPY . /usr/share/nginx/html/

# Exposition du port 80 pour le trafic HTTP
EXPOSE 80