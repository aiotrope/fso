import common from "./common";

const getAll = () => {
  return common.get("/persons");
};

const create = (personObject) => {
  return common.post("/persons", personObject);
};

const omit = (id) => {
  return common.delete(`/persons/${id}`);
};

const update = (id, personObject) => {
  return common.put(`/persons/${id}`, personObject);
};

export default { getAll, create, omit, update };
