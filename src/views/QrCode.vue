<template>
    <div><v-btn
      depressed
      color="#3e3e62"
      fab
      dark
      fixed
      left
      top
      to="/Main"
      >
      <v-icon dark>fa-arrow-left</v-icon>
      </v-btn>
    <v-card color="#FFFFFF" flat rounded="xl" class="card">
        <v-card-title class="justify-center">
            <img src="../assets/download.png" alt="Profile Pic" class="image">
        </v-card-title>
            <p style="font-weight: bold; text-shadow: 1px 1px grey; color:black">{{nome}}</p>
            <qrcode :value="id" :options="{ scale: 8 , margin: 1 }"></qrcode>
    </v-card>
    </div>
</template>


<script>
import axios from "axios"
import Vue from 'vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';
Vue.component(VueQrcode.name, VueQrcode);

export default {
    data () {
        return {
            id:'',
            nome:''
        }
    },

    created: function () {
      axios.get("http://localhost:5000/id")
              .then(response => {
                  var lista=[]
                  lista = response.data.split(",")
                  var link = "http://localhost:8081/"
                  var idzinho = lista[0]
                  this.id = link+idzinho
                  this.nome = lista[1]
              })
          }
    }

</script>

<style lang="scss">
    .card {
        margin:auto;
        margin-top: 40px;
        width: 280px;
        height: 470px;
        display: block;
    }
    .image{
        height: 150px;
        width: 140px;
        margin-top: 5px;
    }
</style>
