const PhotoCards = require("../models/pc-model");
const PhotoCardsService = require("../services/pc-services");
var pcService = new PhotoCardsService();

exports.get = async (req, res) => {
    res.json(await pcService.getAll());
  };

exports.post = async (req, res) => {
    res.json(await pcService.add(new PhotoCards(req.body.nome, req.body.tipo, req.body.membro, req.body.preco)));
};

exports.getById = async (req, res) => {
  res.json(await pcService.getById(req.params.id));
};

exports.getByName = async (req, res) => {
  res.json(await pcService.getByName(req.query.membro));
};
 
exports.put = async (req, res) => {
  res.json(
    await pcService.update(
      req.params.id,
      new PhotoCards(req.body.nome, req.body.tipo, req.body.membro, req.body.preco)
    )
  );
};
 
exports.delete = (req, res) => {
  res.json(pcService.delete(req.params.id));
};