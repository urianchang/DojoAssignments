USE sakila;

-- 1. What query would you run to get all the customers inside city_id = 312? 
-- Your query should return customer first name, last name, email, and address.
SELECT customer.first_name, customer.last_name, customer.email, address.address, city.city, address.city_id 
FROM customer 
JOIN address ON customer.customer_id = address.address_id
JOIN city ON city.city_id = address.city_id
WHERE address.city_id = 312;

-- 2. What query would you run to get all comedy films? 
-- Your query should return film title, description, release year, rating, special features, and genre (category).


-- 3. What query would you run to get all the films joined by actor_id=5? 
-- Your query should return the film title, description, and release year.


-- 4. What query would you run to get all the customers in store_id = 1 
-- and inside these cities (1, 42, 312 and 459)? 
-- Your query should return customer first name, last name, email, and address.


-- 5. What query would you run to get all the films with a "rating = G" and "special feature = behind the scenes", 
-- joined by actor_id = 15? Your query should return the film title, description, release year, rating, and special feature. 
-- Hint: You may use LIKE function in getting the 'behind the scenes' part.



-- 6. What query would you run to get all the actors that joined in the film_id = 369? 
-- Your query should return the film_id, title, actor_id, and actor_name.



-- 7. What query would you run to get all drama films with a rental rate of 2.99? 
-- Your query should return film title, description, release year, rating, special features, and genre (category).



-- 8. What query would you run to get all the action films which are joined by SANDRA KILMER? 
-- Your query should return film title, description, release year, rating, special features, genre (category), 
-- and actor's first name and last name.

