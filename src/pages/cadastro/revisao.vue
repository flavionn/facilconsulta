<script setup>

import { ref } from 'vue'
import { useStore } from 'vuex'
import IconeProfissional from '~icons/iconoir/verified-user'
import IconeAtendimento from '~icons/iconoir/shopping-bag-add'

const store = useStore()

const dados = ref(store.state.form)
const profissional = ref(dados.value.profissional)
const atendimento = ref(dados.value.atendimento)

</script>

<template lang="pug">

div(class="space-y-12")

	revisao-container
		revisao-icone
			icone-profissional
		revisao-info-container
			ui-app-subtitulo Profissional
			revisao-info-campo-container
			revisao-info-campo-container
				template(v-if="profissional.nome")
					revisao-titulo-campo Nome completo
					revisao-texto-campo {{ profissional.nome }}
				template(v-if="profissional.cpf")
					revisao-titulo-campo CPF
					revisao-texto-campo {{ profissional.cpf }}
				template(v-if="profissional.celular")
					revisao-titulo-campo Número de celular
					revisao-texto-campo {{ profissional.celular }}
				template(v-if="profissional.estado")
					revisao-titulo-campo Estado
					revisao-texto-campo {{ profissional.estado }}
				template(v-if="profissional.cidade")
					revisao-titulo-campo Cidade
					revisao-texto-campo {{ profissional.cidade }}

	hr

	revisao-container
		revisao-icone
			icone-atendimento
		revisao-info-container
			ui-app-subtitulo Atendimento
			revisao-info-campo-container
				template(v-if="atendimento.especialidade")
					revisao-titulo-campo Especialidade principal
					revisao-texto-campo {{ atendimento.especialidade }}
				template(v-if="atendimento.preco")
					revisao-titulo-campo Valor da consulta
					revisao-texto-campo {{ atendimento.preco }}
				template(v-if="atendimento.forma")
					revisao-titulo-campo Formas de pagamento da consulta
					div(v-for="item in atendimento.forma") 
						revisao-texto-campo {{ item }}
				template(v-if="atendimento.parcelamento")
					revisao-titulo-campo Parcelamento possível
					revisao-texto-campo Em até {{ atendimento.parcelamento }}x

	div(class="space-y-2")
		ui-botao-cadastro(
			to="cadastro-conclusao"
			class="bg-hex-FBDE40 text-hex-483698"
			) Cadastrar profissional

		ui-botao-cadastro(
			to="cadastro-profissional"
			class="border border-gray-300 text-hex-483698"
			) Editar cadastro

</template>

<route lang="yaml">

meta:
  layout: cadastro
  titulo: Revisão do cadastro

</route>