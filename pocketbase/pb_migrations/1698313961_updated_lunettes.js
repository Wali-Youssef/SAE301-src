/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fm3wt12be489p4d")

  collection.name = "lunette"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fm3wt12be489p4d")

  collection.name = "lunettes"

  return dao.saveCollection(collection)
})
