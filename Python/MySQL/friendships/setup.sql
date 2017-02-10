USE friendships;

SELECT * FROM users;
SELECT * FROM friendships;

INSERT INTO users (id, first_name, last_name, created_at, updated_at) VALUES (1, "Chris", "Baker", NOW(), NOW());
INSERT INTO users (id, first_name, last_name, created_at, updated_at) VALUES (2, "Diana", "Smith", NOW(), NOW());
INSERT INTO users (id, first_name, last_name, created_at, updated_at) VALUES (3, "James", "Johnson", NOW(), NOW());
INSERT INTO users (id, first_name, last_name, created_at, updated_at) VALUES (4, "Jessica", "Davidson", NOW(), NOW());

INSERT INTO friendships (id, user_id, friend_id, created_at, updated_at) VALUES (1, 1, 4, NOW(), NOW());
INSERT INTO friendships (id, user_id, friend_id, created_at, updated_at) VALUES (2, 1, 3, NOW(), NOW());
INSERT INTO friendships (id, user_id, friend_id, created_at, updated_at) VALUES (3, 1, 2, NOW(), NOW());
INSERT INTO friendships (id, user_id, friend_id, created_at, updated_at) VALUES (4, 4, 1, NOW(), NOW());
INSERT INTO friendships (id, user_id, friend_id, created_at, updated_at) VALUES (5, 3, 1, NOW(), NOW());
INSERT INTO friendships (id, user_id, friend_id, created_at, updated_at) VALUES (6, 2, 1, NOW(), NOW());

-- Check work by moving the friendships order around to make sure the "ORDER BY" function is working --
SELECT users.first_name, users.last_name, users2.first_name as friend_first_name, users2.last_name as friend_last_name
FROM users
LEFT JOIN friendships
ON users.id = friendships.user_id
LEFT JOIN users as users2
ON users2.id = friendships.friend_id
ORDER BY users.first_name, users2.last_name;
