const albumRepo = require("../repositories/album-repo");

class AlbumService {
    constructor() {
      this.albuns = [];
      this.id = 0;
    }
   
    add(album) {
      return albumRepo.save(album);
    }

    getAll() {
        return albumRepo.findAll();
      }
   
      getById(id) {
        return albumRepo.findOne(id);
      }
   
      getByName(nome) {
        return albumRepo.findByName(nome);
      }
    
      update(id, album) {
        return albumRepo.update(id, album);
      }
   
      delete(id) {
        return albumRepo.delete(id);
      }
  }
   
  module.exports = AlbumService;