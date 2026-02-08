CREATE TABLE IF NOT EXISTS sessions (
  $->id,
  user_id TEXT NOT NULL,
  token TEXT NOT NULL,
  $->created_at,
  
  FOREIGN KEY(user_id) REFERENCES users(id)
);