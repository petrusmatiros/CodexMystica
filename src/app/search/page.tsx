"use client";

import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import { API } from "../../api/api";
import { Spell } from "../../types/types";
import Fuse from "fuse.js";

import SpellCard from "./spell/page";

type ViewMode = "grid" | "list";
type CompactMode = "compact" | "full";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchedData, setFetchedData] = useState({ results: [] } as any);
  const [viewMode, setViewMode] = useState("grid" as ViewMode);
  const [compactMode, setCompactMode] = useState("full" as CompactMode);

  const options = {
    threshold: 0.9,
    distance: 30,
    keys: ["name"],
  };

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchSpells() {
      if (searchQuery) {
        try {
          const res = await fetch(
            `${API.BASE_URL}${API.SPELLS}?search=${searchQuery}`,
            { signal: abortController.signal }
          );
          const data = await res.json();
          setFetchedData((prev: any) => ({ ...prev, results: data.results }));
          const fuse = new (Fuse as any)(data.results, options);
          const fuseResults = fuse.search(searchQuery);
          let dataToSet: { results: any[] } = { results: [] };
          let seen: any = [];
          fuseResults.forEach((e: any) => {
            if (!seen.includes(e.item.name.toLowerCase())) {
              dataToSet.results.push(e.item);
              seen.push(e.item.name.toLowerCase());
            }
          });

          if (fuseResults.length === 0) {
            setFetchedData((prev: any) => ({ ...prev, results: [] }));
          } else {
            setFetchedData((prev: any) => ({
              ...prev,
              results: dataToSet.results,
            }));
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const res = await fetch(`${API.BASE_URL}${API.SPELLS}`, {
            signal: abortController.signal,
          });
          const data = await res.json();
          setFetchedData((prev: any) => ({ ...prev, results: data.results }));
        } catch (error) {
          console.log(error);
        }
      }
    }
    console.log("fetching...");
    fetchSpells();
    return () => {
      abortController.abort();
    };
  }, [searchQuery]);

  function generateSpellCard(spell: Spell) {
    return (
      <SpellCard spell={spell} viewMode={viewMode} compactMode={compactMode} key={spell.slug}/>
    );
  }

  function searchForSpell(event: React.FormEvent<HTMLInputElement>) {
    setSearchQuery(event.currentTarget.value);
  }

  function changeViewMode(event: React.MouseEvent<HTMLButtonElement>) {
    const mode = event.currentTarget.dataset.mode as ViewMode;
    if (mode === "grid") {
      setViewMode("list" as ViewMode);
    } else if (mode === "list") {
      setViewMode("grid" as ViewMode);
    }
  }

  function changeCompactMode(event: React.MouseEvent<HTMLButtonElement>) {
    const mode = event.currentTarget.dataset.mode as CompactMode;
    if (mode === "compact") {
      setCompactMode("full" as CompactMode);
    } else if (mode === "full") {
      setCompactMode("compact" as CompactMode);
    }
  }

  return (
    <div className="flex flex-col p-4 items-center gap-4">
      <h1 className="text-2xl font-bold">Spell Page</h1>

      <search className="flex flex-row w-full gap-2">
        <input
          className="p-2 mx-1 rounded-lg border-solid border-2 border-gray-300 w-full"
          type="text"
          autoComplete="off"
          autoCorrect="off"
          autoFocus={true}
          placeholder="Search for a spell..."
          spellCheck="false"
          id="searchSpell"
          name="searchSpell"
          onInput={searchForSpell}
        ></input>
        <div className="flex flex-row gap-1">
          <button
            className="flex flex-row p-2 bg-gray-100 rounded-lg font-semibold cursor-pointer select-none"
            data-mode={viewMode}
            onClick={changeViewMode}
          >
            {viewMode === "list" ? (
              <span className="material-symbols-rounded">view_list</span>
            ) : (
              <span className="material-symbols-rounded">grid_view</span>
            )}
          </button>
          <button
            className="flex flex-row p-2 bg-gray-100 rounded-lg font-semibold cursor-pointer select-none"
            data-mode={compactMode}
            onClick={changeCompactMode}
          >
            {compactMode === "full" ? (
              <span className="material-symbols-rounded">width_full</span>
            ) : (
              <span className="material-symbols-rounded">view_stream</span>
            )}
          </button>
        </div>
      </search>
      <div
        className={
          viewMode === "list"
            ? "flex flex-col gap-4 p-1 w-full"
            : "grid grid-rows-auto grid-cols-3 gap-4 p-1 w-full"
        }
      >
        {fetchedData.results.map(generateSpellCard)}
      </div>
    </div>
  );
}
