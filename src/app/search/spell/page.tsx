import React from "react";
import {
  Spell,
  SpellLevel,
  SpellSchool,
  DamageType,
} from "../../../types/types";
import { TextTransform, transformText } from "../../../utils/utils";

type ViewMode = "grid" | "list";
type CompactMode = "compact" | "full";

interface SpellCardProps {
  spell: Spell;
  viewMode: ViewMode;
  compactMode: CompactMode;
}

export default function SpellCard({
  spell,
  viewMode,
  compactMode,
}: SpellCardProps) {
  function formatCastingTime(castingTime: string) {
    const castingTimeWords = castingTime.replaceAll(",", "").split(" ");
    if (castingTimeWords.length === 1) {
      return castingTime;
    } else {
      return (
        <React.Fragment>
          <span>{`${castingTimeWords[0]} ${castingTimeWords[1]}`}</span>
        </React.Fragment>
      );
    }
  }

  function colorizeSpellSchool(spell: Spell) {
    const school = spell.school.toLowerCase();
    const schoolColors: any = {
      [SpellSchool.ABJURATION]: "bg-white",
      [SpellSchool.CONJURATION]: "bg-blue-300",
      [SpellSchool.DIVINATION]: "bg-yellow-300",
      [SpellSchool.ENCHANTMENT]: "bg-green-300",
      [SpellSchool.EVOCATION]: "bg-red-300",
      [SpellSchool.ILLUSION]: "bg-purple-300",
      [SpellSchool.NECROMANCY]: "bg-black text-white",
      [SpellSchool.TRANSMUTATION]: "bg-orange-300",
    };
    return schoolColors[school];
  }

  function formatSpellDescription(word: string, index: number) {
    const damageTypeColors = {
      [DamageType.ACID]: "text-lime-600",
      [DamageType.BLUDGEONING]: "text-zinc-600",
      [DamageType.COLD]: "text-sky-600",
      [DamageType.FIRE]: "text-orange-600",
      [DamageType.FORCE]: "text-red-600",
      [DamageType.LIGHTNING]: "text-blue-600",
      [DamageType.NECROTIC]: "text-black text-white",
      [DamageType.PIERCING]: "text-zinc-600",
      [DamageType.POISON]: "text-green-600",
      [DamageType.PSYCHIC]: "text-fuchsia-600",
      [DamageType.RADIANT]: "text-yellow-600",
      [DamageType.SLASHING]: "text-zinc-600",
      [DamageType.THUNDER]: "text-purple-600",
    };

    const damageType = word.toLowerCase() as DamageType;
    if (damageType in damageTypeColors) {
      const colorClass = damageTypeColors[damageType];
      return (
        <React.Fragment key={`${word}-${index}`}>
          <b className={colorClass}>{word}</b>{" "}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={`${word}-${index}`}>
          <span>{word}</span>{" "}
        </React.Fragment>
      );
    }
  }

  return (
    <div
      key={spell.slug}
      className="flex flex-col gap-6 p-4 bg-gray-100 rounded-lg cursor-pointer"
    >
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center justify-between">
          <strong className="text-2xl">{spell.name}</strong>
          <p className="text-xs text-gray-400">{spell.document__title}</p>
        </div>

        {spell.level === SpellLevel.CANTRIP ? (
          <div
            className={`flex flex-row gap-1 w-fit px-2 rounded-lg items-center ${colorizeSpellSchool(
              spell
            )}`}
          >
            <p>{transformText(spell.school, TextTransform.CAPITALIZE)}</p>
            <p>{spell.level.toLowerCase()}</p>
          </div>
        ) : (
          <div
            className={`flex flex-row gap-1 w-fit px-2 rounded-lg items-center ${colorizeSpellSchool(
              spell
            )}`}
          >
            <p>{transformText(spell.level, TextTransform.CAPITALIZE)}</p>
            <p>{spell.school.toLowerCase()}</p>
          </div>
        )}
      </div>

      <div className="grid grid-rows-auto grid-cols-4 items-center gap-4 border-2 border-gray-300 rounded-lg p-2">
        <div className="flex flex-col gap-1">
          <strong className="text-xs">CASTING TIME</strong>
          <div className="flex flex-row gap-1 items-center">
            <p className="text-xs">{formatCastingTime(spell.casting_time)}</p>
            {spell.can_be_cast_as_ritual && (
              <span className="inline-block text-center w-[12px] h-[12px] text-[8px] leading-[12px] rounded-full bg-black text-white">
                R
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <strong className="text-xs">DURATION</strong>
          <div className="flex flex-row gap-1 items-center">
            {spell.requires_concentration && (
              <span className="inline-block text-center w-[12px] h-[12px] text-[8px] leading-[12px] rounded-full bg-black text-white">
                C
              </span>
            )}
            <p className="text-xs">{spell.duration}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <strong className="text-xs">RANGE/AREA</strong>
          <p className="text-xs">{spell.range}</p>
        </div>
        {spell.components && (
          <div className="flex flex-col gap-1">
            <strong className="text-xs">COMPONENTS</strong>
            <p className="text-xs">{spell.components}</p>
          </div>
        )}
      </div>
      <div
        className={compactMode === "full" ? "text-xs cursor-text" : "hidden"}
      >
        {spell.desc}
      </div>

      <div
        className={compactMode === "full" ? "flex flex-col gap-4" : "hidden"}
      >
        {spell.material && (
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">MATERIALS</p>
            <p className="text-xs">{spell.material}</p>
          </div>
        )}
        <hr className="rounded-full"></hr>
        {spell.higher_level && (
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">AT HIGHER LEVELS</p>
            <p className="text-xs">{spell.higher_level}</p>
          </div>
        )}
        {spell.dnd_class && (
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">CLASS</p>
            <p className="text-xs">{spell.dnd_class}</p>
          </div>
        )}
      </div>
    </div>
  );
}
