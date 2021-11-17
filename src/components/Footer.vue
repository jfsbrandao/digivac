<template>
  <footer>
      <div class="container">
        <p class="footer-text">
          2021 - Escola Superior de Tecnologia - EST
        <br>
          Desenvolvido pelos irmãos metralha - TRA TRA TRA!
        </p>
        <v-btn depressed color="#3e3e62"></v-btn>
      </div>
  </footer>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  footer {
    background-color: #3e3e62;
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #fff;
  }
  .container {
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-left: 20px
  }

  .footer-text {
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;
  }
</style>
