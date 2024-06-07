function validarDadosHospedes({ nome, email, endereco, telefone }) {
  if (!nome || !email || !endereco || !nome || !telefone) {
    return false;
  }

  return true;
}

module.exports = validarDadosHospedes;
