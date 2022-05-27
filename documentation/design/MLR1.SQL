DROP DATABASE IF EXISTS blog;

CREATE DATABASE IF NOT EXISTS blog;
USE blog;
# -----------------------------------------------------------------------------
#       TABLE : PICTURES
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS PICTURES
(
    ID INTEGER(5) UNSIGNED NOT NULL AUTO_INCREMENT ,
    SOURCE VARCHAR(255) unique NOT NULL,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       TABLE : ALBUM
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS ALBUMS
(
    ID INTEGER(4) UNSIGNED NOT NULL AUTO_INCREMENT  ,
    ID_VISIBILITY INTEGER(1) UNSIGNED NOT NULL  ,
    ID_USER INTEGER(5) UNSIGNED NOT NULL  ,
    TITLE VARCHAR(128) NOT NULL  ,
    DESCRIPTION TEXT NULL  ,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE ALBUM
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_ALBUM_VISIBILTY
    ON ALBUMS (ID_VISIBILITY ASC);

CREATE  INDEX I_FK_ALBUM_USERS
    ON ALBUMS (ID_USER ASC);

# -----------------------------------------------------------------------------
#       TABLE : POST
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS POST
(
    ID INTEGER(4) UNSIGNED NOT NULL AUTO_INCREMENT ,
    ID_PICTURE  INTEGER(5) UNSIGNED NOT NULL  ,
    ID_VISIBILITY  INTEGER(1) UNSIGNED NOT NULL  ,
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
    ON POST (ID_PICTURE  ASC);

CREATE  INDEX I_FK_POST_VISIBILTY
    ON POST (ID_VISIBILITY  ASC);

# -----------------------------------------------------------------------------
#       TABLE : VISIBILTY
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS VISIBILTIES
(
    ID INTEGER(1) UNSIGNED NOT NULL AUTO_INCREMENT  ,
    VALUE VARCHAR(32) NOT NULL,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       TABLE : USERS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS USERS
(
    ID INTEGER(5) UNSIGNED NOT NULL AUTO_INCREMENT  ,
    ID_PICTURE INTEGER(5) UNSIGNED NOT NULL  ,
    FIRSTNAME VARCHAR(64) NOT NULL  ,
    LASTNAME VARCHAR(64) NOT NULL  ,
    USERNAME VARCHAR(128) unique NOT NULL  ,
    EMAIL VARCHAR(128) unique NOT NULL  ,
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
    ON USERS (ID_PICTURE ASC);

# -----------------------------------------------------------------------------
#       TABLE : WORK_ON
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS WORK_ON
(
    ID INTEGER(6) UNSIGNED NOT NULL AUTO_INCREMENT  ,
    ID_USERS INTEGER(5) UNSIGNED NOT NULL  ,
    ID_ALBUM INTEGER(4) UNSIGNED NOT NULL,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE WORK_ON
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_WORK_ON_USERS
    ON WORK_ON (ID_USERS ASC);

CREATE  INDEX I_FK_WORK_ON_ALBUM
    ON WORK_ON (ID_ALBUM ASC);

# -----------------------------------------------------------------------------
#       TABLE : IS_FRIEND_OF
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS IS_FRIEND_OF
(
    ID INTEGER(5) UNSIGNED NOT NULL AUTO_INCREMENT  ,
    ID_USERS1 INTEGER(5) UNSIGNED NOT NULL  ,
    ID_USERS2 INTEGER(5) UNSIGNED NOT NULL,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE IS_FRIEND_OF
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_IS_FRIEND_OF_USERS
    ON IS_FRIEND_OF (ID_USERS1 ASC);

CREATE  INDEX I_FK_IS_FRIEND_OF_USERS1
    ON IS_FRIEND_OF (ID_USERS2 ASC);

# -----------------------------------------------------------------------------
#       TABLE : SHARE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS SHARE
(
    ID INTEGER(5) UNSIGNED NOT NULL AUTO_INCREMENT,
    ID_USERS INTEGER(5) UNSIGNED NOT NULL  ,
    ID_POST INTEGER(4) UNSIGNED NOT NULL,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE SHARE
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_SHARE_USERS
    ON SHARE (ID_USERS ASC);

CREATE  INDEX I_FK_SHARE_POST
    ON SHARE (ID_POST ASC);

# -----------------------------------------------------------------------------
#       TABLE : CONTENT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CONTENT
(
    ID INTEGER(5) UNSIGNED NOT NULL AUTO_INCREMENT  ,
    ID_PICTURE INTEGER(5) UNSIGNED NOT NULL  ,
    ID_POST INTEGER(4) UNSIGNED NOT NULL,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE CONTENT
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_CONTENT_PICTURE
    ON CONTENT (ID_PICTURE ASC);

CREATE  INDEX I_FK_CONTENT_POST
    ON CONTENT (ID_POST ASC);

# -----------------------------------------------------------------------------
#       TABLE : COMMENT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS COMMENT
(
    ID INTEGER(5) UNSIGNED NOT NULL AUTO_INCREMENT  ,
    ID_POST INTEGER(4) UNSIGNED NOT NULL  ,
    ID_USERS INTEGER(5) UNSIGNED NOT NULL  ,
    TEXT TEXT NOT NULL  ,
    I_LIKE BOOL NULL,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL
    , PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE COMMENT
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_COMMENT_POST
    ON COMMENT (ID_POST ASC);

CREATE  INDEX I_FK_COMMENT_USERS
    ON COMMENT (ID_USERS ASC);

# -----------------------------------------------------------------------------
#       TABLE : POSSESS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS POSSESS
(
    ID INTEGER(5) UNSIGNED NOT NULL AUTO_INCREMENT  ,
    ID_ALBUM INTEGER(4) UNSIGNED NOT NULL  ,
    ID_POST INTEGER(4) UNSIGNED  NOT NULL,
    CREATEDAT DATETIME NULL  ,
    UPDATEDAT DATETIME NULL,
    PRIMARY KEY (ID)
    )
    engine = innodb;

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE POSSESS
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_POSSESS_ALBUM
    ON POSSESS (ID_ALBUM ASC);

CREATE  INDEX I_FK_POSSESS_POST
    ON POSSESS (ID_POST ASC);


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE ALBUMS
    ADD FOREIGN KEY FK_ALBUM_VISIBILTY (ID_VISIBILITY)
    REFERENCES VISIBILTIES (ID) ;


ALTER TABLE ALBUMS
    ADD FOREIGN KEY FK_ALBUM_USERS (ID_USER)
    REFERENCES USERS (ID) ;


ALTER TABLE POST
    ADD FOREIGN KEY FK_POST_PICTURE (ID_PICTURE )
    REFERENCES PICTURES (ID) ;


ALTER TABLE POST
    ADD FOREIGN KEY FK_POST_VISIBILTY (ID_VISIBILITY )
    REFERENCES VISIBILTIES (ID) ;


ALTER TABLE USERS
    ADD FOREIGN KEY FK_USERS_PICTURE (ID_PICTURE )
    REFERENCES PICTURES (ID) ;


ALTER TABLE WORK_ON
    ADD FOREIGN KEY FK_WORK_ON_USERS (ID_USERS)
    REFERENCES USERS (ID) ;


ALTER TABLE WORK_ON
    ADD FOREIGN KEY FK_WORK_ON_ALBUM (ID_ALBUM)
    REFERENCES ALBUMS (ID) ;


ALTER TABLE IS_FRIEND_OF
    ADD FOREIGN KEY FK_IS_FRIEND_OF_USERS (ID_USERS1)
    REFERENCES USERS (ID) ;


ALTER TABLE IS_FRIEND_OF
    ADD FOREIGN KEY FK_IS_FRIEND_OF_USERS1 (ID_USERS2)
    REFERENCES USERS (ID) ;


ALTER TABLE SHARE
    ADD FOREIGN KEY FK_SHARE_USERS (ID_USERS)
    REFERENCES USERS (ID) ;


ALTER TABLE SHARE
    ADD FOREIGN KEY FK_SHARE_POST (ID_POST)
    REFERENCES POST (ID) ;


ALTER TABLE CONTENT
    ADD FOREIGN KEY FK_CONTENT_PICTURE (ID_PICTURE)
    REFERENCES PICTURES (ID) ;


ALTER TABLE CONTENT
    ADD FOREIGN KEY FK_CONTENT_POST (ID_POST)
    REFERENCES POST (ID) ;


ALTER TABLE COMMENT
    ADD FOREIGN KEY FK_COMMENT_POST (ID_POST)
    REFERENCES POST (ID) ;


ALTER TABLE COMMENT
    ADD FOREIGN KEY FK_COMMENT_USERS (ID_USERS)
    REFERENCES USERS (ID) ;


ALTER TABLE POSSESS
    ADD FOREIGN KEY FK_POSSESS_ALBUM (ID_ALBUM)
    REFERENCES ALBUMS (ID) ;


ALTER TABLE POSSESS
    ADD FOREIGN KEY FK_POSSESS_POST (ID_POST)
    REFERENCES POST (ID) ;


show tables ;

desc users;
desc VISIBILTIES;
desc ALBUMS;


-- ALTER TABLE ALBUMS CHANGE DESCRIPTION DESCRIPTION TEXT NULL;