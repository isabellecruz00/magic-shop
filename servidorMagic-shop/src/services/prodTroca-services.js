const prodTrocaRepo = require("../repositories/prodTroca-repo");

class ProdTrocaService {
    constructor() {
      this.prodsTroca = [];
      this.id = 0;
    }
   
    add(prodTroca) {
      return prodTrocaRepo.save(prodTroca);
    }

    getAll() {
        return prodTrocaRepo.findAll();
      }
   
      getById(id) {
        return prodTrocaRepo.findOne(id);
      }
   
      getByName(membro) {
        return prodTrocaRepo.findByName(membro);
      }
    
      update(id, prodTroca) {
        return prodTrocaRepo.update(id, prodTroca);
      }
   
      delete(id) {
        return prodTrocaRepo.delete(id);
      }
  }
   
  module.exports = ProdTrocaService;