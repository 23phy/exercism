import { Parser, Grammar } from "nearley";
// @ts-ignore - No declaration file for module './wordy-nec.js'
import { default as grammar } from "./wordy-nec.js";

export class WordProblem {
  private m_parser: Parser;

  constructor(private question: string) {
    this.m_parser = new Parser(Grammar.fromCompiled(grammar));
  }
  
  public answer(): number {
    try {
      this.m_parser.feed(this.question);
    } catch (error) {
      throw new ArgumentError(error);
    }

    return this.m_parser.results[0];
  }
}

export class ArgumentError extends Error {
  constructor(message: string) {
    super(message)
  }
}