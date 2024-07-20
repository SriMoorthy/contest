let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(person =>{
        if(person.profession === 'developer'){
            console.log(person)
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(person =>{
        if(person.profession === 'developer'){
            console.log(person)
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    const addPeople = {id:4,name:"susan",age:"20",profession:"intern"}
    console.log(arr.push(addPeople))
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const updatePeople = arr.filter(person => person.profession !== 'admin')
    console.log(updatePeople)
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newPeople = [
        {id: 5, name: "amutha", age: "21", profession: "designer"},
        {id: 6, name: "sriram", age: "22", profession: "engineer"},
        {id: 7, name: "modi", age: "23", profession: "politician"}
      ];
     const combinedArr =  arr.concat(newPeople);
     console.log(combinedArr)
  }

//   const Usingmap = arr.map(PrintDeveloperbyMap);
//   console.log(Usingmap);

//   PrintDeveloperbyMap();
//   PrintDeveloperbyForEach()