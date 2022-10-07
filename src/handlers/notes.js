import {mongoP,mongoV} from "../db/mongo.js";
const notes = async (request) => {
   const req = await request.json();
   if(!req.hasOwnProperty("notes")) {
      console.log("notes found")
      return(validate(req))
   } else {
      console.log("notes not found")
      return post(req)
   }
   
}
function validate(req) {
   const {id,pass} = req;
   console.log(`body values ${id}`);
   return mongoV(id,pass);
}
function post(req) {
   const {id,pass,notes} = req;
   return mongoP(id,pass,notes);
}
export default notes;