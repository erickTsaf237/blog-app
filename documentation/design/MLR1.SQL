# DROP DATABASE IF EXISTS blog;

# CREATE DATABASE IF NOT EXISTS blog;
USE blog;
# -----------------------------------------------------------------------------
#       TABLE : PICTURE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS PICTURE
(
    ID INTEGER(5) NOT NULL  ,
    SOURCE VARCHAR(255) unique NOT NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       TABLE : ALBUM
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS ALBUM
(
    ID INTEGER(4) NOT NULL  ,
    ID_VISIBILITY INTEGER(1) NOT NULL  ,
    ID_CREATE INTEGER(5) NOT NULL  ,
    TILTLE VARCHAR(128) NOT NULL  ,
    DECRIPTION TEXT NULL  ,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE ALBUM
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_ALBUM_VISIBILTY
    ON ALBUM (ID_VISIBILITY ASC);

CREATE  INDEX I_FK_ALBUM_USERS
    ON ALBUM (ID_CREATE ASC);

# -----------------------------------------------------------------------------
#       TABLE : POST
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS POST
(
    ID INTEGER(4) NOT NULL  ,
    ID_OWN2 INTEGER(5) NOT NULL  ,
    ID_VISIBILITY  INTEGER(1) NOT NULL  ,
    TEXT TEXT NULL  ,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE POST
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_POST_PICTURE
    ON POST (ID_OWN2 ASC);

CREATE  INDEX I_FK_POST_VISIBILTY
    ON POST (ID_VISIBILITY  ASC);

# -----------------------------------------------------------------------------
#       TABLE : VISIBILTY
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS VISIBILTY
(
    ID INTEGER(1) NOT NULL  ,
    VALUE VARCHAR(32) NOT NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       TABLE : USERS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS USERS
(
    ID INTEGER(5) NOT NULL  ,
    ID_OWN INTEGER(5) NOT NULL  ,
    FIRSTNAME VARCHAR(64) NOT NULL  ,
    LASTNAME VARCHAR(64) NOT NULL  ,
    USERNAME VARCHAR(128) NOT NULL  ,
    EMAIL VARCHAR(128) NOT NULL  ,
    PASSWORD VARCHAR(128) NOT NULL  ,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE USERS
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_USERS_PICTURE
    ON USERS (ID_OWN ASC);

# -----------------------------------------------------------------------------
#       TABLE : WORK_ON
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS WORK_ON
(
    ID INTEGER(5) NOT NULL  ,
    ID_1 INTEGER(4) NOT NULL
    , PRIMARY KEY (ID,ID_1)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE WORK_ON
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_WORK_ON_USERS
    ON WORK_ON (ID ASC);

CREATE  INDEX I_FK_WORK_ON_ALBUM
    ON WORK_ON (ID_1 ASC);

# -----------------------------------------------------------------------------
#       TABLE : IS_FRIEND_OF
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS IS_FRIEND_OF
(
    ID INTEGER(5) NOT NULL  ,
    ID_1 INTEGER(5) NOT NULL
    , PRIMARY KEY (ID,ID_1)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE IS_FRIEND_OF
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_IS_FRIEND_OF_USERS
    ON IS_FRIEND_OF (ID ASC);

CREATE  INDEX I_FK_IS_FRIEND_OF_USERS1
    ON IS_FRIEND_OF (ID_1 ASC);

# -----------------------------------------------------------------------------
#       TABLE : SHARE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS SHARE
(
    ID INTEGER(5) NOT NULL  ,
    ID_1 INTEGER(4) NOT NULL
    , PRIMARY KEY (ID,ID_1)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE SHARE
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_SHARE_USERS
    ON SHARE (ID ASC);

CREATE  INDEX I_FK_SHARE_POST
    ON SHARE (ID_1 ASC);

# -----------------------------------------------------------------------------
#       TABLE : CONTENT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CONTENT
(
    ID INTEGER(5) NOT NULL  ,
    ID_1 INTEGER(4) NOT NULL
    , PRIMARY KEY (ID,ID_1)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE CONTENT
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_CONTENT_PICTURE
    ON CONTENT (ID ASC);

CREATE  INDEX I_FK_CONTENT_POST
    ON CONTENT (ID_1 ASC);

# -----------------------------------------------------------------------------
#       TABLE : COMMENT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS COMMENT
(
    ID INTEGER(4) NOT NULL  ,
    ID_1 INTEGER(5) NOT NULL  ,
    TEXT TEXT NOT NULL  ,
    I_LIKE BOOL NULL
    , PRIMARY KEY (ID,ID_1)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE COMMENT
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_COMMENT_POST
    ON COMMENT (ID ASC);

CREATE  INDEX I_FK_COMMENT_USERS
    ON COMMENT (ID_1 ASC);

# -----------------------------------------------------------------------------
#       TABLE : POSSESS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS POSSESS
(
    ID INTEGER(4) NOT NULL  ,
    ID_1 INTEGER(4) NOT NULL
    , PRIMARY KEY (ID,ID_1)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE POSSESS
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_POSSESS_ALBUM
    ON POSSESS (ID ASC);

CREATE  INDEX I_FK_POSSESS_POST
    ON POSSESS (ID_1 ASC);


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE ALBUM
    ADD FOREIGN KEY FK_ALBUM_VISIBILTY (ID_VISIBILITY)
    REFERENCES VISIBILTY (ID) ;


ALTER TABLE ALBUM
    ADD FOREIGN KEY FK_ALBUM_USERS (ID_CREATE)
    REFERENCES USERS (ID) ;


ALTER TABLE POST
    ADD FOREIGN KEY FK_POST_PICTURE (ID_OWN2)
    REFERENCES PICTURE (ID) ;


ALTER TABLE POST
    ADD FOREIGN KEY FK_POST_VISIBILTY (ID_VISIBILITY )
    REFERENCES VISIBILTY (ID) ;


ALTER TABLE USERS
    ADD FOREIGN KEY FK_USERS_PICTURE (ID_OWN)
    REFERENCES PICTURE (ID) ;


ALTER TABLE WORK_ON
    ADD FOREIGN KEY FK_WORK_ON_USERS (ID)
    REFERENCES USERS (ID) ;


ALTER TABLE WORK_ON
    ADD FOREIGN KEY FK_WORK_ON_ALBUM (ID_1)
    REFERENCES ALBUM (ID) ;


ALTER TABLE IS_FRIEND_OF
    ADD FOREIGN KEY FK_IS_FRIEND_OF_USERS (ID)
    REFERENCES USERS (ID) ;


ALTER TABLE IS_FRIEND_OF
    ADD FOREIGN KEY FK_IS_FRIEND_OF_USERS1 (ID_1)
    REFERENCES USERS (ID) ;


ALTER TABLE SHARE
    ADD FOREIGN KEY FK_SHARE_USERS (ID)
    REFERENCES USERS (ID) ;


ALTER TABLE SHARE
    ADD FOREIGN KEY FK_SHARE_POST (ID_1)
    REFERENCES POST (ID) ;


ALTER TABLE CONTENT
    ADD FOREIGN KEY FK_CONTENT_PICTURE (ID)
    REFERENCES PICTURE (ID) ;


ALTER TABLE CONTENT
    ADD FOREIGN KEY FK_CONTENT_POST (ID_1)
    REFERENCES POST (ID) ;


ALTER TABLE COMMENT
    ADD FOREIGN KEY FK_COMMENT_POST (ID)
    REFERENCES POST (ID) ;


ALTER TABLE COMMENT
    ADD FOREIGN KEY FK_COMMENT_USERS (ID_1)
    REFERENCES USERS (ID) ;


ALTER TABLE POSSESS
    ADD FOREIGN KEY FK_POSSESS_ALBUM (ID)
    REFERENCES ALBUM (ID) ;


ALTER TABLE POSSESS
    ADD FOREIGN KEY FK_POSSESS_POST (ID_1)
    REFERENCES POST (ID) ;


show tables ;

