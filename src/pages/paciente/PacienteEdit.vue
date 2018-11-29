<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
            <div slot="widget-content">
              <v-container>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Nome"
                      v-model="name"
                      :rules="[rules.required]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>                
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="E-mail"
                      v-model="email"
                      :rules="[rules.email]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Telefone"
                      v-model="phoneMain"
                      :rules="[rules.required, rules.phone]"
                      mask="(##) #####-####"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-select
                      :items="patientTypes"
                      v-model="patientType"
                      label="Categoria de Pasciente"
                      auto
                      required
                      :rules="[rules.required]"
                      item-text="name"
                      item-value="id"
                    ></v-select>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Consulta"
                      :error-messages="errors.collect('Expire Date')"        
                      append-icon="today"
                      type="date"
                      v-model="schedule"
                      required
                      :rules="[rules.required]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <div class="form-btn">
                  <v-btn outline @click="onSave" color="primary">Salvar</v-btn>
                  <v-btn outline @click="goBack">Voltar</v-btn>
                </div>
              </v-container>
            </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from '@/components/VWidget';
export default {
  components: {
    VWidget
  },
  data () {
    return {
      email: '',
      rules: {
        required: (value) => !!value || 'Obrigatório.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'E-mail inválido';
        },
        phone: (value) => {
          const pattern = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
          return pattern.test(value) || 'Telefone inválido.';
        }
      },
      patientTypes: [
        {
          id: 1,
          name: 'Gestante'
        },
        {
          id: 2,
          name: 'Recem nascido'
        },
        {
          id: 3,
          name: 'Criança'
        }      
      ],

    };
  },
  computed: {
  },  
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    onSave () {
      alert('onSave!!');
    }
  }  
};
</script>