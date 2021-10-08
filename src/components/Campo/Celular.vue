<script setup>

import { ref } from 'vue'
import { useStore } from 'vuex'
import useValidacaoForm from '@/modules/ValidacaoForm'

let input = ref('')

const emit = defineEmits(['update:modelValue'])

const store = useStore()
const { validarCelular, erros } = useValidacaoForm()

const validarInput = () => validarCelular('celular', input.value)

store.state.form.profissional.celular ? input.value = store.state.form.profissional.celular : ''
emit('update:modelValue', input.value)

</script>

<template lang="pug">

p
	label(for="celular") Número de celular
	input(
		type="text"
		id="celular"
		v-model="input"
		placeholder="(00) 0 0000-0000"
		@keyup="validarInput"
		@blur="validarInput"
		@input="$emit('update:modelValue', $event.target.value)"
		:class="{ '!border-red-400' : erros.celular }"
		v-maska="'(##) # ####-####'"
		)
	mensagem-erro(v-if="erros.celular") {{ erros.celular }}

</template>