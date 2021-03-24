
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80), 
    "last_name" VARCHAR (80), 
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "level" VARCHAR (80),
    "age" INTEGER,
    "is_admin" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "booking" (
	"id" SERIAL PRIMARY KEY,
	"lessons" VARCHAR (80),
	"date" DATE, 
	"time" TIME, 
	"notes" VARCHAR (255),
	"feedback" VARCHAR (255),
	"user_id" INT REFERENCES "user"
	);