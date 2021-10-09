<script setup>

import { ref } from 'vue'
import useValidacaoForm from '@/modules/ValidacaoForm'

let input = ref(props.valor)
let quantidadeMaximaParcelas = ref(3)

const props = defineProps({ valor: [ Number, String ] })
const emit = defineEmits(['update:modelValue'])

const { validarParcelamento, erros } = useValidacaoForm()

const validarInput = () => {
	emit('update:modelValue', input.value)
	validarParcelamento('parcelamento', input.value)
}

</script>

<template lang="pug">

p
	label Parcelamento em *
	template(v-for="index in quantidadeMaximaParcelas")
		span
			input(
				type="radio"
				:id="index"
				v-model="input"
				:value="index"
				@change="validarInput"
				)
			label(:for="index") {{ index }}x, sem juros

	mensagem-erro(v-if="erros.parcelamento") {{ erros.parcelamento }}

</template>