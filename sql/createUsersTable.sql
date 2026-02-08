CREATE TABLE IF NOT EXISTS users (
  $->id,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  description TEXT DEFAULT 'There''s nothing here yet...',
  $->created_at
);