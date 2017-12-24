FROM mysql

ENV MYSQL_ALLOW_EMPTY_PASSWORD "yes"

COPY init_db.sql /docker-entrypoint-initdb.d/

EXPOSE 3306