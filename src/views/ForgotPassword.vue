<template>

                    <v-form
                       v-model="valid"
                      lazy-validation

                    >
                          <v-text-field
                            v-model="email"
                            :rules="[rules.required, rules.email]"
                            label="E-mail"
                            color="blue"
                            required
                          ></v-text-field>
                      <v-button type="submit" class="btn btn-primary float-right">
                        Reset
                      </v-button>
                    </v-form>

</template>

<script>
export default {
  data: () => ({
   rules:{
     required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
   }
    })
}
</script>