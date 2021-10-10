import { createStore } from 'vuex'

const state = {
	form: {
		profissional: {
			tudoOk: true,
			nome: 'Flávio',
			cpf: '89043111368',
			celular: '61994584642',
			estado: 'sc',
			cidade: 'Florianópolis'
		},
		atendimento: {
			tudoOk: true,
			especialidade: 'Cardiologia',
			preco: '100',
			forma: [ 'dinheiro', 'credito' ],
			parcelamento: 2
		}
	}
}

const mutations = {
	setarDadosProfissional(state, dados) {
		state.form.profissional = dados
		state.form.profissional.tudoOk = true
	},
	setarDadosAtendimento(state, dados) {
		state.form.atendimento = dados
		state.form.atendimento.tudoOk = true
	}
}

const actions = {
	salvarDadosProfissional({ commit }, dados) {
		commit('setarDadosProfissional', dados)
	},
	salvarDadosAtendimento({ commit }, dados) {
		commit('setarDadosAtendimento', dados)
	}
}

export default createStore({
	state,
	mutations,
	actions
})