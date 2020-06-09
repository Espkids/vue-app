<template>
  <v-container>
    <v-card>
      <v-card-title class="headline justify-center red--text">
        Vue components
      </v-card-title>
      <v-divider class="black mx-3"></v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="12" xs="6" sm="6" md="6" lg="6">
            <v-text-field :readonly='false' outlined label="Firstname" v-model="firstname"></v-text-field>
          </v-col>
          <v-col cols="12" xs="6" sm="6" md="6" lg="6">
            <v-text-field :readonly='false' outlined label="Lasetname" v-model="lastname"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn class="primary mb-5" rounded block @click.stop="editItem()">Edit</v-btn>
      </v-card-actions>
    </v-card>
    <dialogComponent v-model="dialog" :eitem="editedItem" @newData="changeData" class="elevation-2" />
    <chartComponent />
    <bubbleComponent />
  </v-container>
</template>

<script>
import dialogComponent from './Dialog'
import chartComponent from './Chart'
import bubbleComponent from './Bubble'

export default {
  name: 'HelloWorld',
  components: {
    dialogComponent,
    chartComponent,
    bubbleComponent
  },
  data: () => ({
    firstname: 'Pongsiri',
    lastname: 'Lakngam',
    dialog: false,
    editedItem: {}
  }),
  methods: {
    editItem: function () {
      this.editedItem = Object.assign({}, {
        firstname: this.firstname,
        lastname: this.lastname
      })
      this.dialog = true
    },
    changeData (value) {
      this.firstname = value.firstname
      this.lastname = value.lastname
    }
  }
}
</script>
