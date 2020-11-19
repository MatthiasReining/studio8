FROM nginx:latest

# copy password hash
COPY nginx/.htpasswd /etc/nginx/

# copy server settings
COPY nginx/default.conf /etc/nginx/conf.d

# copy website
COPY app /usr/share/nginx/html