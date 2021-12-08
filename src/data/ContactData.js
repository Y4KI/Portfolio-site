const formData = [
  { fieldModel: "", fieldError: "", fieldFor: "name", fieldType: "text" },
  { fieldModel: "", fieldError: "", fieldFor: "email", fieldType: "email" },
  { fieldModel: "", fieldError: "", fieldFor: "number", fieldType: "number" },
  { fieldModel: "", fieldError: "", fieldFor: "topic", fieldType: "text" },
];
const messageData = [
  {
    fieldModel: "",
    fieldError: "",
    fieldFor: "Message",
    fieldType: "text",
  },
];
const errorChecker = (array, data) => {
  array.forEach((e) => {
    if (!e.fieldModel) {
      e.fieldError = "Please write your " + e.fieldFor;
      data([...array]);
    } else {
      e.fieldError = "";
      data([...array]);
    }
  });
};
const inputModel = (event, index, target) => {
  target.name[index].fieldModel = event.target.value;
  target.function([...target.name]);
};

export { formData, messageData, errorChecker, inputModel };
