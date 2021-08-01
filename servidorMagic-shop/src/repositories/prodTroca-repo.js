const pool = require("../dbs/postgres");

exports.save = async (prodTroca) => {
    const result = await pool.query(
      "INSERT INTO ProdTroca(nome, tipo, descricao, preco) VALUES ($1,$2,$3,$4) RETURNING *;",
      [prodTroca.nome, prodTroca.tipo, prodTroca.descricao, prodTroca.preco]
    );
    return result.rows[0];
  };

exports.findAll = async () => {
 const result = await pool.query("SELECT * FROM ProdTroca;");
 return result.rows;
};

exports.findOne = async (id) => {
    const result = await pool.query("SELECT * FROM ProdTroca WHERE id=$1;", [id]);
    return result.rows[0];
  };

  exports.findByName = async (nome) => {
    const result = await pool.query("SELECT * FROM ProdTroca WHERE nome=$1;", [
      nome,
    ]);
    return result.rows;
  };

  exports.update = async (id, pc) => {
    const result = await pool.query(
      "UPDATE ProdTroca SET nome=$1, tipo=$2, descricao=$3 price=$4 WHERE id=$5 RETURNING *;",
      [prodTroca.nome, prodTroca.tipo, prodTroca.descricao, prodTroca.preco, id]
    );
    return result.rows[0];
  };

  exports.delete = async (id) => {
    await pool.query("DELETE FROM ProdTroca WHERE id=$1;", [id]);
  };