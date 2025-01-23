#!/bin/sh

#docker compose build
docker compose  stop db
docker compose rm -f db
docker volume rm db
docker compose up -d db

sleep 5
sudo rm -rf ./db/migrations/*
DB_HOST=localhost DB_PORT=23798 sh -c 'npx squid-typeorm-migration generate'
DB_HOST=localhost DB_PORT=23798  sh -c 'make migrate'
#docker compose up -d indexer_graphql indexer_processor
#docker logs -f indexer_processor