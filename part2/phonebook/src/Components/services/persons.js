import common from "./common";

const getAll = () => {
  return common.get("/persons");
};

const create = (personObject) => {
  return common.post("/persons", personObject);
};

export default { getAll, create };
