const pool = require("../dbs/postgres");

exports.save = async (pc) => {
    const result = await pool.query(
      "INSERT INTO PhotoCards(nome, tipo, membro, preco) VALUES ($1,$2,$3,$4) RETURNING *;",
      [pc.nome, pc.tipo, pc.membro, pc.preco]
    );
    return result.rows[0];
  };

exports.findAll = async () => {
 const result = await pool.query("SELECT * FROM PhotoCards;");
 return result.rows;
};

exports.findOne = async (id) => {
    const result = await pool.query("SELECT * FROM PhotoCards WHERE id=$1;", [id]);
    return result.rows[0];
  };

  exports.findByName = async (membro) => {
    const result = await pool.query("SELECT * FROM PhotoCards WHERE membro=$1;", [
      membro,
    ]);
    return result.rows;
  };

  exports.update = async (id, pc) => {
    const result = await pool.query(
      "UPDATE PhotoCards SET nome=$1, tipo=$2, membro=$3 price=$4 WHERE id=$5 RETURNING *;",
      [pc.nome, pc.tipo, pc.membro, pc.preco, id]
    );
    return result.rows[0];
  };

  exports.delete = async (id) => {
    await pool.query("DELETE FROM PhotoCards WHERE id=$1;", [id]);
  };