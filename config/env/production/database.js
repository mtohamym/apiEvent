module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          uri: env('mongodb+srv://tohamymedo11:<01002693515++++++2m>@cluster0.8b9se.mongodb.net/<tohamymedo11>?retryWrites=true&w=majority'),
        },
        options: {
          ssl: true,
        },
      },
    },
  });
