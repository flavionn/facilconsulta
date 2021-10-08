import { computed } from 'vue'

export default function useBotaoEnviar(campo, erros) {
	const botaoDesabilitado = computed (() => {
		let desabilitado = true

		for(let item in campo) {
			if(!campo[item] || erros[item]) {
				desabilitado = true
				break
			}
			desabilitado = false
		}

		return desabilitado
	})

	return {
		botaoDesabilitado
	}
}