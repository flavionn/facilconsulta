export default function useValidacoes() {
	const checaVazio = (fieldName, fieldValue) => {
		return !fieldValue ? fieldName + ' é obrigatório' : ''
	}

	const checaArrayVazio = (fieldName, fieldValue) => {
		return fieldValue.length === 0 ? fieldName + ' é obrigatório' : ''
	}

	const checaStringMinimo = (fieldName, fieldValue, min) => {
		return fieldValue.length < min ? fieldName + ' precisa ter pelo menos ' + min + ' caracteres ' : ''
	}

	const checaStringMaximo = (fieldName, fieldValue, max) => {
		return fieldValue.length > max ? fieldName + ' precisa ter no máximo ' + max + ' caracteres ' : ''
	}

	const checaNumero = (fieldName, fieldValue) => {
		let checaNumero = isNaN(fieldValue)
		return checaNumero ? fieldName + ' precisa ter apenas números' : ''
	}

	const checaNumeroMinimo = (fieldName, fieldValue, min) => {
		return fieldValue < min ? fieldName + ' o valor minimo é ' + min : ''
	}

	const checaNumeroMaximo = (fieldName, fieldValue, max) => {
		return fieldValue > max ? fieldName + ' o valor máximo é ' + max : ''
	}

	return {
		checaVazio,
		checaArrayVazio,
		checaStringMinimo,
		checaStringMaximo,
		checaNumero,
		checaNumeroMinimo,
		checaNumeroMaximo,
	}
}