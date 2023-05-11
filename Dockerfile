FROM 10.124.152.135/tianticommon/nginx:1.17.10

COPY dist /usr/share/nginx/html/union-design-pc
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
