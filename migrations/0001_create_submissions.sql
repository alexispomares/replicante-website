CREATE TABLE IF NOT EXISTS submissions (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  type       TEXT NOT NULL CHECK(type IN ('subscribe', 'contact')),
  email      TEXT NOT NULL,
  name       TEXT,
  agency     TEXT,
  message    TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_submissions_type ON submissions(type);
CREATE INDEX idx_submissions_created ON submissions(created_at DESC);
