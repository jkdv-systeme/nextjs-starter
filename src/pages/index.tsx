import React, { createElement, ReactElement, SVGProps } from "react";
import {
  DocumentTextIcon,
  PuzzlePieceIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

type Point = {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: ReactElement | string;
};

const points: Point[] = [
  {
    icon: DocumentTextIcon,
    text: "TypeScript für einfachere Fehlerfindung",
  },
  {
    icon: PuzzlePieceIcon,
    text: "Kleine und unabhängige Komponenten",
  },
  {
    icon: QuestionMarkCircleIcon,
    text: "Hab den Punkt vergessen, war aber gut!",
  },
];

type Props = {};
const Preview = (props: Props) => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img
        src="/images/beams.png"
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
      />
      <div className="relative bg-white px-6 pt-8 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <img
            src="/images/logo.png"
            className="h-16 mx-auto"
            alt="JKDV Systeme"
          />
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p className="">
                Ein einfaches Demoprojekt von JKDV für die Entwicklung von
                reaktiven Frontendumgebungen. Beinhaltet beispielsweise:
              </p>
              <ul className="space-y-4">
                {points.map((point, pointIdx) => (
                  <li className="flex items-center" key={pointIdx}>
                    {createElement(point.icon, {
                      className:
                        "h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2",
                    })}
                    <p className="ml-4">{point.text}</p>
                  </li>
                ))}
              </ul>
              <p>
                Starte jetzt, indem du in{" "}
                <code className="text-sm font-bold text-gray-900">
                  src/pages/index.tsx
                </code>{" "}
                diesen Code durch eigenen ersetzt.
              </p>
            </div>
            <div className="pt-8 text-base font-semibold leading-7">
              <p className="text-gray-900">Mehr über JKDV erfahren?</p>
              <p>
                <a
                  href="https://www.jkdv.de"
                  className="text-sky-500 hover:text-sky-600"
                >
                  Zu unserer Website &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
