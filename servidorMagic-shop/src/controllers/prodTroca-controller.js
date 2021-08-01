const prodTroca = require("../models/prodTroca-model");
const ProdTrocaService = require("../services/prodTroca-services");
var prodTrocaService = new ProdTrocaService();

exports.get = async (req, res) => {
    res.json(await prodTrocaService.getAll());
  };

exports.post = async (req, res) => {
    res.json(await prodTrocaService.add(new prodTroca(req.body.nome, req.body.tipo, req.body.descricao, req.body.preco)));
};

exports.getById = async (req, res) => {
  res.json(await prodTrocaService.getById(req.params.id));
};

exports.getByName = async (req, res) => {
  res.json(await prodTrocaService.getByName(req.query.nome));
};
 
exports.put = async (req, res) => {
  res.json(
    await prodTrocaService.update(
      req.params.id,
      new prodTroca(req.body.nome, req.body.tipo, req.body.descricao, req.body.preco)
    )
  );
};
 
exports.delete = (req, res) => {
  res.json(prodTrocaService.delete(req.params.id));
};