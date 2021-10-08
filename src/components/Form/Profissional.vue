<script setup>

import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import useValidacaoForm from '@/modules/ValidacaoForm'

let uf = ref('')

let campo = reactive({
	nome: '',
	cpf: '',
	celular: '',
	estado: '',
	cidade: '',
})

const router = useRouter()
const store = useStore()

const { 
	validarNome,
	validarCpf,
	validarCelular,
	validarEstado,
	validarCidade,
	erros,
	} = useValidacaoForm()

const setarUF = (estadoUf) => uf.value = estadoUf

const validaCampos = () => {
	validarNome('nome', campo.nome)
	validarCpf('cpf', campo.cpf)
	validarCelular('celular', campo.celular)
	validarEstado('estado', campo.estado)
	validarCidade('cidade', campo.cidade)
}

const processaForm = async () => {
	validaCampos()

	if(!Object.values(erros).join('')) {
		await store.dispatch('salvarDadosProfissional', campo)
		.then(() => router.push({ name: 'cadastro-atendimento' }))
	}
}

onMounted(() => {
	for(let prop in erros) {
		delete erros[prop]
	}
})

</script>

<template lang="pug">

form(@submit.prevent="processaForm")
	campo-nome(v-model="campo.nome")
	campo-cpf(v-model="campo.cpf")
	campo-celular(v-model="campo.celular")
	div(class="flex space-x-4")
		campo-estado(
			v-model="campo.estado"
			@uf="setarUF"
			)
		campo-cidade(
			v-model="campo.cidade"
			:estado="uf"
			:key="uf"
			)
	ui-barra-progresso(passo="1")
	ui-botao-cadastro(
		class="bg-blue-500 text-white"
		) Próximo

</template>