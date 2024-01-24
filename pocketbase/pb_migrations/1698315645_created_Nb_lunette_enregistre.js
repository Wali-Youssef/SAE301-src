/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gvrd1ehddh52lj1",
    "created": "2023-10-26 10:20:45.210Z",
    "updated": "2023-10-26 10:20:45.210Z",
    "name": "Nb_lunette_enregistre",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qeoe0uuw",
        "name": "user",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mwxik0gi",
        "name": "couleur_branche",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "o9atmphi",
        "name": "couleur_cadre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0cypczcx",
        "name": "couleur_verre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as user,lunette.couleur_branche as couleur_branche,lunette.couleur_cadre, lunette.couleur_verre\nFROM lunette, users\nWHERE lunette.enregistre = TRUE"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gvrd1ehddh52lj1");

  return dao.deleteCollection(collection);
})
