-- master.dbo.Peserta definition

-- Drop table

-- DROP TABLE master.dbo.Peserta GO

CREATE TABLE master.dbo.Peserta (
	Id char(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	NamaDepan varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	NamaBelakang varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT Peserta_PK PRIMARY KEY (Id)
) GO;


-- master.dbo.Test definition

-- Drop table

-- DROP TABLE master.dbo.Test GO

CREATE TABLE master.dbo.Test (
	Id char(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	NamaTest varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT Test_PK PRIMARY KEY (Id)
) GO;


-- master.dbo.PesertaTest definition

-- Drop table

-- DROP TABLE master.dbo.PesertaTest GO

CREATE TABLE master.dbo.PesertaTest (
	Id char(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	PesertaId char(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	TestId char(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Status text COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT PesertaTest_PK PRIMARY KEY (Id),
	CONSTRAINT PesertaTest_FK FOREIGN KEY (PesertaId) REFERENCES master.dbo.Peserta(Id),
	CONSTRAINT PesertaTest_FK_1 FOREIGN KEY (TestId) REFERENCES master.dbo.Test(Id)
) GO;