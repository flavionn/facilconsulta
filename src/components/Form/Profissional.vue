<!-- 

este é o componente do formulário com os campos do profissional
existe um outro componente com o formulário com os campos do atendimento
eles contam com componentes filhos que são os campos

no load do componente, ocorre o envio do state para cada campo via prop 'valor'
a validação ocorre no keyup, blur, change ou input nos campos OU no envio do formulário

para a validação faço uso do modulo 'useValidacaoForm' que valida cada campo específico
no envio, se tudo estiver ok, salvo os dados no state.form.profissional passando o objeto 'campo'
e depois mudo a rota para 'cadastro/atendimento'
-->

<script setup>

import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import useValidacaoForm from '@/modules/ValidacaoForm'

// inicializo a variável 'uf' que servirá para passar um valor do componente campo estado para campo cidade
let uf = ref('')

// defino o objeto 'campo' que receberá os valores emitidos pelos componentes input
let campo = reactive({
	nome: '',
	cpf: '',
	celular: '',
	estado: '',
	cidade: '',
})

const router = useRouter()
const store = useStore()

/*
uso a validacao individual dos campos aqui também (além de usar no componente de cada campo)
serve para quando o usuário tentar enviar o form clicando no botao
*/
const { 
	validarNome,
	validarCpf,
	validarCelular,
	validarEstado,
	validarCidade,
	erros,
	} = useValidacaoForm()

/*
seto um valor na variavel 'uf' quando o usuário altera o estado
este valor é emitido do componente 'estado' e passado como prop para 'cidade'
*/
const setarUF = (estadoUf) => {
	uf.value = estadoUf
	estadoUf === '' ? campo.cidade = '' : ''
}

const validaCampos = () => {
	validarNome('nome', campo.nome)
	validarCpf('cpf', campo.cpf)
	validarCelular('celular', campo.celular)
	validarEstado('estado', campo.estado)
	validarCidade('cidade', campo.cidade)
}

/*
no processamento do form primeiro valido os campos
depois verifico se o objeto 'erros' em validacao form esta com seus valores vazios
se estiver, salva dados e segue para a próxima rota
*/
const processaForm = async () => {
	validaCampos()

	if(!Object.values(erros).join('')) {
		await store.dispatch('salvarDadosProfissional', campo)
		.then(() => router.push({ name: 'cadastro-atendimento' }))
	}
}

const preencherCamposComStore = () => {
	campo.nome = store.state.form.profissional.nome
	campo.cpf = store.state.form.profissional.cpf
	campo.celular = store.state.form.profissional.celular
	campo.estado = store.state.form.profissional.estado
	campo.cidade = store.state.form.profissional.cidade
}

/*
no mounted esvazio o objeto 'erros' para não ocorrer o risco de pegar 
os erros do outro form 'atendimento'
*/
onMounted(() => {
	for(let prop in erros) {
		delete erros[prop]
	}
})

// chamo a função que preenche os campos deste formulário com o store
preencherCamposComStore()

</script>

<!-- usei pug porque penso que fica melhor de ler e também por escrever menos código -->
<template lang="pug">

//- defini cada campo em um componente separado e com validação individual
//- no keyup, change ou blur, ocorre a validação e a emissão do valor para o componente pai
form(@submit.prevent="processaForm")
	campo-nome(
		v-model="campo.nome"
		:valor="campo.nome"
		)
	campo-cpf(
		v-model="campo.cpf"
		:valor="campo.cpf"
		)
	campo-celular(
		v-model="campo.celular"
		:valor="campo.celular"
		)
	div(class="flex space-x-4")
		//- o componente 'estado' emite 'uf' para o pai
		campo-estado(
			v-model="campo.estado"
			:valor="campo.estado"
			@uf="setarUF"
			class="w-full"
			)
		//- e o componente 'cidade' recebe 'uf' via prop para carregar as cidades
		campo-cidade(
			v-model="campo.cidade"
			:valor="campo.cidade"
			:estado="uf"
			:key="uf"
			class="w-full"
			)
	//- barra progresso recebe uma prop com o numero do passo
	ui-barra-progresso(passo="1") 
	ui-botao-cadastro(
		class="bg-facilConsulta-primary text-facilConsulta-secondary0"
		) Próximo

</template>