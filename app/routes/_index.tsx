import type { MetaFunction } from "@remix-run/node";

import hamburgerImg from "../images/hamburger.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Gutta Open" },
    { name: "description", content: "Velkommen til Gutta open" },
  ];
};

export default function Index() {
  return (
    <div className="p-6">
      <div className="text-center p-10 mb-2">
        <h1 className="text-5xl">Gutta Open 2024 🏆</h1>
      </div>

      <div role="tablist" className="tabs tabs-boxed tabs-lg mb-8">
        <a role="tab" className="tab tab-active">Fredag</a>
        <a role="tab" className="tab ">Lørdag</a>
        <a role="tab" className="tab">Søndag</a>
      </div>

      <div>
        <div className="card bg-base-100 w-96 shadow-xl mx-auto mb-6">
          <figure>
            <img
              src="https://www.oijared.se/wp-content/uploads/2022/12/Kristihimmelfardspaket_puff_2020.jpg"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Parkbanan</h2>
            <h3>18 hull</h3>
            <h3>13:36</h3>
            <h3>Scramble</h3>
            {/*
            <ul>
            <li>To per lag</li>
            <li>Lag basert på handicap (nærmeste sammen)</li>
            <li>HCP= Gjennomsnittlig handicap x 0,65. Sjekk slope for tildelte slag</li>
            <li>Plusspoeng for hvert slag under eget par.</li>
            <li>Minuspoeng over. </li>
          </ul>
          <p>En tvungen reverse scramble i løpet av runden (taktisk valg av hull)</p>
          */}
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Les mer</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
          <figure>
            {/* url("https://www.oijared.se/wp-content/uploads/2022/12/Kristihimmelfardspaket_puff_2020.jpg")*/}
            <img
              src={hamburgerImg}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hamburgere</h2>
            <h3>20:00</h3>
            <div className="card-actions justify-end">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
