Package.describe({
  name: 'josephktcheung:drawer',
  summary: 'Wraps Drawer jQuery plugin into a meteor package.',
  version: '2.4.1',
  git: 'https://github.com/josephktcheung/drawer.git'
});

Package.onUse(function(api) {
  api.addFiles([
    'drawer/dist/css/drawer.min.css',
    'iscroll/iscroll-lite.min.js',
    'drawer/dist/js/jquery.drawer.min.js'
    ], ['client']);
});