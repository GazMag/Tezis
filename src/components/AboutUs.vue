<template>
  <section>
    <div>
      <h2>Rólunk</h2>
      <p>
        A Tézis Kutatóközpont a <a href="https://gazmag.hu" target="_blank">GazMag Tudományos és Ismeretterjesztő Egyesület</a> által fenntartott önálló kutatási
        egység, multidiszciplináris kutatóhely. Jelenleg főleg a társadalomtudományok területén végez kutatásokat.
        A Kutatóközpont a közgazdaságtudományi és helytörténeti oktatás, kutatás, innováció minden oldalát erősíteni,
        fejleszteni kívánja.
      </p>
      <p>
        A Kutatóközpont célja, hogy az új tudományos eredmények hazai és nemzetközi disszeminációjához hozzájáruljon,
        konferenciákon való részvétellel és előadásokkal, publikációs tevékenységgel, tanulmánykötetek megjelentetésével
        elősegítse a kutatási eredmények megismerését, hozzáférhetőségét. Fontos cél az eredmények tudományos igényű
        kommunikálása mellett azok közérthető, ismeretterjesztő módon történő átadása is.
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  --bg: #977e50;
  --bg-dark: #755c30;
  color: #fff;
  display: grid;
  place-content: center;
  padding: 1rem 1rem 2rem;

  a {
    color: currentColor;
    text-decoration: underline;
    text-decoration-color: #fff7;
    text-decoration-thickness: 1px;
    text-underline-position: under;
  }

  @media screen and (max-width: 40rem) {
    --bg-dark: #866d40;
  }
}
</style>
