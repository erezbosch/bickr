# Database Schema

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
uploader_id | integer   | not null, foreign key (references users)
album_id    | integer   | foreign key (references albums)
title       | string    | not null
caption     | string    | 
image       | string    | not null
recommended | boolean   | 

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
creator_id  | integer   | not null, foreign key (references users)
title       | string    | not null
description | string    |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos)
tag_id      | integer   | not null, foreign key (references tags)

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followee_id | integer   | not null, foreign key (references users)
follower_id | integer   | not null, foreign key (references users)

