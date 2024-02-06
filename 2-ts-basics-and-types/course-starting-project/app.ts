function add(n1: number, n2: number, showResult: boolean): number | undefined {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

interface Person {
  name: string;
  age: number;
  hobies: string[];
  role: Role;
}

const person = {
  name: "Peter",
  age: 27,
  hobies: ["code", "books"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  // admin
}
