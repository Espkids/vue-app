<template>
  <v-dialog v-model="propModel" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline mx-auto">Edit user data</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field v-model="eitem.firstname" label="Firstname"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="eitem.lastname" label="Lastname"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" text @click.stop="save">Save</v-btn>
        <v-btn color="error" text @click.stop="close">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    eitem: Object
  },
  data () {
    return {
      dialog: false,
      userData: this.eitem
    }
  },
  computed: {
    propModel: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
        this.userData = this.eitem
        console.log(this.userData)
      }
    }
  },
  methods: {
    save () {
      this.$emit('input', false)
      this.$emit('newData', this.eitem)
    },
    close () {
      this.$emit('input', false)
    }
  }
}
</script>
