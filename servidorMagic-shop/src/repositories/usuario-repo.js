const pool = require("../dbs/postgres");

exports.save = async (usuario) => {
    const result = await pool.query(
      "INSERT INTO Usuario(nome, cpf, endereco, cidade, estado, pais, email, nome_usuario, senha) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;",
      [usuario.nome, usuario.cpf, usuario.endereco, usuario.cidade, usuario.estado, usuario.pais, usuario.email, usuario.nome_usuario, usuario.senha]
    );
    return result.rows[0];
  };

exports.findAll = async () => {
 const result = await pool.query("SELECT * FROM Usuario;");
 return result.rows;
};

exports.findOne = async (id) => {
    const result = await pool.query("SELECT * FROM Usuario WHERE id=$1;", [id]);
    return result.rows[0];
  };

  exports.findByName = async (nome) => {
    const result = await pool.query("SELECT * FROM Usuario WHERE name=$1;", [
      nome,
    ]);
    return result.rows;
  };

  exports.update = async (id, usuario) => {
    const result = await pool.query(
      "UPDATE Usuario SET nome=$1, cpf=$2, endereco=$3, cidade=$4, estado=$5, pais=$6, email=$7, nome_usuario=$8, senha=$9 WHERE id=$10 RETURNING *;",
      [usuario.nome, usuario.cpf, usuario.endereco, usuario.cidade, usuario.estado, usuario.pais, usuario.email, usuario.nome_usuario, usuario.senha, id]
    );
    return result.rows[0];
  };

  exports.delete = async (id) => {
    await pool.query("DELETE FROM Usuario WHERE id=$1;", [id]);
  };