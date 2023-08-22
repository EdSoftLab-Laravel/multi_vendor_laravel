setup:
    @make build
    @make up
    @make composer-update
build:
    docker-compose build
build-rc:
    docker-compose build --no-cache --force-rm
stop:
    docker-compose stop
up:
    docker-compose up
up-d:
    docker-compose up -d
composer-update:
    docker exec 6ammart-admin-app-1 bash -c"composer update"

