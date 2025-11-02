

CREATE TABLE Game (
  ID integer PRIMARY KEY,
  startTime timestamp NOT NULL,
  endTime timestamp NULL,
  status varchar(20) NOT NULL  -- e.g., 'in_progress', 'finished'
);

CREATE TABLE Player (
  ID integer PRIMARY KEY,
  emailAddress varchar(50) NOT NULL,
  name varchar(50) NOT NULL
);

CREATE TABLE BoardPosition (
  ID integer PRIMARY KEY,
  name varchar(50) NOT NULL,
  spaceIndex integer NOT NULL,    -- e.g., 0 to 39
  type varchar(50) NOT NULL       -- e.g., 'property', 'chance', 'go', 'jail', etc
);

CREATE TABLE Property (
  ID integer PRIMARY KEY,
  bpID integer NOT NULL REFERENCES BoardPosition(ID),
  name varchar(255) NOT NULL,
  colorGroup varchar(50),
  purchasePrice integer,
  rentBase integer,
  houseCost integer,
  hotelCost integer
);

CREATE TABLE PlayerGame (
  gameID integer NOT NULL REFERENCES Game(ID),
  playerID integer NOT NULL REFERENCES Player(ID),
  score integer,
  cash integer NOT NULL,
  currentPositionID integer NOT NULL REFERENCES BoardPosition(ID),
  inJail boolean DEFAULT false,
  turnsInJail integer DEFAULT 0,
  PRIMARY KEY (gameID, playerID)
);

CREATE TABLE PlayerProperty (
  gameID integer NOT NULL REFERENCES Game(ID),
  playerID integer NOT NULL REFERENCES Player(ID),
  propertyID integer NOT NULL REFERENCES Property(ID),
  houses integer DEFAULT 0,
  hotels integer DEFAULT 0,
  mortgaged boolean DEFAULT false,
  PRIMARY KEY (gameID, playerID, propertyID)
);

CREATE TABLE PlayerMove (
  ID serial PRIMARY KEY,
  gameID integer NOT NULL REFERENCES Game(ID),
  playerID integer NOT NULL REFERENCES Player(ID),
  moveNum integer NOT NULL,
  fromPositionID integer NOT NULL REFERENCES BoardPosition(ID),
  toPositionID integer NOT NULL REFERENCES BoardPosition(ID),
  moveTime timestamp NOT NULL
);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON BoardPosition TO PUBLIC;
GRANT SELECT ON PlayerMove TO PUBLIC;
GRANT SELECT ON PlayerProperty TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;


-- Add sample data
INSERT INTO Game (ID, startTime, endTime, status) VALUES
  (1, '2006-06-27 08:00:00', NULL, 'in_progress'),
  (2, '2006-06-28 13:20:00', '2006-06-28 17:45:00', 'finished'),
  (3, '2006-06-29 18:41:00', '2006-06-29 22:10:00', 'finished');

INSERT INTO Player (ID, emailAddress, name) VALUES
  (1, 'me@calvin.edu', 'PlayerOne'),
  (2, 'king@gmail.edu', 'The King'),
  (3, 'dog@gmail.edu', 'Dogbreath');


INSERT INTO BoardPosition (ID, name, spaceIndex, type) VALUES
  (1, 'GO',               0,  'go'),
  (2, 'Mediterranean Ave', 1,  'property'),
  (3, 'Community Chest',   2,  'community_chest'),
  (4, 'Baltic Ave',        3,  'property'),
  (5, 'Income Tax',        4,  'tax');


INSERT INTO Property (ID, bpID, name, colorGroup, purchasePrice, rentBase, houseCost, hotelCost) VALUES
  (1, 2, 'Mediterranean Ave', 'Brown', 60, 2, 50, 50),
  (2, 4, 'Baltic Ave',        'Brown', 60, 4, 50, 50);


INSERT INTO PlayerGame (gameID, playerID, score, cash, currentPositionID, inJail, turnsInJail) VALUES
  (1, 1, 0,    1500, 1, false, 0),
  (1, 2, 0,    1500, 2, false, 0),
  (1, 3, 2350, 1200, 5, false, 0),
  (2, 1, 1000, 800,  4, false, 0),
  (2, 2, 0,    600,  2, false, 0),
  (2, 3, 500,  400,  1, false, 0),
  (3, 2, 0,    1500, 3, true,  1),
  (3, 3, 5500, 2200, 2, false, 0);

INSERT INTO PlayerProperty (gameID, playerID, propertyID, houses, hotels, mortgaged) VALUES
  (1, 3, 1, 0, 0, false),
  (1, 3, 2, 1, 0, false),
  (2, 1, 2, 0, 0, false),
  (3, 3, 1, 2, 1, false);


INSERT INTO PlayerMove (gameID, playerID, moveNum, fromPositionID, toPositionID, moveTime) VALUES
  (1, 1, 1, 1, 2, '2006-06-27 08:05:00'),
  (1, 1, 2, 2, 3, '2006-06-27 08:15:00'),
  (1, 3, 1, 1, 5, '2006-06-27 08:10:00'),
  (3, 2, 1, 3, 1, '2006-06-29 18:45:00');
