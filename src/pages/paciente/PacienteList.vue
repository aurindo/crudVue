<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>     
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Type something"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
                ></v-text-field>     
              <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="patients"
                :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
                class="elevation-1"
                item-key="name"
                select-all
                v-model="complex.selected"
                >
                <template slot="items" slot-scope="props">
                  <td>
                    <v-checkbox
                      primary
                      hide-details
                      v-model="props.selected"
                    ></v-checkbox>
                  </td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.patientType }}</td>
                  <td>{{ props.item.lastAppointment | date}}</td>
                  <td>{{ props.item.nextAppointment | date}}</td>
                  <td>
                    <v-btn depressed outline icon fab dark color="primary" small>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon>delete</v-icon>
                    </v-btn>                   
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { Items as Users } from '@/api/user';
import { mapGetters, mapActions } from 'vuex';
import date from '@/filters/date.filter';

export default {
  filters: {
    date
  }, 
  data () { 
    return {
      search: '',
      complex: {
        selected: [],
        headers: [
          {
            text: 'Name',
            value: 'name'
          },
          {
            text: 'Tipo',
            value: 'patientType'
          },
          {
            text: 'Última Consulta',
            value: 'lastAppointment'
          },
          {
            text: 'Próxima Consulta',
            value: 'nextAppointment'
          },
          {
            text: 'Ações',
            value: 'actions'
          },          
        ],
        items: this.patients,
      },
    };
  }, 
  computed: {
    ...mapGetters('patient', [
      'patients'
    ])
  },
  mounted () {
    this.list();
  },  
  methods: {
    goHome () {
      this.$router.push({ path: '/' });
    },
    ...mapActions('patient', [
      'list'
    ])
  }
};
</script>

<style scoped lang="css">
  h1 {
    font-size: 150px;
    line-height: 150px;
    font-weight: 700;
    color: #252932;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;    
  }
</style>
