import { pathOr, sortBy } from "ramda";

const sortMembers = sortBy(pathOr("", ["name", "last"]));

export default sortMembers;
