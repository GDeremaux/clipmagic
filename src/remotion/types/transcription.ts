export interface ElevenlabsAlignment {
  characters: string[];
  character_start_times_seconds: number[];
  character_end_times_seconds: number[];
}

export interface Character {
  character: string;
  start: number;
  end: number;
}

export interface Word {
  word: string;
  start: number;
  end: number;
  characters: Character[];
}

export interface Sentence {
  sentence: string;
  start: number;
  end: number;
  words: Word[];
}

export interface Transcription {
  characters: Character[];
  words: Word[];
  sentences: Sentence[];
}