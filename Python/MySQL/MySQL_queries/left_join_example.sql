USE twitter;

-- What query would you run to get all tweets from the user id of 1?
SELECT * FROM users LEFT JOIN tweets ON users.id = tweets.user_id WHERE users.id = 1;
-- You can just grab the tweets by:
SELECT tweets.tweet FROM users LEFT JOIN tweets ON users.id = tweets.user_id WHERE users.id = 1;
-- Rename the output column that you want as kobe_tweets by modifying the statement to look like the following:
SELECT tweets.tweet AS kobe_tweets FROM users LEFT JOIN tweets ON users.id = tweets.user_id WHERE users.id = 1;

-- What query would return all the tweets that the user with id 2 has tagged as favorites?
SELECT first_name, tweet FROM users LEFT JOIN faves ON users.id = faves.user_id LEFT JOIN tweets ON faves.tweet_id = tweets.id WHERE users.id = 2;

-- What query would you run to get all the tweets that user with id 2, or user with id1, has tagged as favorites?
SELECT first_name, tweet
FROM users
LEFT JOIN faves
ON users.id = faves.user_id
LEFT JOIN tweets
ON faves.tweet_id = tweets.id
WHERE users.id = 1 OR users.id = 2;

-- What query would you run to get all the users that are following the user with id 1?
-- Self-join: dealing with a many to many relationship but using the same table twice. 
-- The key word to remember is the word "AS" because it lets us join the same table twice by providing SQL with another variable to reference the table that is getting joined again. 
SELECT users.first_name as followed, users2.first_name as follower
FROM users
LEFT JOIN follows
ON users.id = follows.followed_id
LEFT JOIN users as users2
ON users2.id = follows.follower_id
WHERE users.id = 1;

-- What query would you run to get all users that are not following the user with id of 2?
-- This requires nested queries.
SELECT *
FROM users
WHERE users.id NOT IN (
SELECT follower_id
FROM follows
WHERE followed_id = 2
) AND users.id != 2;

-- Show follower count for specific user
SELECT users.first_name as user, COUNT(users2.first_name) as follower_count
FROM users
LEFT JOIN follows
ON users.id = follows.followed_id
LEFT JOIN users as users2
ON users2.id = follows.follower_id
WHERE users.id = 1
GROUP BY users.id;

-- Left Join vs Join
-- This command results in Rajon having "Null" tweet because a record in one table has no matching record in the joining table.
SELECT first_name, tweet
FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id;
-- This command omits Rajon from the table. 
SELECT first_name, tweet
FROM users
JOIN tweets
ON users.id = tweets.user_id;