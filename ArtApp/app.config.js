window.RealtorApp = $.extend(true, window.RealtorApp, {
  "config": {
    "navigationType": "navbar",
    "commandMapping": {
      "generic-header-toolbar": {
        "defaults": {
          "showIcon": "true",
          "showText": "false",
          "align": "right"
        },
        "commands": [
          "list",
          "map",
          "gallery"
        ]
      }
    },
    "navigation": [
      {
        "title": "Rechercher",
        "action": "#Home",
        "icon": "home"
      },
      {
        "title": "Favoris",
        "action": "#Favorites",
        "icon": "favorites"
      },
      {
        "title": "À Propos",
        "action": "#About",
        "icon": "info"
      }      
    ]
  }
});