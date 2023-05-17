export interface Model {}

export type APIReference = {
  index: string;
  name: string;
  url: string;
};

export type DC = {
  dc_type: APIReference;
  dc_value: number;
  success_type: "none" | "half" | "other";
};

export type Damage = {
  damage_type: APIReference;
  damage_dice: string;
};

export type Choice = {
  desc: string;
  choose: number;
  type: string;
  from: OptionSet;
};

export type OptionSet = {
  option_set_type: "options_array" | "equipment_category" | "resource_list";
  options?: Option[];
  equipment_category?: APIReference;
  resource_list_url?: string;
};

export type Option = {
  option_type:
    | "reference"
    | "item"
    | "action"
    | "multiple"
    | "choice"
    | "string"
    | "ideal"
    | "counted_reference"
    | "score_prerequisite"
    | "ability_bonus"
    | "breath"
    | "damage";
  reference?: APIReference;
  item?: APIReference;
  action_name?: string;
  count?: number | string;
  type?: "melee" | "ranged" | "ability" | "magic";
  items?: Option[];
  choice?: Choice;
  string?: string;
  desc?: string;
  alignments?: APIReference[];
  counted_reference?: {
    count: number;
    of: APIReference;
  };
  ability_score?: APIReference;
  minimum_score?: number;
  bonus?: number;
  name?: string;
  dc?: DC;
  damage?: Damage[];
  damage_type?: APIReference;
  damage_dice?: string;
  notes?: string;
};
