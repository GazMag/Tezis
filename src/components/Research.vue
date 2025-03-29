<template>
  <section>
    <div>
      <h2>Kutatás</h2>
      <p>
        A Tézis Kutatóközpont fő kutatási irányai:
      </p>
      <dl>
        <dt>Gazdaságtudományi Kutatócsoport:</dt>
        <dd>
          <ul>
            <li>a sharing economy modellek és megoldások működésének vizsgálata</li>
            <li>a városfejlődés modern irányzatainak elemzése</li>
          </ul>
        </dd>

        <dt>Helytörténeti Kutatócsoport:</dt>
        <dd>
          <ul>
            <li>Komárom és környéke helytörténetének vizsgálata</li>
          </ul>
        </dd>
      </dl>
    </div>
  </section>
</template>

<style scoped>
section {
  background: linear-gradient(to right, #dacbaa, #fcedcc, #dacbaa);
  display: grid;
  place-content: center;
  padding: 1rem 1rem 2rem;
}

h2 {
  font-size: 2em;
  font-weight: 200;
  opacity: 0.5;
}

p, dl {
  width: 60ch;
  font-weight: 300;
}

dd {
  margin: 0;
}

dt {
  font-size: 1.25em;
  font-weight: 400;
}
</style>
<script setup lang="ts">
</script>