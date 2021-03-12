docker build --no-cache -f SQL\Dockerfile.PostgreSql -t stolovka/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t stolovka/app ../..
