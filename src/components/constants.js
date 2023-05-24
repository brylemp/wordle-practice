// Default game settings
export const WORD_LENGTH = 5;
export const GUESS_ATTEMPTS = 6;

// Handling keydown
export const KEY_DOWN = 'keydown';
export const ENTER_KEY = 13;
export const BACK_SPACE_KEY = 8;
export const A_KEY = 65;
export const Z_KEY = 90;

// Block status
export const UNKNOWN = 0;
export const NO_MATCH = 1;
export const CORRECT_LETTER = 2;
export const CORRECT_PLACEMENT = 3;

// Status colors
export const YELLOW = 'rgba(200,180,88,255)';
export const GREEN = 'rgba(107,170,100,255)';
export const GRAY = 'rgba(120,124,126,255)';
export const LIGHT_GRAY = 'lightgray';
export const WHITE = 'white';
export const BLACK = 'black';

// Default state values
export const EMPTY_LETTER = {'':0};
export const EMPTY_WORD = [EMPTY_LETTER,EMPTY_LETTER,EMPTY_LETTER,EMPTY_LETTER,EMPTY_LETTER];
export const EMPTY_WORDS = [EMPTY_WORD,EMPTY_WORD,EMPTY_WORD,EMPTY_WORD,EMPTY_WORD,EMPTY_WORD];
export const KEYBOARD = {
  "A": UNKNOWN,
  "B": UNKNOWN,
  "C": UNKNOWN,
  "D": UNKNOWN,
  "E": UNKNOWN,
  "F": UNKNOWN,
  "G": UNKNOWN,
  "H": UNKNOWN,
  "I": UNKNOWN,
  "J": UNKNOWN,
  "K": UNKNOWN,
  "L": UNKNOWN,
  "M": UNKNOWN,
  "N": UNKNOWN,
  "O": UNKNOWN,
  "P": UNKNOWN,
  "Q": UNKNOWN,
  "R": UNKNOWN,
  "S": UNKNOWN,
  "T": UNKNOWN,
  "U": UNKNOWN,
  "V": UNKNOWN,
  "W": UNKNOWN,
  "X": UNKNOWN,
  "Y": UNKNOWN,
  "Z": UNKNOWN,
};
