"use client";

import { useState } from "react";
import Image from "next/image";
import type { ItineraryDay } from "@/content/itineraries/types";

export default function ItineraryDays({ days }: { days: ItineraryDay[] }) {
  // First day open by default; click a header to expand/collapse.
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="itin-timeline">
      {days.map((day, i) => {
        const isOpen = open === i;
        return (
          <div
            key={day.label + day.title}
            className={`itin-day${isOpen ? " open" : ""}`}
          >
            <button
              className="itin-day-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="itin-day-marker" aria-hidden="true" />
              <span className="itin-day-label">{day.label}</span>
              <span className="itin-day-title">{day.title}</span>
              {day.nights && (
                <span className="itin-day-nights">{day.nights}</span>
              )}
              <span className="itin-day-chevron" aria-hidden="true" />
            </button>

            <div className="itin-day-panel" hidden={!isOpen}>
              <div className="itin-day-panel-inner">
                <div className="itin-day-text">
                  {day.location && (
                    <span className="itin-day-location">{day.location}</span>
                  )}
                  {day.body.map((para, p) => (
                    <p key={p}>{para}</p>
                  ))}
                  {(day.accommodation || day.meals) && (
                    <dl className="itin-day-facts">
                      {day.accommodation && (
                        <div>
                          <dt>Overnight</dt>
                          <dd>{day.accommodation}</dd>
                        </div>
                      )}
                      {day.meals && (
                        <div>
                          <dt>Meals</dt>
                          <dd>{day.meals}</dd>
                        </div>
                      )}
                    </dl>
                  )}
                </div>

                {day.image && (
                  <div className="itin-day-img">
                    <Image
                      src={day.image}
                      alt={day.imageAlt || day.title}
                      width={520}
                      height={360}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
