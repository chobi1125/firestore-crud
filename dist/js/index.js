let $ = e => document.getElementById(e);
let q = e => document.querySelector(e);
let l = e => console.log(e);
let el = e => document.createElement(e);

let process = $("process");
let result = $("result");
let result_array = [];

let getDB = () => {
  db.collection("users").get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id);
        console.log(doc.data());
        result_array.push(doc.id);
      });
      process.textContent = "取得";
      result.textContent = result_array;
    })
  // result.textContent = `ID:${doc.id} data:${doc.data()}`; 
}

let getUniqueDB = () => {
  console.log("getUniqueDB");
  db.collection("users").doc("1").get().then((snapshot) => {
    console.log(snapshot)
    console.log(snapshot.id);
    console.log(snapshot.data());
  })
}

let whereDB = () => {
  console.log("whereDB");
  db.collection("users").where("name","==","masaru").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data());
    })
  })
}

let addDB = () => {
  console.log("addDB");
  db.collection("users").add({
    name: "ちょび",
    id:"guitar"
  }).then((docRef) => {
    console.log(docRef.id);
  })
  .catch((error) => {
    console.log(error);
  })
}

let updateDB = () => {
  console.log("updateDB");
  db.collection("users").doc("1").set({
    name: "ちょび",
  }).then(() => {
    console.log("更新成功");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  })
}

let deleteDB = () => {
  console.log("deleteDB");
  db.collection("users").doc("1").delete().then(() => {
    console.log("削除成功");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  })
}