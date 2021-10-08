<script setup>

import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import useValidacaoForm from '@/modules/ValidacaoForm'

let creditoIdentificado = ref()

let campo = reactive({
	especialidade: '',
	preco: '',
	forma: '',
	parcelamento: '',
})

const router = useRouter()
const store = useStore()

const { 
	validarEspecialidade,
	validarPreco,
	validarFormaPagamento,
	validarParcelamento,
	erros,
	} = useValidacaoForm()

const identificaCredito = (forma) => {
	creditoIdentificado.value = false
	Object.values(forma).includes('credito') ? creditoIdentificado.value = true : ''
}

const validaCampos = () => {
	validarEspecialidade('especialidade', campo.especialidade)
	validarPreco('preco', campo.preco)
	validarFormaPagamento('forma', campo.forma)
	creditoIdentificado.value ?	validarParcelamento('parcelamento', campo.parcelamento) : ''
}

const processaForm = async () => {
	validaCampos()

	if(!Object.values(erros).join('')) {
		await store.dispatch('salvarDadosAtendimento', campo)
		.then(() => router.push({ name: 'cadastro-revisao' }))
	}
}

onMounted(() => {
	if(store.state.form.atendimento.forma) {
		if(Object.values(store.state.form.atendimento.forma).includes('credito')) {
			creditoIdentificado.value = true
		}
	}
})

</script>

<template lang="pug">

form(@submit.prevent="processaForm")
	campo-especialidade(v-model="campo.especialidade")
	campo-preco(v-model="campo.preco")
	campo-forma(
		v-model="campo.forma"
		@forma="identificaCredito"
		)
	campo-parcelamento(
		v-if="creditoIdentificado"
		v-model="campo.parcelamento"
		)

	ui-barra-progresso(passo="2")
	ui-botao-cadastro(class="bg-blue-500 text-white") Próximo

</template>