<script setup>

import { ref } from 'vue'
import useValidacaoForm from '@/modules/ValidacaoForm'
import useLocalizacao from '@/modules/Localizacao'

let inputEstado = ref('')
let inputCidade = ref('')
let cidades = ref('')

const { validarEstado, validarCidade, erros } = useValidacaoForm()
const { listaEstados, popularCidades } = useLocalizacao()

const validarInputEstado = () => {
	cidades.value = ''
	inputCidade.value = ''

	if(inputEstado.value.length) {
		cidades.value = popularCidades(inputEstado.value)
	}
	validarEstado('estado', inputEstado.value)
}

const validarInputCidade = () => {
	validarCidade('cidade', inputCidade.value)
}

</script>

<template lang="pug">

div(class="flex space-x-4")

	p
		label(for="estado") Estado
		select(
			id="estado"
			v-model="inputEstado"
			@change="validarInputEstado"
			:class="{ '!border-red-400' : erros.estado }"
			)
			option(value="") Selecione
			option(
				v-for="item in listaEstados"
				:value="item.uf"
				) {{ item.nome }}
		mensagem-erro(v-if="erros.estado") {{ erros.estado }}

	p
		label(for="cidade") Cidade
		select(
			id="cidade"
			v-model="inputCidade"
			@change="validarInputCidade"
			:class="{ '!border-red-400' : erros.cidade }"
			)
			option(value="") Selecione
			option(
				v-for="item in cidades"
				:value="item"
				) {{ item }}
		mensagem-erro(v-if="erros.cidade") {{ erros.cidade }}

</template>