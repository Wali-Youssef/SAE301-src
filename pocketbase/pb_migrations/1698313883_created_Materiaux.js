/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dyzte4xxsyyk3nk",
    "created": "2023-10-26 09:51:23.818Z",
    "updated": "2023-10-26 09:51:23.818Z",
    "name": "Materiaux",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ravchtvr",
        "name": "libelle",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dyzte4xxsyyk3nk");

  return dao.deleteCollection(collection);
})
