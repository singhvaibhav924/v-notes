let sample = [
    {email : "test1@123", pass : "qwerty1", notes : "Bharat Mata Ji Jai"},
    {email : "test2@123", pass : "qwerty2", notes : "Hindustan Zindabad"},
    {email : "test3@123", pass : "qwerty3", notes : "Jai Shree Ram"},
    {email : "test4@123", pass : "qwerty4", notes : "Vasudaiv Kutumbhkam"}
    
];
const mongoV = (id,pwd) => {
    for(let i = 0;i<sample.length;i++) {
        console.log(id+" "+i+" "+sample[i].email);
        if(sample[i].email == id&&sample[i].pass == pwd) {
            return new Response(JSON.stringify(sample[i]),{
                headers : {'Content-type' : 'application/json'}
            });
        }
    }
    var temp = {email : ""+id, pass : ""+pwd, notes : ""}
    sample.push(temp)
    return new Response(JSON.stringify(sample[sample.length-1]),{
        headers : {'Content-type' : 'application/json'}
    });
}
const mongoP = (id,pwd,values) => {
    for(let i = 0;i<sample.length;i++) {
        if(sample[i].email == id&&sample[i].pass == pwd) {
            sample[i].notes = values;
            return new Response(JSON.stringify(sample[i]),{
                headers : {'Content-type' : 'application/json'}
            });
        }
    }
    return new Response("Invalid Request");
}
export {mongoP,mongoV};