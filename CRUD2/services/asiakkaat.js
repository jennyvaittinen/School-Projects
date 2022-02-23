const db = require("./db");
const helper = require("../helper");
const config = require("../config");

//Hakee asiakkaat
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, nimi, osoite, taso 
    FROM asiakas LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

// Find a single Asiakas with an id
async function getOne(id) {
  const results = await db.query(
    `SELECT nimi, osoite, taso FROM asiakas WHERE id = ${id}`
  );

  return { result: results[0] || null };
}

//Luo asiakas
async function create(asiakas) {
  const result = await db.query(
    `INSERT INTO asiakas(nimi, osoite, taso)
      VALUES 
      ('${asiakas.nimi}', '${asiakas.osoite}', '${asiakas.taso}')`
  );

  let message = "Error in creating client";

  if (result.affectedRows) {
    message = "Client created successfully";
  }

  return { message };
}

const escapeValue = (value) => {
  switch (typeof value) {
    case "string":
      return `"${value.replace('"', '\\"')}"`;

    default:
      return value.toString();
  }
};

//Päivittää olemassaolevan asiakkaan
async function update(id, asiakas) {
  const result = await db.query(
    `UPDATE asiakas 
      SET ${Object.entries(asiakas)

        .filter(([key, value]) => value !== undefined)

        .map(([key, value]) => `${key} = ${escapeValue(value)}`)

        .join(", ")}
      WHERE id = ${id}`
  );

  let message = "Error in updating client";

  if (result.affectedRows) {
    message = "Client updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM asiakas WHERE id=${id}`);

  let message = "Error in deleting client";

  if (result.affectedRows) {
    message = "Client deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  getOne,
  create,
  update,
  remove,
};
