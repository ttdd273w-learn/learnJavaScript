import { capitalizeString } from "./string_function";

const cap = capitalizeString("hello");

console.log(cap);

// to export const
export const foo = "foo";

export { capitalizeString };

// use * to import everything
import * as capitalizedStrings from "filename";
