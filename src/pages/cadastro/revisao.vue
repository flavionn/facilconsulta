<script setup>

import { ref, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import useFormasPagamento from '@/modules/FormasPagamento'
import useLocalizacao from '@/modules/Localizacao'
import useFormataNumeros from '@/modules/FormataNumeros'
import IconeProfissional from '~icons/iconoir/verified-user'
import IconeAtendimento from '~icons/iconoir/shopping-bag-add'

const store = useStore()
const router = useRouter()

const { formataFormaPagamento, listaFormasPagamento } = useFormasPagamento()
const { listaEstados, formataNomeEstado } = useLocalizacao()
const { formataCelular, formataCpf } = useFormataNumeros()

const dados = ref(store.state.form)
const profissional = dados.value.profissional
const atendimento = dados.value.atendimento

onBeforeMount(() => !store.state.form.profissional.tudoOk || !store.state.form.atendimento.tudoOk ? router.push({ name: 'index' }) : '')

</script>

<template lang="pug">

div(class="space-y-12")

	revisao-container
		revisao-icone-container
			icone-profissional
		revisao-info-container
			ui-app-subtitulo Profissional
			revisao-info-campo-container
				div(v-if="profissional.nome")
					revisao-titulo-campo Nome completo
					revisao-texto-campo {{ profissional.nome }}
				div(v-if="profissional.cpf")
					revisao-titulo-campo CPF
					revisao-texto-campo {{ formataCpf(profissional.cpf) }}
				div(v-if="profissional.celular")
					revisao-titulo-campo Número de celular
					revisao-texto-campo {{ formataCelular(profissional.celular) }}
				div(v-if="profissional.estado")
					revisao-titulo-campo Estado
					revisao-texto-campo {{ formataNomeEstado(profissional.estado) }}
				div(v-if="profissional.cidade")
					revisao-titulo-campo Cidade
					revisao-texto-campo {{ profissional.cidade }}

	hr

	revisao-container
		revisao-icone-container
			icone-atendimento
		revisao-info-container
			ui-app-subtitulo Atendimento
			revisao-info-campo-container
				div(v-if="atendimento.especialidade")
					revisao-titulo-campo Especialidade principal
					revisao-texto-campo {{ atendimento.especialidade }}
				div(v-if="atendimento.preco")
					revisao-titulo-campo Valor da consulta
					revisao-texto-campo R$ {{ atendimento.preco }}
				div(v-if="atendimento.forma")
					revisao-titulo-campo Formas de pagamento da consulta
					div(v-for="item in atendimento.forma")
						revisao-texto-campo {{ formataFormaPagamento(item) }} 
							span(v-if="item === 'credito'") - em até {{ atendimento.parcelamento }}x

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
  imagem: /public/img/desktop-pagina-3.png

</route>