<template>
  <v-parallax class="d-flex align-center" src="@/assets/knowledge-book-library-glasses.jpg">
    <figure id="logo" class="mx-auto">
      <Logo />
      <figcaption class="d-none"><h1>Tézis Kutatóközpont</h1></figcaption>
    </figure>
  </v-parallax>
  <Section background-color="#977e50" color="white" title="Rólunk">
    <p class="mb-4">
      A Tézis Kutatóközpont a
      <a class="text-inherit" href="https://gazmag.hu" target="_blank">GazMag Tudományos és Ismeretterjesztő Egyesület</a>
      által fenntartott önálló kutatási egység, multidiszciplináris kutatóhely.
      Jelenleg főleg a társadalomtudományok területén végez kutatásokat.
      A Kutatóközpont a közgazdaságtudományi és helytörténeti oktatás, kutatás, innováció minden oldalát erősíteni,
      fejleszteni kívánja.
    </p>
    <p>
      A Kutatóközpont célja, hogy az új tudományos eredmények hazai és nemzetközi disszeminációjához hozzájáruljon,
      konferenciákon való részvétellel és előadásokkal, publikációs tevékenységgel, tanulmánykötetek megjelentetésével
      elősegítse a kutatási eredmények megismerését, hozzáférhetőségét. Fontos cél az eredmények tudományos igényű
      kommunikálása mellett azok közérthető, ismeretterjesztő módon történő átadása is.
    </p>
  </Section>
  <Section background-color="#fcedcc" color="inherit" title="Kutatás">
    <p class="mb-4">A Tézis Kutatóközpont fő kutatási irányai:</p>
    <dl>
      <v-row>
        <v-col cols="12" md="6">
          <dt class="text-h5">Gazdaságtudományi Kutatócsoport</dt>
          <dd>
            <ul>
              <li>a sharing economy modellek és megoldások működésének vizsgálata</li>
              <li>a városfejlődés modern irányzatainak elemzése</li>
            </ul>
          </dd>
        </v-col>
        <v-col cols="12" md="6">
          <dt class="text-h5">Helytörténeti Kutatócsoport</dt>
          <dt>
            <ul>
              <li>Komárom és környéke helytörténetének vizsgálata</li>
            </ul>
          </dt>
        </v-col>
      </v-row>
    </dl>
  </Section>
  <v-footer class="py-4 elevation-1">
    <v-row>
      <v-col class="text-center text-md-left" cols="12" md="6">
        <nav>
          <a class="text-secondary" href="https://www.facebook.com/teziskutatokozpont" target="_blank">
            <v-icon aria-label="Facebook" icon="mdi-facebook" />
          </a>
          <a class="ms-4 text-secondary text-decoration-none" href="mailto:info@tezis.hu" target="_blank">
            <v-icon aria-hidden="true" icon="mdi-email" />
            info@tezis.hu
          </a>
        </nav>
      </v-col>
      <v-col class="text-center text-md-right" cols="12" md="6">
        <small>
          <v-icon aria-label="©" icon="mdi-copyright" />
          2020-{{ new Date().getFullYear() }}
          GazMag Tudományos és Ismeretterjesztő Egyesület
        </small>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
  //
</script>

<style scoped lang="scss">
  small {
    opacity: 0.75;
  }
  .v-parallax {
    background: radial-gradient(rgb(var(--v-theme-secondary)) 75%, black);
    max-height: 75vh;
    :deep(.v-img__img) {
      filter: grayscale(100%) blur(0.25rem) opacity(0.75);
    }
  }
  .v-footer {
    background-color: #ddd;
  }
  #logo {
    max-width: 60ch;
    width: calc(100% - 32px);
  }
</style>
