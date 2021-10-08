const listaEstados = [
	{ 
		uf: 'pr',
		nome: 'Paraná',
		cidades: [ 'Londrina', 'Maringá' ]
	},
	{ 
		uf: 'rs', 
		nome: 'Rio Grande do Sul',
		cidades: [ 'Pelotas', 'Porto Alegre' ]
	},
	{ 
		uf: 'sc', 
		nome: 'Santa Catarina',
		cidades: [ 'Florianópolis', 'Joinville' ]
	}
]

export default function useLocalizacao() {
	const pesquisaCidades = (uf) => {
		const resultado = listaEstados.find(dado => dado.uf === uf)
		return resultado.cidades
	}

	return {
		listaEstados,
		pesquisaCidades,
	}
}