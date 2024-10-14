import { Logger, SxObject } from "../util";

export enum FormatType {
    XML = "XML",
    JSON = "JSON",
}

export interface Format {

    extension(): string;
    transformTo(record: SxObject<any>): Promise<string>;
    transformFrom(content: string | Buffer): Promise<SxObject<any>[]>;

}
