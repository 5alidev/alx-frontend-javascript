interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string | boolean]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
