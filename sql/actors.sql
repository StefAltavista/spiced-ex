DROP TABLE IF EXISTS actors
CREATE TABLE actors(
    Name VARCHAR primary key,
    Age int,
    [Number of Oscars] int
);

INSERT INTO actors (Name,Age,[Number of Oscars])VALUES('Leonardo DiCaprio',42,1);

INSERT INTO actors (Name,Age,[Number of Oscars])VALUES('Jennifer Lawrence',25,1);

INSERT INTO actors (Name,Age,[Number of Oscars])VALUES('Samuel L. Jackson',67,0);

INSERT INTO actors (Name,Age,[Number of Oscars])VALUES('Meryl Streep',66,3);

INSERT INTO actors (Name,Age,[Number of Oscars])VALUES('John Cho',43,0);


-- Queries

-- SELECT * FROM actors where "Number of Oscars" >1;
-- SELECT * FROM actors where Age>30