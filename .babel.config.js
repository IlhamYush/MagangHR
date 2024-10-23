module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-react'],
    plugins: [
      'transform-class-properties',
      'transform-react-jsx',
      'transform-object-rest-spread',
      [
        'module-resolver',
        {
          root: ['./src'],
        },
      ],
      ['import-rename', { '^(.*)\\.jsx$': '$1' }],
      '@babel/plugin-proposal-private-property-in-object',
    ],
  };
};
