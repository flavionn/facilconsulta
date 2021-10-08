import { reactive } from 'vue'
import useValidacoes from '@/modules/Validacoes'

const erros = reactive({})
const { 
	checaVazio,
	checaArrayVazio,
	checaStringMinimo,
	checaStringMaximo,
	checaNumero,
	checaNumeroMinimo,
	checaNumeroMaximo,
	} = useValidacoes()

export default function useValidacaoForm() {

	const validarNome = (fieldName, fieldValue) => {
		erros[fieldName] = !fieldValue ? checaVazio(fieldName, fieldValue) : checaStringMinimo(fieldName, fieldValue, 3) || checaStringMaximo(fieldName, fieldValue, 48)
	}

	const validarCpf = (fieldName, fieldValue) => {
		erros[fieldName] = !fieldValue ? checaVazio(fieldName, fieldValue) : checaNumero(fieldName, fieldValue) || checaStringMinimo(fieldName, fieldValue, 11) || checaStringMaximo(fieldName, fieldValue, 11)
	}

	const validarCelular = (fieldName, fieldValue) => {
		erros[fieldName] = !fieldValue ? checaVazio(fieldName, fieldValue) : checaNumero(fieldName, fieldValue) || checaStringMinimo(fieldName, fieldValue, 11) || checaStringMaximo(fieldName, fieldValue, 11)
	}

	const validarEstado = (fieldName, fieldValue) => {
		erros[fieldName] = !fieldValue ? checaVazio(fieldName, fieldValue) : ''
	}

	const validarCidade = (fieldName, fieldValue) => {
		erros[fieldName] = !fieldValue ? checaVazio(fieldName, fieldValue) : ''
	}

	const validarEspecialidade = (fieldName, fieldValue) => {
		erros[fieldName] = !fieldValue ? checaVazio(fieldName, fieldValue) : ''
	}

	const validarPreco = (fieldName, fieldValue) => {
		erros[fieldName] = !fieldValue ? checaVazio(fieldName, fieldValue) : checaNumero(fieldName, fieldValue) || checaNumeroMinimo(fieldName, fieldValue, 30) || checaNumeroMaximo(fieldName, fieldValue, 350)
	}

	const validarFormaPagamento = (fieldName, fieldValue) => {
		erros[fieldName] = fieldValue.length === 0 ? checaArrayVazio(fieldName, fieldValue) : ''
	}

	const validarParcelamento = (fieldName, fieldValue) => {
		erros[fieldName] = !fieldValue ? checaVazio(fieldName, fieldValue) : ''
	}

	return { 
		erros, 
		validarNome,
		validarCpf,
		validarCelular,
		validarEstado,
		validarCidade,
		validarEspecialidade,
		validarPreco,
		validarFormaPagamento,
		validarParcelamento
	}
}