-- SILVEROAK MARKETING HUB SCHEMA DRAFT — REVIEW BEFORE APPLYING.
-- Not executed; adapt table names to existing shared core after schema audit.
-- Assumes organizations(id uuid) already exists. Never duplicate it.
CREATE TABLE IF NOT EXISTS marketing_integrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  provider text NOT NULL,
  state text NOT NULL DEFAULT 'NOT_CONNECTED'
    CHECK (state IN ('NOT_CONNECTED','PENDING','CONNECTED','ERROR','REVOKED')),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id, provider),
  UNIQUE (organization_id, id)
);
CREATE INDEX IF NOT EXISTS marketing_integrations_tenant ON marketing_integrations(organization_id);
CREATE TABLE IF NOT EXISTS marketing_sync_jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL,
  integration_id uuid NOT NULL,
  state text NOT NULL DEFAULT 'QUEUED'
    CHECK (state IN ('QUEUED','RUNNING','SUCCEEDED','FAILED')),
  started_at timestamptz,
  completed_at timestamptz,
  error_code text,
  created_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (organization_id, integration_id)
    REFERENCES marketing_integrations(organization_id, id)
);
CREATE INDEX IF NOT EXISTS marketing_sync_jobs_tenant_time
  ON marketing_sync_jobs(organization_id, created_at DESC);
CREATE TABLE IF NOT EXISTS marketing_campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  name text NOT NULL,
  status text NOT NULL DEFAULT 'DRAFT'
    CHECK (status IN ('DRAFT','REVIEW','APPROVED','ACTIVE','PAUSED','ARCHIVED')),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id, id)
);
CREATE TABLE IF NOT EXISTS marketing_campaign_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL,
  campaign_id uuid NOT NULL,
  metric_date date NOT NULL,
  impressions bigint NOT NULL DEFAULT 0 CHECK (impressions >= 0),
  clicks bigint NOT NULL DEFAULT 0 CHECK (clicks >= 0),
  spend_minor bigint NOT NULL DEFAULT 0 CHECK (spend_minor >= 0),
  currency char(3) NOT NULL DEFAULT 'CAD',
  FOREIGN KEY (organization_id, campaign_id)
    REFERENCES marketing_campaigns(organization_id, id),
  UNIQUE (organization_id, campaign_id, metric_date)
);
-- Credential blobs intentionally omitted: choose audited encryption/KMS storage.
-- Migration runner must be explicit, staged and reversible. Additional tenant
-- RLS and authenticated role policies required before any production usage.
