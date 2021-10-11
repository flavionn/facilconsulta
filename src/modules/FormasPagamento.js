const listaFormasPagamento = [
	{
		id: 'dinheiro',
		label: 'Em dinheiro',
	},
	{
		id: 'pix',
		label: 'Pix',
	},
	{
		id: 'credito',
		label: 'Cartão de crédito',
	},
]

export default function useFormasPagamento() {
	const formataFormaPagamento = (idForma) => {
		const resultado = listaFormasPagamento.find(dado => dado.id === idForma)
		return resultado.label
	}

	return {
		formataFormaPagamento,
		listaFormasPagamento
	}
}