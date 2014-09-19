Package.describe({
  name: "richsilv:leaflet-awesome-markers",
  version: "1.0.0",
  git: "https://github.com/richsilv/meteor-leaflet-awesome-markers",
  summary: "Leaflet Awesome Markers Plugin for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files('lib/leaflet.awesome-markers.js', 'client');
  api.add_files('styles/leaflet.awesome-markers.css', 'client');
  api.add_files('images/markers-matte.png', 'client');
  api.add_files('images/markers-matte@2x.png', 'client');
  api.add_files('images/markers-plain.png', 'client');
  api.add_files('images/markers-shadow.png', 'client');
  api.add_files('images/markers-shadow@2x.png', 'client');
  api.add_files('images/markers-soft.png', 'client');
  api.add_files('images/markers-soft@2x.png', 'client');
});
