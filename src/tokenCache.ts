import * as os from "os";
import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";
import moment from "moment";
import * as lockfile from "proper-lockfile";

export class TokenCache {
  private _hash: string;

  constructor(developerId: number, apiKey: string) {
    this._hash = crypto.createHash("md5").update(`${developerId}:${apiKey}`).digest("hex");
  }

  get cachePath() {
    const ts = moment().startOf("hour").unix();
    return path.join(os.tmpdir(), `mauna-${this._hash}-${ts}`);
  }

  read(): string | null {
    const cachePath = this.cachePath;
    try {
      while (lockfile.checkSync(cachePath, { stale: 5000 })) {
        // wait until the file is unlocked
      }
      return fs.readFileSync(cachePath).toString().trim();
    } catch {
      return null;
    }
  }

  write(data: string) {
    const cachePath = this.cachePath;
    fs.closeSync(fs.openSync(cachePath, "a"));
    const release = lockfile.lockSync(cachePath, { stale: 5000 });
    fs.writeFileSync(cachePath, data);
    release();
  }
}