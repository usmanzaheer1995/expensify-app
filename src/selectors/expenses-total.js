import _ from "lodash";

export default expenses => _.sumBy(expenses, "amount");
