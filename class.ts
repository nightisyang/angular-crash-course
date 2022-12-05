class Employee {
  // variable declaraction
  #id: number;
  protected name: string;
  address: string;

  // use constructure to parameterize variables
  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.#id = id;
    this.name = name;
  }

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  // returns with the class name only
  static getEmployeeCount(): number {
    return 50;
  }

  getNameWithAddress(): string {
    return `${this.name}: ${this.address}`;
  }
}

// syntax if constructure parameterization is used
let john = new Employee(1, "John", "Bukit Jalil");
let address = john.getNameWithAddress();

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a Manager at: ${this.address}`;
  }
}

// assign values separately if constructure is not used
// john.id = 1;
// john.name = "John";
// john.address = "Bukit Jalil";

console.log(address);

let mike = new Manager(2, "Mike", "Cherise Drive");

console.log(mike.getNameWithAddress());

Employee.getEmployeeCount();
