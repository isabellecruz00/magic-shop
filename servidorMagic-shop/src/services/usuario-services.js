const usuarioRepo = require("../repositories/usuario-repo");

class UsuarioService {
    constructor() {
      this.usuarios = [];
      this.id = 0;
    }
   
    add(usuario) {
      return usuarioRepo.save(usuario);
    }

    getAll() {
        return usuarioRepo.findAll();
      }
   
      getById(id) {
        return usuarioRepo.findOne(id);
      }
   
      getByName(nome) {
        return usuarioRepo.findByName(nome);
      }
    
      update(id, usuario) {
        return usuarioRepo.update(id, usuario);
      }
   
      delete(id) {
        return usuarioRepo.delete(id);
      }
  }
   
  module.exports = UsuarioService;