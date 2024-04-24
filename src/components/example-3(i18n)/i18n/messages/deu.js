import { LOCALES } from "../locale";

const deu = {
  [LOCALES.DEUTSCH]: {
    title:
      "React-Architektur: So strukturieren und organisieren Sie eine React-Anwendung",
    firstdesc:
      "Es gibt keinen Konsens über den richtigen Weg, eine React-Anwendung zu organisieren. React gibt Ihnen eine Menge Freiheit, aber mit dieser Freiheit kommt die Verantwortung, über Ihre eigene Architektur zu entscheiden. Oft ist es so, dass derjenige, der die Anwendung zu Beginn einrichtet, fast alles in einen Komponenten-Ordner wirft, oder vielleicht Komponenten und Container, wenn er Redux verwendet, aber ich schlage vor, dass es einen besseren Weg gibt. Ich mag es, meine Anwendungen so zu organisieren, dass sie einfach zu benutzen, zu verstehen und zu erweitern sind.",
    seconddesc:
      "Ich werde Ihnen zeigen, was ich für ein intuitives und skalierbares System für groß angelegte React-Anwendungen halte. Das Hauptkonzept, das ich für wichtig halte, ist die Fokussierung der Architektur auf die Funktion im Gegensatz zum Typ, die Organisation von nur gemeinsam genutzten Komponenten auf globaler Ebene und die Modularisierung aller anderen verwandten Einheiten in der lokalisierten view.nd.",
  },
};

export default deu;
