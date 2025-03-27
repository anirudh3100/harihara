-- Create the brochure_downloads table
create table if not exists brochure_downloads (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  project_name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table brochure_downloads enable row level security;

-- Create policy to allow anonymous users to insert data
create policy "Allow anonymous users to insert data"
  on brochure_downloads for insert
  to anon
  with check (true);

-- Create policy to allow authenticated users to view all data
create policy "Allow authenticated users to view all data"
  on brochure_downloads for select
  to authenticated
  using (true);

-- Create an index on created_at for better query performance
create index brochure_downloads_created_at_idx on brochure_downloads(created_at); 