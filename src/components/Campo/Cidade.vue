<script setup>

import { ref } from 'vue'
import useValidacaoForm from '@/modules/ValidacaoForm'
import useLocalizacao from '@/modules/Localizacao'

let input = ref('')
let cidades = ref('')

const props = defineProps({ valor: String, estado: String })
const emit = defineEmits(['update:modelValue'])

const { validarCidade, erros } = useValidacaoForm()
const { pesquisaCidades } = useLocalizacao()

const validarInput = () => {
	emit('update:modelValue', input.value)
	validarCidade('cidade', input.value)
}

props.estado && props.estado.length ? cidades.value = pesquisaCidades(props.estado) : ''

if(cidades.value.includes(props.valor)) {
	input.value = props.valor
	validarCidade('cidade', input.value)
}

</script>

<template lang="pug">

p
	label(for="cidade") Cidade *
	select(
		id="cidade"
		v-model="input"
		@change="validarInput"
		:class="{ '!border-red-400' : erros.cidade }"
		)
		option(value="") Selecione
		option(
			v-for="item in cidades"
			:value="item"
			) {{ item }}
	mensagem-erro(v-if="erros.cidade") {{ erros.cidade }}

</template>