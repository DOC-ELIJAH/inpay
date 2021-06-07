<template>
    <v-form>
        <v-text-field 
            label="New Password"
            type="password" 
            v-model="newPassword"
            :rules="[v => !!v || 'field is required']">
        </v-text-field>
        <v-text-field 
            label="Confirm Password"
            type="password" 
            v-model="confirmPassword"
            :rules="[(newPassword === confirmPassword) || 'Password must match']">
        </v-text-field>
        <v-button class="btn btn-primary float-right">Submit</v-button>
    </v-form>
</template>

<script>
module.export = {
    
}
</script>