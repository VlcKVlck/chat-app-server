import {mockUserDetails} from "./mockUserDetails";

export const mockUsers = ()=>{
  const mockUsersArray=[];
  for (const person of mockUserDetails){
    mockUsersArray.push({id: person.id, name: person.name})
  }
  return mockUsersArray;

}




