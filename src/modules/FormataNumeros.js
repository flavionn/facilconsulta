export default function useFormataNumeros() {
	const formataCelular = (valor) => {
		var match = valor.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/)
		return '(' + match[1] + ') ' + match[2] + match[3] + '-' + match[4]
	}

	const formataCpf = (valor) => {
		var match = valor.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/)
		return match[1] + '.' + match[2] + '.' + match[3] + '-' + match[4]
	}

	return {
		formataCelular,
		formataCpf,
	}
}