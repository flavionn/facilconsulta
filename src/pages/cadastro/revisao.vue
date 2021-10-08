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

div

	div
		IconeProfissional(class="text-2xl")
		div Profissional
		div
			div {{ profissional.nome }}
			div {{ profissional.cpf }}
			div {{ profissional.celular }}
			div {{ profissional.estado }}
			div {{ profissional.cidade }}

	div
		IconeAtendimento(class="text-2xl")
		div Atendimento
		div
			div {{ atendimento.especialidade }}
			div {{ atendimento.preco }}
			div {{ atendimento.forma }}
			div {{ atendimento.parcelamento }}

	//- div(v-for="(conteudo, categoria) in dados")
		h1 {{ categoria }}

		div(v-for="(item, nome) in conteudo")
			h2 {{ nome }}
			h3 {{ item }}

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