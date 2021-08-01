const pcRepo = require("../repositories/pc-repo");

class PhotoCardsService {
    constructor() {
      this.pcs = [];
      this.id = 0;
    }
   
    add(pc) {
      return pcRepo.save(pc);
    }

    getAll() {
        return pcRepo.findAll();
      }
   
      getById(id) {
        return pcRepo.findOne(id);
      }
   
      getByName(membro) {
        return pcRepo.findByName(membro);
      }
    
      update(id, pc) {
        return pcRepo.update(id, pc);
      }
   
      delete(id) {
        return pcRepo.delete(id);
      }
  }
   
  module.exports = PhotoCardsService;