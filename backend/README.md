```
 docker run -d \            
> --name kiet-postgres \
> -e POSTGRES_USER=kiet-postgres \
> -e POSTGRES_PASSWORD=kiet-pass \
> -e POSTGRES_DB=kiet-db \
> -p 5432:5432 \
> -v kiet_pgdata:/var/lib/postgresql/data \
> postgres:latest

```