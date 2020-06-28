<script>
export default {
  name: "Hosts"
};
</script>

<template lang="pug">
  .container
      h2 Hosts
      //- p The #{hosts.length} hosts here

      //- ul
      //-   each host in hosts
      //-     li
      //-       a(href=`/hosts/${host.id}`) #{host.name}
</template>
