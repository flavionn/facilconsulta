<script setup>

import { ref } from 'vue'
import { useStore } from 'vuex'
import useValidacaoForm from '@/modules/ValidacaoForm'
import useEspecialidades from '@/modules/Especialidades'

let input = ref('')
let especialidades = ref([])

const emit = defineEmits(['update:modelValue'])

const store = useStore()
const { validarEspecialidade, erros } = useValidacaoForm()
const { listaEspecialidades } = useEspecialidades()

const validarInput = () => {
	emit('update:modelValue', input.value)
	validarEspecialidade('especialidade', input.value)
}

store.state.form.atendimento.especialidade ? input.value = store.state.form.atendimento.especialidade : ''
emit('update:modelValue', input.value)

especialidades.value = listaEspecialidades

</script>

<template lang="pug">

p
	label(for="especialidade") Especialidade principal
	select(
		id="especialidade"
		v-model="input"
		@change="validarInput"
		:class="{ '!border-red-400' : erros.especialidade }"
		)
		option(value="") Selecione a especialidade
		option(
			v-for="item in especialidades"
			:value="item"
			) {{ item }}
	mensagem-erro(v-if="erros.especialidade") {{ erros.especialidade }}

</template>