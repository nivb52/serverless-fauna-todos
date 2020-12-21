const React = require('react');
const { ThemeProvider } = require('theme-ui');
const { deep } = require('@theme-ui/presets');

const fix_deep = {
  ...deep,
  size: { container: 1024 },
};

module.exports = ({ element }) => (
  <ThemeProvider theme={fix_deep}>{element}</ThemeProvider>
);
