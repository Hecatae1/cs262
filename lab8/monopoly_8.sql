

-- 1. Retrieve a list of all the games, ordered by date with the most recent game coming first.
SELECT *
FROM Game
ORDER BY startTime DESC;

-- 2. Retrieve all the games that occurred in the past week.
-- Assumes current date is the time of query execution.
SELECT *
FROM Game
WHERE startTime >= CURRENT_DATE - INTERVAL '7 days';

-- 3. Retrieve a list of players who have (non-NULL) names.
SELECT *
FROM Player
WHERE name IS NOT NULL;

-- 4. Retrieve a list of IDs for players who have some game score larger than 2000.
SELECT DISTINCT playerID
FROM PlayerGame
WHERE score > 2000;

-- 5. Retrieve a list of players who have GMail accounts.
-- Case-insensitive match for 'gmail' in emailAddress.
SELECT *
FROM Player
WHERE emailAddress LIKE '%gmail%';



-- 1. Retrieve all “The King”’s game scores in decreasing order.
SELECT pg.score, pg.gameID
FROM PlayerGame pg
JOIN Player p ON pg.playerID = p.ID
WHERE p.name = 'The King'
ORDER BY pg.score DESC;

-- 2. Retrieve the name of the winner of the game played on 2006-06-28 13:20:00.
-- Assumes winner is the player with the highest score in that game.
SELECT p.name
FROM PlayerGame pg
JOIN Player p ON pg.playerID = p.ID
JOIN Game g ON pg.gameID = g.ID
WHERE g.startTime = '2006-06-28 13:20:00'
ORDER BY pg.score DESC
LIMIT 1;

-- 3. So what does that P1.ID < P2.ID clause do in the last example query?
-- It prevents duplicate pairings when joining a table to itself.
-- For example, without it, you'd get both (A,B) and (B,A) when comparing players.
-- With P1.ID < P2.ID, you only get one of those — the one where P1 comes before P2.

-- 4. A realistic situation for joining a table to itself:
-- Comparing players to find pairs who share the same email domain.
-- Here's an example query:
SELECT P1.name AS player1, P2.name AS player2, P1.emailAddress
FROM Player P1
JOIN Player P2 ON P1.ID < P2.ID
WHERE SPLIT_PART(P1.emailAddress, '@', 2) = SPLIT_PART(P2.emailAddress, '@', 2);