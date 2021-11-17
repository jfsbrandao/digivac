<template>
  <header>
    <div class="center">
        <img src="../assets/e-vac_branco.png" style="height:120px; width:150px">
    </div>
  </header>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">

  header {
    background-color: #3e3e62;
    padding: 0;
    display: flex;
    justify-content: space-between;
    
    a {
      margin-bottom: 20px;
    }
  }

    .center{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px
    }
  .header-title {
    p {
      font-size: 1.8rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0;
    }
    b {
      font-size: 1.2rem;
      color: #fff;
      font-weight: 600;
    }
    a {
      text-decoration: none;
    }
  }

  @media screen and (max-width: 500px) {
    header {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 80%;
      }
    }
    .header-title {
      margin-bottom: 10px;
      p {
        font-size: 1.2rem;
      }
      b {
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .header-title {
      p {
        font-size: 1.4rem;
      }
      b {
        font-size: 1rem;
      }
    }
  }
</style>
