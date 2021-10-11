<script setup>

import { ref } from 'vue'
import useValidacaoForm from '@/modules/ValidacaoForm'

let input = ref(props.valor)
const props = defineProps({ valor: String })

const { validarNome, erros } = useValidacaoForm()
const validarInput = () => validarNome('nome', input.value)

</script>

<template lang="pug">

p
	label(for="nome") Nome completo *
	input(
		type="text"
		id="nome"
		v-model="input"
		placeholder="Digite o nome completo"
		@keyup="validarInput"
		@blur="validarInput"
		@input="$emit('update:modelValue', $event.target.value)"
		:class="{ '!border-facilConsulta-danger' : erros.nome }"
		)
	mensagem-erro(v-if="erros.nome") {{ erros.nome }}

</template>