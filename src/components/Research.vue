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
  --bg: #fcedcc;
  --bg-dark: #dacbaa;
  display: grid;
  place-content: center;
  padding: 1rem 1rem 2rem;

  @media screen and (max-width: 40rem) {
    --bg-dark: #ebdcbb;
  }
}

dl {
  font-weight: 300;
  max-width: var(--text-width);
}

dd {
  margin: 0;
}

dt {
  font-size: 1.25em;
  font-weight: 400;
}
</style>
