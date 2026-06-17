create table card_sales (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  card_company text,
  payment_amount bigint,
  fee bigint,
  deposit_amount bigint,
  deposit_wait_days int
);