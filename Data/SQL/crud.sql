-- DROP SCHEMA dbo;

CREATE SCHEMA dbo;
-- catalis.dbo.Peserta definition

-- Drop table

-- DROP TABLE catalis.dbo.Peserta GO

CREATE TABLE catalis.dbo.Peserta (
	Id char(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	NamaDepan varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	NamaBelakang varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT Peserta_PK PRIMARY KEY (Id)
) GO;


-- catalis.dbo.Test definition

-- Drop table

-- DROP TABLE catalis.dbo.Test GO

CREATE TABLE catalis.dbo.Test (
	Id char(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	NamaTest varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT Test_PK PRIMARY KEY (Id)
) GO;


-- catalis.dbo.PesertaTest definition

-- Drop table

-- DROP TABLE catalis.dbo.PesertaTest GO

CREATE TABLE catalis.dbo.PesertaTest (
	Id char(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	PesertaId char(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	TestId char(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Status text COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT PesertaTest_PK PRIMARY KEY (Id),
	CONSTRAINT PesertaTest_FK FOREIGN KEY (PesertaId) REFERENCES catalis.dbo.Peserta(Id),
	CONSTRAINT PesertaTest_FK_1 FOREIGN KEY (TestId) REFERENCES catalis.dbo.Test(Id)
) GO;
