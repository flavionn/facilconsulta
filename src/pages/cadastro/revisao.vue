<script setup>

import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const dados = ref(store.state.form)

</script>

<template lang="pug">

div
	div(v-for="(conteudo, categoria) in dados")
		h1 {{ categoria }}

		div(v-for="(item, nome) in conteudo")
			h2 {{ nome }}
			h3 {{ item }}

	div(class="space-y-2")
		ui-botao-cadastro(
			to="cadastro-conclusao"
			class="bg-yellow-400 text-white"
			) Cadastrar profissional

		ui-botao-cadastro(
			to="cadastro-profissional"
			class="border border-gray-300 text-gray-600"
			) Editar cadastro

</template>

<route lang="yaml">

meta:
  layout: cadastro
  titulo: Revisão do cadastro

</route>