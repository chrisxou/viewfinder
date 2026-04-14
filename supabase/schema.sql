-- Run this in your Supabase SQL Editor to set up the photos table.

create table photos (
  id uuid default gen_random_uuid() primary key,
  url text not null,
  alt text not null default '',
  title text,
  "order" integer not null default 0,
  published boolean not null default true,
  created_at timestamp with time zone default timezone('utc', now()) not null
);

-- Enable Row Level Security
alter table photos enable row level security;

-- Allow public read access to published photos
create policy "Published photos are viewable by everyone"
  on photos for select
  using (published = true);

-- Storage: create a bucket called "photos" and set it to public in the Supabase dashboard.
-- Upload your images there and paste the public URLs into the photos table.
