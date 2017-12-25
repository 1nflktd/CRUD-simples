# CRUD-Simples

- Banco de dados:

	```sql
	CREATE DATABASE crud_simples;
	```

- Tabela a ser criada:

	```sql
	CREATE TABLE `filme` (
		`id` INT AUTO_INCREMENT,
		`nome` VARCHAR(100) NULL,
		`ano` INT NULL,
		PRIMARY KEY (`id`)
	);
	```

- Service frontend:

	- Compilar código go:

		```
		CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o frontend .
		```

- Build cada service:

	```
	docker build -t api services/api/.
	docker build -t database services/database/.
	docker build -t frontend services/frontend/.
	```

- Conectar service api ao banco de dados local (pode ser necessário dar permissão ao usuário no host)

	```
	docker run -p 3000:3000 -e DB_HOST="192.168.0.10" -e DB_PORT="3306" -e DB_USER="docker_user" -e DB_PASSWORD="123456" -e DB_DATABASE="crud_simples" api
	```

- Para conectar no database dentro do container:

	```
	mysql -u docker_user -P 3307 -h 172.17.0.1 -p
	```

