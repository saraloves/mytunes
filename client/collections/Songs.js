// Songs.js - Defines a backbone collection class for songs.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.Songs = Backbone.Collection.extend({

  model: MyTunes.Models.SongModel
});


