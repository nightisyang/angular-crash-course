export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

const user: User = {
  name: "John",
  // age: 12,
  id: 1,
  email: "",
};

let { name: userName, email: userEmail } = user;

interface Employees extends User {
  salary: number;
}

let employee: Employees = { name: "John", id: 2, email: "", salary: 1000 };

export interface Login {
  login(): User;
}

const users: User[] = [
  {
    name: "John2",
    id: 2,
    email: "",
  },
  {
    name: "John3",
    id: 3,
    email: "",
  },
  {
    name: "John4",
    id: 4,
    email: "",
  },
  {
    name: "John5",
    id: 5,
    email: "",
  },
  {
    name: "John6",
    id: 6,
    email: "",
  },
  {
    name: "John7",
    id: 7,
    email: "",
  },
  {
    name: "John8",
    id: 8,
    email: "",
  },
];

const [user1, ...rest] = users;
console.log(rest);
