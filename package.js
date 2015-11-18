Package.describe({
  name: "richsilv:leaflet-awesome-markers",
  version: "1.0.0",
  git: "https://github.com/richsilv/meteor-leaflet-awesome-markers",
  summary: "Leaflet Awesome Markers Plugin for Meteor"
});

Package.on_use(function (api, where) {
  api.addFiles('lib/leaflet.awesome-markers.js', 'client');
  api.addFiles('styles/leaflet.awesome-markers.css', 'client');
  api.addAssets('images/markers-matte.png', 'client');
  api.addAssets('images/markers-matte@2x.png', 'client');
  api.addAssets('images/markers-plain.png', 'client');
  api.addAssets('images/markers-shadow.png', 'client');
  api.addAssets('images/markers-shadow@2x.png', 'client');
  api.addAssets('images/markers-soft.png', 'client');
  api.addAssets('images/markers-soft@2x.png', 'client');
});
