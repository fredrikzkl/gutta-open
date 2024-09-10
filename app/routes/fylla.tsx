import Header from "../components/Header";

import { BeerIcon } from "../icons/icons";


export default function Fylla() {
  return (
    <div className="p-6">
      <Header />
      <div className="text-center p-10 sm:p-2 mb-2">
        <h2 className="text-3xl">Fyllagolf 🍺</h2>
      </div>
      <article className="prose max-w-xl mx-auto my-10 ">
        <h3>Format: Single-Elimination Matchplay </h3>
        <p>
          Flightsene trekkes tilfeldig.
          Hver flight starter med en chuggekonkuranse (0.33 øl). Vinneren får velge første motstander.
        </p>
        <p>
          Runde 1 er de 5 første hullene, runde 2 er de 4 siste. 
          De 2 vinnerne i runde 1 møtes i runde 2, og taperne møtes.
        </p>
        <p>
          Alle hull er verdt 1 poeng, bortsett fra hull 9 som er verdt 2 poeng. Dersom det står likt etter en av rundene, avgjøres det med nearest pin chip.
        </p>
        <ul>
          <li>
            <p><strong>Drikkeregler</strong></p>
            <p>1 enhet skal drikkes før annenhvert hull (1,3,5,7 og 9). Ølen fra chuggekonkuransen telles som første øl.</p>
          </li>
          <li>
            <p><strong>Mulligan</strong></p>
            <p>Mulligan kan kjøpes 3 ganger pr runde, ved å ta 1 shot med Fireball</p>
            <p>Unntak: <b>IKKE</b> mulig å kjøpe Mulligan på hull 9</p>
          </li>
          <li>
            <p><strong>Poeng</strong></p>
            <p>Vinneren av vinnergruppen får første plass (+3 poeng), mens taper av vinnergruppen får andre plass (+2 poeng)</p>
            <p>Vinneren av tapergruppen får tredje plass (+1 poeng), mens taper av tapergruppen får 0 poeng</p>
          </li>
        </ul>
      </article>
      <div className="max-w-xl mx-auto">
        <div className="divider">Runde 1</div>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start">Hull 1</div>
            <div className="timeline-middle">
              🍺
            </div>
            <div className="timeline-end timeline-box"></div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">Hull 2</div>
            <div className="timeline-middle">
              🍺
            </div>
            <div className="timeline-end timeline-box"></div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">Hull 3</div>
            <div className="timeline-middle">
              🍺
            </div>
            <div className="timeline-end timeline-box"></div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">Hull 4</div>
            <div className="timeline-middle">
              🍺
            </div>
            <div className="timeline-end timeline-box"></div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">Hull 5</div>
            <div className="timeline-middle">
              🍺
            </div>
            <div className="timeline-end timeline-box"></div>
          </li>
        </ul>
        <div className="divider">Runde 2</div>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start">Hull 6</div>
            <div className="timeline-middle">
              🍺
            </div>
            <div className="timeline-end timeline-box"></div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">Hull 7</div>
            <div className="timeline-middle">
              🍺
            </div>
            <div className="timeline-end timeline-box"></div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">Hull 8</div>
            <div className="timeline-middle">
              🍺
            </div>
            <div className="timeline-end timeline-box"></div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">Hull 9</div>
            <div className="timeline-middle">
              🍺
            </div>
            <div className="timeline-end timeline-box"></div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  )
};