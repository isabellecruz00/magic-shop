const pool = require("../dbs/postgres");

exports.save = async (album) => {
    const result = await pool.query(
      "INSERT INTO Album(nome, descricao, preco) VALUES ($1,$2,$3) RETURNING *;",
      [album.name, album.descricao, album.price]
    );
    return result.rows[0];
  };

exports.findAll = async () => {
 const result = await pool.query("SELECT * FROM Album;");
 return result.rows;
};

exports.findOne = async (id) => {
    const result = await pool.query("SELECT * FROM Album WHERE id=$1;", [id]);
    return result.rows[0];
  };

  exports.findByName = async (nome) => {
    const result = await pool.query("SELECT * FROM Album WHERE name=$1;", [
      nome,
    ]);
    return result.rows;
  };

  exports.update = async (id, album) => {
    const result = await pool.query(
      "UPDATE Album SET nome=$1, descricao=$2, price=$3 WHERE id=$4 RETURNING *;",
      [album.nome, album.descricao, album.preco, id]
    );
    return result.rows[0];
  };

  exports.delete = async (id) => {
    await pool.query("DELETE FROM Album WHERE id=$1;", [id]);
  };