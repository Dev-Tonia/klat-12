-- create enum type for subscription type
create type if not exists public.subscription_type as enum ('wait-list', 'newsletter');

-- create subscriptions table
create table if not exists public.subscriptions (
  id bigint generated always as identity primary key,
  full_name text,
  phone_number text,
  email text not null,
  type public.subscription_type not null,
  created_at timestamptz default now()
);
-- E2EgpjMhH7aZlFl7