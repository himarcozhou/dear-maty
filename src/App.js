import React, { useState } from "react";
import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const openEnvelope = () => {
    setIsOpen(true);
    // Wait for envelope opening animation (0.4s) + letter sliding up (0.4s) + extra delay (0.2s)
    setTimeout(() => {
      setIsExpanded(true);
    }, 1500); // Total 1 second delay
  };

  const closeLetter = () => {
    setIsExpanded(false);
    setIsOpen(false);
  };

  return (
    <div className="App">
      <div className="envelope-wrapper">
        <div
          id="envelope"
          className={`${isOpen ? "open" : "close"} ${
            isExpanded ? "expanded" : ""
          }`}
        >
          <div className="letter">
            <div className="letter-container">
              <div className={`fake-letter ${isExpanded ? "hide" : "show"}`}>
                <p className="words line1">
                  -- --------- ------- -------------- --------
                </p>
                <p className="words line1">
                  {" "}
                  --- --------------------- ------- ---
                </p>
              </div>
              <div className={`real-letter ${isExpanded ? "show" : "hide"}`}>
                <p className="words line1">Dear Maty</p>
                <p className="words line2">
                  Sono all'inizio del mio percorso di terapia, sto cercando di
                  risparmiare e di dedicare più tempo ai miei obiettivi. Mi
                  sembra sia passata una vita e spero che tu stia bene. <br />
                  Realizzo solo ora come troppo spesso, nelle nostre
                  discussioni, abbia cercando di difendermi invece che validare
                  i tuoi sentimenti.
                </p>
                <p className="words line3">
                  Avevi bisogno di reassurance e di essere accarezzata nei tuoi
                  momenti fragili. Realizzo quanto ti abbia fatto sentire non
                  ascoltata e poco importante. Ora riconosco che avrei potuto
                  essere più comprensivo, sapendo anche che il percorso di
                  guarigione non è lineare. <br />
                  <br />
                  Come mi dissi tu, ti stavo dando tutto me stesso, anche se non
                  abbastanza, perché non ero in grado di fare di meglio. E
                  percependo di non essere abbastanza, mi sono sentito molto
                  insicuro e non all'altezza quando tu stavi facendo di tutto
                  per lottare per noi. And this is something I deeply regret.
                </p>
                <p className="words line4">
                  Ora riesco a vedere come tu abbia fatto del tuo meglio per
                  aiutarmi (quando anche tu stavi soffrendo). Riesco a vedere
                  ancora meglio quanto tu ci tenevi a me e alla nostra
                  relazione. <br />
                  <br />
                  Ora avrei voluto essere in grado di apprezzarti di più quando
                  ti avevo arrotolata fra le mie braccia, quando eravamo insieme
                  nella relazione più reale che abbia mai avuto. <br />
                  <br />
                  Capisco come sei stata forte a tenere stretta la nostra
                  relazione, ti ringrazio per aver lottato per noi e mi dispiace
                  come sia sempre stato il primo a scappare per le queste mie
                  insicurezze, non perché non ti amavo. <br />
                  <br />
                  Ho condiviso con te quanto volessi migliorarmi come persona e
                  tu mi hai costantemente aiutato per ottenere queste nuove
                  capacità. <br />
                  Vivendo e relazionandomi, specie con i miei cari, realizzo
                  quanto spesso utilizzo ciò che mi hai insegnato e ciò che ho
                  imparato dalla nostra relazione. E come tu hai fatto con me,
                  sto aiutando chi mi è caro a superare gli stessi ostacoli.{" "}
                  <br />
                  <br />
                  Riflettendo sull'ultima discussione che abbiamo avuto in
                  macchina, so che è stato un momento doloroso per entrambi.
                  Voglio che tu sappia che sto lavorando sulla mia guarigione
                  sul trovare la pace dentro di me e cercare di fare meno il
                  represso (cosa che mi ha impedito di esprimere quello che
                  provo per te al parco, convinto di farlo per proteggerti da
                  me). <br />
                  Non voglio che tu ti porta il peso di quello che è successo,
                  perché non è stata colpa tua. <br />
                  <br />
                  Detto questo, so che devo ancora guarire e ho intenzione di
                  farlo(e che ora sono una walking red flag). Sto lavorando su
                  me stesso per diventare la persona che avrei voluto essere per
                  noi. <br />
                  <br />
                  Penso che ti sia aggiudicata il titolo "l'ex storica" che tu
                  tanto hai menzionato. <br />
                  <br />
                  Scusami per aver interrotto il no contact, ma ti scrivo
                  pensando che potessi darti sollievo emotivo con il cuore in
                  mano, come tu hai fatto con me al parco. <br />
                  <br />
                  Mi manca la tua goffaggine, la tua voce e la tua presenza...
                  sopporto a malapena il dolore che ancora provo, ma sono felice
                  di aver amato così tanto una persona. <br />
                  Spero che tu ed Aki stiate bene. Bevi e mangia.
                </p>
                <p className="words line5">Marco</p>
              </div>
            </div>
          </div>
          <div className="pocket" onClick={openEnvelope}></div>
          <div className="flap"></div>
        </div>
      </div>
      {isExpanded && (
        <button className="close-button" onClick={closeLetter}>
          Close
        </button>
      )}

      {/* <div className="reset">
        <button onClick={openEnvelope}>Open</button>
      </div> */}
    </div>
  );
}

export default App;
