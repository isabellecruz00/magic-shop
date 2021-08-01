const Usuario = require("../models/usuario-model");
const UsuarioService = require("../services/usuario-services");
var usuarioService = new UsuarioService();

exports.get = async (req, res) => {
    res.json(await usuarioService.getAll());
  };

exports.post = async (req, res) => {
    res.json(await usuarioService.add(new Usuario(req.body.nome, req.body.cpf, req.body.endereco, req.body.cidade, req.body.estado, req.body.pais, req.body.email, req.body.nome_usuario, req.body.senha)));
};

exports.getById = async (req, res) => {
  res.json(await usuarioService.getById(req.params.id));
};

exports.getByName = async (req, res) => {
  res.json(await usuarioService.getByName(req.query.nome));
};
 
exports.put = async (req, res) => {
  res.json(
    await usuarioService.update(
      req.params.id,
      new Usuario(req.body.nome, req.body.cpf, req.body.endereco, req.body.cidade, req.body.estado, req.body.pais, req.body.email, req.body.nome_usuario, req.body.senha)
    )
  );
};
 
exports.delete = (req, res) => {
  res.json(usuarioService.delete(req.params.id));
};