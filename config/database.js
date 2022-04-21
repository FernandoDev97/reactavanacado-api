module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5433),
        database: env('DATABASE_NAME', 'reactstrapi'),
        username: env('DATABASE_USERNAME', 'reactstrapi'),
        password: env('DATABASE_PASSWORD', 'kirius8851'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
