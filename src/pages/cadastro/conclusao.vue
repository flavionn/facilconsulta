<script setup>

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()
const nome = store.state.form.profissional.nome

!store.state.form.profissional.tudoOk || !store.state.form.atendimento.tudoOk ? router.push({ name: 'index' }) : ''

</script>

<template lang="pug">

pagina-container(class="space-y-12")
	ui-app-titulo Seu cadastro esta concluído!

	img(src="https://c.tenor.com/kZyx6uK-ILYAAAAC/house-md-dr-house.gif")

	p {{ nome }}, que bom que você chegou!<br>Verifique seu e-mail com mais instruções.

	ui-botao-link(
		class="bg-hex-483698 text-white hover:(bg-opacity-90) cursive"
		to="index"
		) Voltar para o início

</template>