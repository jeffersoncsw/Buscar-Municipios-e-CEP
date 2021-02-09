const fetch = require('node-fetch')

module.exports = async function municipios(uf) {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    const dados = await response.json()

    return dados
}