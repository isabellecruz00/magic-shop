const productRepo = require("../repositories/product-repo");

class AlbumService {
    constructor() {
      this.albuns = [];
      this.id = 0;
    }
   
    add(album) {
      return album-repo.save(album);
    }

    getAll() {
        return album-repo.findAll();
      }
   
      getById(id) {
        return album-repo.findOne(id);
      }
   
      getByName(nome) {
        return album-repo.findByName(nome);
      }
    
      update(id, album) {
        return album-repo.update(id, album);
      }
   
      delete(id) {
        return album-repo.delete(id);
      }
  }
   
  module.exports = AlbumService;