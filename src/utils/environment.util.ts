import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

export class Environment {
  static isProduction() {
    return process.env.NODE_ENV === "production";
  }
}
