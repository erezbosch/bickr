# Database Schema

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
uploader_id | integer   | not null, foreign key (references users)
title       | string    | not null
caption     | string    |
image_url   | string    | not null
public_id   | string    | not null
album_id    | integer   | foreign key (references albums)

## albums
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
creator_id     | integer   | not null, foreign key (references users)
title          | string    | not null
description    | string    |
cover_photo_id | integer   | foreign key (references photos)

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
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
taggable_id   | integer   | not null, foreign key (references photos/albums)
taggable_type | string    | not null (is "Photo"/"Album")
tag_id        | integer   | not null, foreign key (references tags)

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followee_id | integer   | not null, foreign key (references users)
follower_id | integer   | not null, foreign key (references users)
