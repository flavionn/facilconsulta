<script setup>

import { ref } from 'vue'
import useValidacaoForm from '@/modules/ValidacaoForm'

let input = ref(props.valor)
const props = defineProps({ valor: String })

const { validarCpf, erros } = useValidacaoForm()
const validarInput = () => validarCpf('cpf', event.target.dataset.maskRawValue)

</script>

<template lang="pug">

p
	label(for="cpf") CPF *
	input(
		type="text"
		id="cpf"
		v-model="input"
		placeholder="Digite um CPF"
		@keyup="validarInput"
		@blur="validarInput"
		@input="$emit('update:modelValue', $event.target.dataset.maskRawValue)"
		:class="{ '!border-facilConsulta-danger' : erros.cpf }"
		v-maska="'###.###.###-##'"
		)
	mensagem-erro(v-if="erros.cpf") {{ erros.cpf }}

</template>