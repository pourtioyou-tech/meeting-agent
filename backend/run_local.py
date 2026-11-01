import asyncio
import sys
import uuid
import asyncpg
from asyncpg import serverversion
_original_version_parser = serverversion.split_server_version_string
serverversion.split_server_version_string = lambda value: _original_version_parser('17.0' if value == 'pglite' else value)
# Local PGlite shares a connection backend; give prepared statements unique names.
asyncpg.Connection._get_unique_id = lambda self, prefix: '__local_' + uuid.uuid4().hex
if '--init' in sys.argv:
    from alembic.config import Config
    from alembic import command
    config = Config()
    config.set_main_option('script_location', 'alembic')
    command.upgrade(config, 'head')
    print('Database initialized')
else:
    import uvicorn
    uvicorn.run('app.main:app', host='127.0.0.1', port=8787)

