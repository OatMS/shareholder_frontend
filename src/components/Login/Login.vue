<template lang="html">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="green">
                <v-toolbar-title>INET Shareholder Meeting</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn icon large :href="source" target="_blank" slot="activator">
                    <v-icon> autorenew </v-icon>
                  </v-btn>
                  <span> Refresh </span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Username" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="green">Login</v-btn>
              </v-card-actions>
              <v-footer class="pa-3">
                <v-flex xs12 py-3 text-xs-center black--text>
                  &copy; {{ new Date().getFullYear() }} INET
                </v-flex>
              </v-footer>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),

  props: {
    source: String
  }
}
</script>

<style lang="css">
</style>
