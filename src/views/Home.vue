<template>
  <div>
      <v-btn
      depressed
      color="#3e3e62"
      fab
      dark
      fixed
      left
      top
      to="/"
      >
      <v-icon dark>fa-sign-out-alt</v-icon>
      </v-btn>
      <v-card flat color="#3e3e62" class="card-home">
        <img src="../assets/download.png" alt="Profile Pic" class="image">
        <p style="font-weight: bold; text-shadow: 1px 1px black; color:white">{{nome}}</p>
        
        <div style="display: flex">
          <div style="flex:1">
            <v-btn
              depressed
              color="#3e3e62"
              fab
              dark
              to="/EVac"
              >
              <v-icon>fa-id-card</v-icon>
            </v-btn>
            <br>
            <h5 class="name">E-VAC</h5>
          </div>
          
          <div style="flex:1">
            <v-btn
              depressed
              color="#3e3e62"
              fab
              dark
              style="margin-left:30px; margin-right:30px"
              to="/NewVax"
              >
              <v-icon>fa-plus-circle</v-icon>
            </v-btn>
            <h5 class="name">ADICIONAR<br>IMUNIZANTE</h5>
          </div>

          <div style="flex:1">
              <v-btn
              depressed
              color="#3e3e62"
              fab
              dark
              >
              <v-icon>fa-cogs</v-icon>
            </v-btn>
            <h5 class="name">AJUSTES</h5>
          </div>
        </div>

        <v-card flat color="white" style="margin-top:25px; width:350px; margin-left:auto; margin-right: auto; border-radius:40px;">
          <div style="display:flex; justify-content: center; align-items: center;">
            <img src="../assets/Flag_of_Brazil.svg" alt="Bandeira_Brasil" class="image3">
            <p style="font-weight: bold; text-align: center; color:#525b7c">Minhas Vacinas</p>
            <img src="../assets/mercosul-logo.svg" alt="Mercosul" class="image2">
          </div>
          <div style="display:flex; justify-content: center; align-items: center;">
            <v-icon x-large color="#b8b4e4">fa-heartbeat</v-icon>
            <div>
            <h6 class="aga6">Registre seu imunizante e salve vidas</h6>
            <h6 class="aga6">Deixe suas vacinas atualizadas e ajude a controlar</h6>
            <h6 class="aga6">endemias na sua região</h6>
            </div>
          </div>
          <v-btn text to="/QrCode"><h5 style="font-weight: bold; color:#525b7c">EXPANDIR</h5></v-btn>
        </v-card>
      </v-card>
  </div>
</template>

<script>
import axios from "axios"
  export default {
    data() {
      return {
      nome: '',
      }
    },

    created: function () {
      axios.get("http://localhost:5000/loggeduser")
              .then(response => {
                  this.nome = response.data
              })
          }
    }
</script>

<style lang="scss">
  .card-home{
    margin:auto;
    margin-top: 50px;
    margin-bottom: 150px;
    width: 400px;
    height: 350px;
    display: block;
    background-color: #525b7c;
  }

  .image{
    height: 150px;
    width: 140px;
    margin-top: 5px;
    }

  .name{
    color:white;
  }

  .image2{
    height: 30px;
    width: 35px;
    margin-top: 5px;
  }

  .image3{
    height: 30px;
    width: 35px;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .aga6{
    color: #b8b4e4; 
    margin-left:9px;
    text-align: left
  }
</style>
