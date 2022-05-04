<script>
</script>

<template>
  <nav>
    <div>
      <img src="@/assets/logo.png" alt="logo" class="navbarLogo" />
      <h1 class="navbarText"><span class="navbarTextBold">Link</span>Vote Challenge</h1>
    </div>
    <hr class="navbarHr" />
  </nav>
</template>

<style scoped>
  .navbarLogo{
    width: 300px;
    display: inline-block;
  }

  .navbarText{
    float: right;
    font-size: 30px;
  }

  .navbarTextBold{
    font-weight: 800;
  }

  .navbarHr{
    margin-top: 10px;
  }

  @media only screen and (max-width: 800px) {
  .navbarLogo {
    width: 140px;
  }
  .navbarText{
    font-size: 16px;
  }
}

</style>