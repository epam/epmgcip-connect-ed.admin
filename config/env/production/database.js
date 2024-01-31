module.exports = ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        schema: env('DATABASE_SCHEMA'), // Not mandatory, picks up public by default
      },
      debug: true,
    },
  }
};
