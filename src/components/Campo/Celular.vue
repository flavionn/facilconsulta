<script setup>

import { ref } from 'vue'
import useValidacaoForm from '@/modules/ValidacaoForm'

let input = ref(props.valor)
const props = defineProps({ valor: String })

const { validarCelular, erros } = useValidacaoForm()
const validarInput = () => validarCelular('celular', event.target.dataset.maskRawValue)

</script>

<template lang="pug">

p
	label(for="celular") Número de celular *
	input(
		type="text"
		id="celular"
		v-model="input"
		placeholder="(00) 0 0000-0000"
		@keyup="validarInput"
		@blur="validarInput"
		@input="$emit('update:modelValue', $event.target.dataset.maskRawValue)"
		:class="{ '!border-red-400' : erros.celular }"
		v-maska="'(##) # ####-####'"
		)
	mensagem-erro(v-if="erros.celular") {{ erros.celular }}

</template>