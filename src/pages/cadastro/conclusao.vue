<script setup>

import { useStore } from 'vuex'

const store = useStore()
const nome = store.state.form.profissional.nome

</script>

<template lang="pug">

div(class="h-screen w-full flex flex-col space-y-12 items-center text-center justify-center px-12")
	h1(class="text-4xl") Seu cadastro esta concluído!

	img(src="https://c.tenor.com/kZyx6uK-ILYAAAAC/house-md-dr-house.gif")

	p(class="text-lg") {{ nome }}, que bom que você chegou!<br>Verifique seu e-mail com mais instruções.

	ui-botao-link(
		class="bg-hex-483698 text-white hover:(bg-opacity-90) cursive"
		to="index"
		) Voltar para o início



</template>