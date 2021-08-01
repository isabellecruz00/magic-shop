const Album = require("../models/album-model");
const AlbumService = require("../services/album-services");
var albumService = new AlbumService();

exports.get = async (req, res) => {
    res.json(await albumService.getAll());
  };

exports.post = async (req, res) => {
    res.json(await albumService.add(new Album(req.body.nome, req.body.descricao, req.body.preco)));
};

exports.getById = async (req, res) => {
  res.json(await albumService.getById(req.params.id));
};

exports.getByName = async (req, res) => {
  res.json(await albumService.getByName(req.query.nome));
};
 
exports.put = async (req, res) => {
  res.json(
    await albumService.update(
      req.params.id,
      new Album(req.body.nome, req.body.descricao, req.body.preco)
    )
  );
};
 
exports.delete = (req, res) => {
  res.json(albumService.delete(req.params.id));
};