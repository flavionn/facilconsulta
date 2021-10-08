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
	return {
		listaFormasPagamento
	}
}