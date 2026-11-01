"""Add transcription mode already used by the meeting model."""
from alembic import op
import sqlalchemy as sa
revision = '20261101_mode'
down_revision = '293138585702'
branch_labels = None
depends_on = None

def upgrade():
    op.add_column('meetings', sa.Column('transcription_mode', sa.String(20), nullable=True))

def downgrade():
    op.drop_column('meetings', 'transcription_mode')
